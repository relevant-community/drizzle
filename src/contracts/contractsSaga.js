import { END, eventChannel } from 'redux-saga'
import { call, put, select, take, takeLatest, takeEvery } from 'redux-saga/effects'
import DrizzleContract from '../DrizzleContract'

export function* addContract({drizzle, contractConfig, events, web3, fallback, address}) {
  // Prevents double-adding contracts
  if (!drizzle) return;
  if (drizzle.loadingContract[contractConfig.contractName]) { return false }

  drizzle.loadingContract[contractConfig.contractName] = true

  yield put({type: 'CONTRACT_INITIALIZING', contractConfig})

  let drizzleContract

  // if (contractConfig.web3Contract) {
    // drizzleContract = yield call(instantiateWeb3Contract, {web3Contract: contractConfig.web3Contract, name: contractConfig.contractName, events, store: drizzle.store, web3, fallback})
  // } else {
  drizzleContract = yield call(instantiateContract, {contractArtifact: contractConfig, events, store: drizzle.store, web3, fallback, address: address})
  // }
  let contract = drizzle._addContract(drizzleContract)
  yield put({type: 'CONTRACT_INITIALIZED', name: address || contractConfig.contractName, contract})
}

/*
 * Instantiation
 */

export function* instantiateWeb3Contract({web3Contract, name, events, store, web3, fallback}) {
  return new DrizzleContract(web3Contract, web3, name, store, events)
}

export function* instantiateContract({contractArtifact, events, store, web3, fallback, address}) {
  const networkId = yield select(getNetworkId)
  const fallbackNetworkId = yield select(getFallbackNetworkId)
  var web3Contract
  var fallbackContract;

  // Instantiate the contract.
  if (web3) {
    web3Contract = new web3.eth.Contract(
      contractArtifact.abi,
      address || contractArtifact.networks[networkId].address,
      {
        from: store.getState().accounts[0],
        data: contractArtifact.deployedBytecode
      }
    )
  }

  if (fallback) {
    fallbackContract = new fallback.eth.Contract(
      contractArtifact.abi,
      address || contractArtifact.networks[fallbackNetworkId].address,
      {
        data: contractArtifact.deployedBytecode
      }
    )
  }

  // TODO better logic - wait for connection!
  // if websocket provider, then wait for websocket to connect;
  // if (fallback) {
  //   console.log('instantiate contract ', address);
  //   yield fallback.currentProvider.on('connect', e => {
  //     console.log('connected, get events for ', address || contractArtifact.contractName);
  //     return new DrizzleContract(web3Contract, web3, address || contractArtifact.contractName, store, events, contractArtifact, fallbackContract)
  //   });
  // }
  // this is called twice right now
  // console.log('new contract ', address || contractArtifact.contractName);
  return new DrizzleContract(web3Contract, web3, address || contractArtifact.contractName, store, events, contractArtifact, fallbackContract)

}

/*
 * Events
 */

function createContractEventChannel({contract, eventName, eventOptions}) {
  const name = contract.contractName

  // if we have a ws fallback - use that for events
  const eventEnabledContract = contract.fallbackContract || contract

  return eventChannel(emit => {
    const eventListener = eventEnabledContract.events[eventName](eventOptions)
    .on('data', event => {
      emit({type: 'EVENT_FIRED', name, event})
    })
    .on('changed', event => {
      emit({type: 'EVENT_CHANGED', name, event})
    })
    .on('error', error => {
      emit({type: 'EVENT_ERROR', name, error})
      emit(END)
    })

    const unsubscribe = () => {
      eventListener.removeListener(eventName)
    }

    return unsubscribe
  })
}

function* callListenForContractEvent({contract, eventName, eventOptions}) {
  const contractEventChannel = yield call(createContractEventChannel, {contract, eventName, eventOptions})
  while (true) {
    var event = yield take(contractEventChannel)
    yield put(event)
  }
}

// function* callPollContractEvent({contract, eventName, eventOptions}) {
//   setInterval(() => {
//     console.log('polling events');
//     callGetContractEvent({contract, eventName, eventOptions});
//   }, 3000);
// }


function* callGetContractEvent({contract, eventName, eventOptions}) {
  const eventEnabledContract = contract.fallbackContract || contract
  const name = contract.contractName || contract.address
  let events;

  try {
    events = yield eventEnabledContract.getPastEvents(eventName, {
      // filter: {_from: addr},
      fromBlock: 0,
      toBlock: 'latest'
    })
  } catch (e) {
    console.log('error getting events manually', e);
  }

  if (!events) return;

  for(let i = 0; i< events.length; i++) {
    let event = events[i];
    yield put({type: 'EVENT_FIRED', name, event})
  }
}



/*
 * Send and Cache
 */

function createTxChannel({txObject, stackId, sendArgs = {}, contractName}) {
  var persistTxHash

  return eventChannel(emit => {
    const txPromiEvent = txObject.send(sendArgs).on('transactionHash', txHash => {
      persistTxHash = txHash

      emit({type: 'TX_BROADCASTED', txHash, stackId})
      emit({type: 'CONTRACT_SYNC_IND', contractName})
    })
    .on('confirmation', (confirmationNumber, receipt) => {
      emit({type: 'TX_CONFIRMAITON', confirmationReceipt: receipt, txHash: persistTxHash})
    })
    .on('receipt', receipt => {
      emit({type: 'TX_SUCCESSFUL', receipt: receipt, txHash: persistTxHash})
      emit(END)
    })
    .on('error', error => {
      emit({type: 'TX_ERROR', error: error, txHash: persistTxHash})
      emit(END)
    })

    const unsubscribe = () => {
      txPromiEvent.off()
    }

    return unsubscribe
  })
}

function* callSendContractTx({contract, fnName, fnIndex, args, stackId}) {
  // Check for type of object and properties indicative of call/send options.
  if (args.length) {
    const finalArg = args.length > 1 ? args[args.length - 1] : args[0]
    var sendArgs = {}
    var finalArgTest = false

    if (typeof finalArg === 'object') {
      var finalArgTest = call(isSendOrCallOptions, finalArg)
    }

    if (finalArgTest) {
      sendArgs = finalArg

      args.length > 1 ? delete args[args.length - 1] : delete args[0]
      args.length = args.length - 1
    }
  }

  // Get name to mark as desynchronized on tx creation
  const contractName = contract.contractName

  // Create the transaction object and execute the tx.
  const txObject = yield call(contract.methods[fnName], ...args)
  const txChannel = yield call(createTxChannel, {txObject, stackId, sendArgs, contractName})

  try {
    while (true) {
      var event = yield take(txChannel)
      yield put(event)
    }
  } finally {
    txChannel.close()
  }
}

/*
 * Call and Cache
 */

function* callCallContractFn({contract, fnName, fnIndex, args, argsHash, sync = false}) {
  // keeping for pre-v1.1.5 compatibility with CALL_CONTRACT_FN event.
  if (sync) {
    return
  }

  // Check for type of object and properties indicative of call/send options.
  if (args.length) {
    const finalArg = args.length > 1 ? args[args.length - 1] : args[0]
    var callArgs = {}
    var finalArgTest = false

    if (typeof finalArg === 'object') {
      var finalArgTest = call(isSendOrCallOptions, finalArg)
    }

    if (finalArgTest) {
      callArgs = finalArg

      args.length > 1 ? delete args[args.length - 1] : delete args[0]
      args.length = args.length - 1
    }
  }

  // Create the transaction object and execute the call.
  const txObject = yield call(contract.methods[fnName], ...args)

  try {
    const callResult = yield call(txObject.call, callArgs)

    var dispatchArgs = {
      name: contract.contractName,
      variable: contract.abi[fnIndex].name,
      argsHash: argsHash,
      args: args,
      value: callResult,
      fnIndex: fnIndex
    }

    yield put({type: 'GOT_CONTRACT_VAR', ...dispatchArgs})
  }
  catch (error) {
    console.error(error)

    var errorArgs = {
      name: contract.contractName,
      variable: contract.abi[fnIndex].name,
      argsHash: argsHash,
      args: args,
      error: error,
      fnIndex: fnIndex
    }

    yield put({type: 'ERROR_CONTRACT_VAR', ...errorArgs})
  }
}

/*
 * Sync Contract
 */

function* callSyncContract(action) {
  // Get contract state from store
  const contract = action.contract
  const contractName = contract.contractName

  const contractsState = yield select(getContractsState)
  var contractFnsState = Object.assign({}, contractsState[contractName].state)

  // Remove unnecessary keys
  delete contractFnsState.initialized
  delete contractFnsState.synced
  delete contractFnsState.events

  // Iterate over functions and hashes
  for (var fnName in contractFnsState)
  {
    for (var argsHash in contractFnsState[fnName])
    {
      const fnIndex = contractFnsState[fnName][argsHash].fnIndex
      const args = contractFnsState[fnName][argsHash].args

      // Pull args and call fn for each given function
      // keeping for pre-v1.1.5 compatibility with CALL_CONTRACT_FN event.
      yield put({type: 'CALL_CONTRACT_FN', contract, fnName, fnIndex, args, argsHash, sync: true})
      yield call(callCallContractFn, {contract, fnName, fnIndex, args, argsHash})
    }
  }

  // When complete, dispatch CONTRACT_SYNCED
  yield put({type: 'CONTRACT_SYNCED', contractName})
}

const getContractsState = (state) => state.contracts
const getNetworkId = (state) => state.web3.networkId
const getFallbackNetworkId = (state) => state.web3.fallbackNetworkId

function isSendOrCallOptions(options) {
  if ('from' in options) return true
  if ('gas' in options) return true
  if ('gasPrice' in options) return true
  if ('value' in options) return true

  return false
}

function* contractsSaga() {
  yield takeEvery('SEND_CONTRACT_TX', callSendContractTx)
  yield takeEvery('CALL_CONTRACT_FN', callCallContractFn)
  yield takeEvery('CONTRACT_SYNCING', callSyncContract)

  // yield takeEvery('LISTEN_FOR_EVENT', callListenForContractEvent)

  yield takeEvery('LISTEN_FOR_EVENT', callGetContractEvent)
  yield takeEvery('ADD_CONTRACT', addContract)
  yield takeEvery('GET_CONTRACT_EVENT', callGetContractEvent)
}

export default contractsSaga;
