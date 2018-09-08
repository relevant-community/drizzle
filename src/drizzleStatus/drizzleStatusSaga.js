import { call, put, select, takeLatest } from 'redux-saga/effects'
import defaultOptions from '../defaultOptions'
import merge from '../mergeOptions'

// Initialization Functions
import { initializeWeb3, getNetworkId } from '../web3/web3Saga'
import { getAccounts } from '../accounts/accountsSaga'
import { getAccountBalances } from '../accountBalances/accountBalancesSaga'

function* initializeDrizzle(action) {
  try {
    const options = merge(defaultOptions, action.options)
    const web3Options = options.web3
    const drizzle = action.drizzle

    // Initialize web3 and get the current network ID.
    var {web3, fallback} = yield call(initializeWeb3, {options: web3Options})
    drizzle.web3 = web3
    drizzle.fallback = fallback

    yield call(getNetworkId, {web3, options: web3Options})

    // Get initial accounts list and balances.
    yield call(getAccounts, {web3: web3 || fallback})
    yield call(getAccountBalances, {web3: web3 || fallback})

    // Instantiate contracts passed through via options.
    for (var i = 0; i < options.contracts.length; i++)
    {
      var contractConfig = options.contracts[i]
      var events = []
      var contractName = contractConfig.contractName

      if (contractName in options.events) {
        events = options.events[contractName]
      }

      yield put({type: 'ADD_CONTRACT', drizzle, contractConfig, events, web3, fallback})
    }

    const syncAlways = options.syncAlways

    // Accounts Polling
    if (web3 && web3.currentProvider.isMetaMask) {
      if ('accounts' in options.polls) {
        yield put({type: 'ACCOUNTS_POLLING', interval: options.polls.accounts, web3})
      }
    }

    if (web3 && fallback) {
      web3 = !web3.currentProvider.isMetaMask ? web3 : fallback;
    } else web3 = fallback || web3;

    if (web3.currentProvider.isMetaMask || web3.currentProvider.isHttp) {
      // Using MetaMask, attempt block polling.
      const interval = options.polls.blocks
      yield put({type: 'BLOCKS_POLLING', drizzle, interval, web3, syncAlways})
    }
    else {
      // Not using MetaMask, attempt subscription block listening.
      yield put({type: 'BLOCKS_LISTENING', drizzle, web3, syncAlways})
    }

  }
  catch (error) {
    yield put({type: 'DRIZZLE_FAILED', error})

    console.error('Error initializing Drizzle:')
    console.error(error)

    return
  }

  yield put({type: 'DRIZZLE_INITIALIZED'})

  return
}

function* drizzleStatusSaga() {
  yield takeLatest('DRIZZLE_INITIALIZING', initializeDrizzle)
}

export default drizzleStatusSaga;
