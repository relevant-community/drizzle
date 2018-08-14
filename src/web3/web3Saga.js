import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects'

var Web3 = require('web3')

/*
 * Initialization
 */

export function* initializeWeb3({options}) {

  try {
    var web3;
    var fallback;

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider.
      web3 = new Web3(window.web3.currentProvider)
      web3.eth.cacheSendTransaction = (txObject) => put({type: 'SEND_WEB3_TX', txObject, stackId, web3})

      console.log('Injected web3 detected.')


    }

    if (options.fallback) {
      // Attempt fallback if no web3 injection.
      console.log('Connecting fallback provider.')

      switch (options.fallback.type) {
        case 'ws':
          var provider = new Web3.providers.WebsocketProvider(options.fallback.url)

          fallback = new Web3(provider)

          provider.on('error', e => console.log('WS Error', e));
          provider.on('end', e => {
            console.log('WS closed');
            console.log('Attempting to reconnect...');
            provider = new Web3.providers.WebsocketProvider(options.fallback.url);

            provider.on('connect', function () {
                console.log('WSS Reconnected');
            });

            fallback.setProvider(provider);
          });



          // Attach drizzle functions
          fallback.eth['cacheSendTransaction'] = (txObject) => put({type: 'SEND_WEB3_TX', txObject, stackId, web3})

          break
        default:
          // Invalid options; throw.
          // throw "Invalid web3 fallback provided."
      }
    }
    if (!web3 && !fallback) {
      throw 'missing web3 privider'
    }

    yield put({type: 'WEB3_INITIALIZED'})

    return { web3, fallback }
  }
  catch (error) {
    yield put({type: 'WEB3_FAILED', error})
    console.error('Error intializing web3:')
    console.error(error)
  }
}

/*
 * Network ID
 */

export function* getNetworkId({web3, options}) {
  try {
    var networkId;
    var fallbackNetworkId;
    if (web3)
      networkId = yield call(web3.eth.net.getId)

    if (options.fallback && options.fallback.networkId)
      fallbackNetworkId = options.fallback.networkId

    yield put({type: 'NETWORK_ID_FETCHED', networkId, fallbackNetworkId})

    return networkId
  }
  catch(error){
    yield put({type: 'NETWORK_ID_FAILED', error})

    console.error('Error fetching network ID:')
    console.error(error)

    return
  }
}

/*
 * Send Transaction
 */

function createTxChannel({txObject, stackId, web3}) {
  var persistTxHash

  return eventChannel(emit => {
    const txPromiEvent = web3.eth.sendTransaction(txObject).on('transactionHash', txHash => {
      persistTxHash = txHash

      emit({type: 'W3TX_BROADCASTED', txHash, stackId})
    })
    .on('confirmation', (confirmationNumber, receipt) => {
      emit({type: 'W3TX_CONFIRMAITON', confirmationReceipt: receipt, txHash: persistTxHash})
    })
    .on('receipt', receipt => {
      emit({type: 'W3TX_SUCCESSFUL', receipt: receipt, txHash: persistTxHash})
      emit(END)
    })
    .on('error', error => {
      emit({type: 'W3TX_ERROR', error: error, txHash: persistTxHash})
      emit(END)
    })

    const unsubscribe = () => {
      txPromiEvent.off()
    }

    return unsubscribe
  })
}

function* callSendTx({txObject, stackId, web3}) {
  const txChannel = yield call(createTxChannel, {txObject, stackId, web3})

  try {
    while (true) {
      var event = yield take(txChannel)
      yield put(event)
    }
  } finally {
    txChannel.close()
  }
}

function* web3Saga() {
  yield takeLatest('NETWORK_ID_FAILED', getNetworkId)
  yield takeEvery('SEND_WEB3_TX', callSendTx)
}

export default web3Saga
