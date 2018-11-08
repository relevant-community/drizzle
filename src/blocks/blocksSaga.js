import { END, eventChannel } from 'redux-saga'
import { call, put, take, takeEvery, takeLatest, all } from 'redux-saga/effects'
import BlockTracker from 'eth-block-tracker';

// const createInfuraProvider = require('eth-json-rpc-infura/src/createProvider')

/*
 * Listen for Blocks
 */

function createBlockChannel({drizzle, web3, syncAlways}) {
  return eventChannel(emit => {
    const blockEvents = web3.eth.subscribe('newBlockHeaders', (error, result) => {
      if (error)
      {
        emit({type: 'BLOCKS_FAILED', error})

        console.error('Error in block header subscription:')
        console.error(error)

        emit(END)
      }
    })
    .on('data', (blockHeader) => {
      emit({type: 'BLOCK_RECEIVED', blockHeader, drizzle, web3, syncAlways})
    })
    .on('error', error => {
      emit({type: 'BLOCKS_FAILED', error})
      emit(END)
    })

    const unsubscribe = () => {
      blockEvents.off()
    }

    return unsubscribe
  })
}

function* callCreateBlockChannel({drizzle, web3, syncAlways}) {
  const blockChannel = yield call(createBlockChannel, {drizzle, web3, syncAlways})

  try {
    while (true) {
      var event = yield take(blockChannel)
      yield put(event)
    }
  } finally {
    blockChannel.close()
  }
}

/*
 * Poll for Blocks
 */

function createBlockPollChannel({drizzle, interval, web3, syncAlways}) {
  return eventChannel(emit => {
    const provider = web3.currentProvider
    const blockTracker = new BlockTracker({ provider, pollingInterval: interval})

    blockTracker.getCurrentBlock()

    blockTracker
    .on('sync', ({ newBlock, oldBlock }) => {
      let newB = Number(newBlock);
      let oldB = Number(oldBlock);
      console.log('new block ', Number(newB))
      // console.log('old block ', Number(oldB))
      let skipped = oldB ? newB - oldB : 0

      while(skipped > 1) {
        let blockHeader = { number: oldB + 1 };
        emit({type: 'BLOCK_RECEIVED', blockHeader, drizzle, web3, syncAlways})
        skipped--
        console.log('getting skipped blocks ', skipped, oldB + 1 );
      }

      let blockHeader = { number: newB };
      emit({type: 'BLOCK_RECEIVED', blockHeader, drizzle, web3, syncAlways})
    })
    .on('error', error => {
      emit({type: 'BLOCKS_FAILED', error})
      emit(END)
    })

    return () => {};
  })
}

function* callCreateBlockPollChannel({drizzle, interval, web3, syncAlways}) {
  const blockChannel = yield call(createBlockPollChannel, {drizzle, interval, web3, syncAlways})

  try {
    while (true) {
      var event = yield take(blockChannel)
      yield put(event)
    }
  } finally {
    blockChannel.close()
  }
}

/*
 * Process Blocks
 */

function* processBlockHeader({blockHeader, drizzle, web3, syncAlways}) {
  const blockNumber = blockHeader.number

  try {
    let block = yield call(web3.eth.getBlock, blockNumber, true)

    if (!block) {
      // sometimes block is null with ws :(
      // block = yield call(web3.eth.getBlock, blockNumber, true)
      throw new Error('missing block number ' + blockNumber);
    }
    yield call(processBlock, {block, drizzle, web3, syncAlways})
  }
  catch (error) {
    console.error('Error in block processing:')
    console.error(error)

    yield put({type: 'BLOCK_FAILED', error})

    return
  }
}

function* processBlock({block, drizzle, web3, syncAlways}) {

  try {
    if (syncAlways)
    {
      yield all(Object.keys(drizzle.contracts).map(key => {
        return put({type: 'CONTRACT_SYNCING', contract: drizzle.contracts[key]})
      }))

      return
    }

    // console.log('got new block ');
    // console.log(block);
    if (!block) return;
    const txs = block.transactions

    if (txs.length > 0)
    {
      // Loop through txs looking for any contract address of interest
      for (var i = 0; i < txs.length; i++)
      {
        var from = txs[i].from || ''
        var fromContract = drizzle.findContractByAddress(from.toLowerCase())
        if (fromContract) {
          yield put({type: 'CONTRACT_SYNCING', contract: fromContract})
        }

        var to = txs[i].to || ''
        var toContract = drizzle.findContractByAddress(to.toLowerCase())
        if (toContract) {
          yield put({type: 'CONTRACT_SYNCING', contract: toContract})
        }
      }
    }
  }
  catch (error) {
    console.error('Error in block processing:')
    console.error(error)

    yield put({type: 'BLOCK_FAILED', error})

    return
  }
}

function* blocksSaga() {
  // Block Subscriptions
  yield takeLatest('BLOCKS_LISTENING', callCreateBlockChannel)
  yield takeEvery('BLOCK_RECEIVED', processBlockHeader)

  // Block Polling
  yield takeLatest('BLOCKS_POLLING', callCreateBlockPollChannel)
  yield takeEvery('BLOCK_FOUND', processBlock)
}

export default blocksSaga
