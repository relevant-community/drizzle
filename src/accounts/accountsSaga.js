import { END, eventChannel } from 'redux-saga'
import { call, put, take, takeLatest } from 'redux-saga/effects'
import { getAccountBalances } from '../accountBalances/accountBalancesSaga'

/*
 * Fetch Accounts List
 */

export function* getAccounts(action) {
  const web3 = action.web3

  try {
    if (!web3) throw 'missing web3';
    const accounts = yield call(web3.eth.getAccounts)

    if (!accounts) {
      throw 'No accounts found!'
    }

    yield put({type: 'ACCOUNTS_FETCHED', accounts})
  }
  catch (error) {
    yield put({type: 'ACCOUNTS_FAILED', error})
    console.error('Error fetching accounts:')
    console.error(error)
  }
}

/*
 * Poll for Account Changes
 */

function* createAccountsPollChannel({interval, web3}) {
  return eventChannel(emit => {
    const persistedWeb3 = web3

    const accountsPoller = setInterval(() => {
      emit({type: 'SYNCING_ACCOUNTS', persistedWeb3})
    }, interval) // options.polls.accounts
    
    const unsubscribe = () => {
      clearInterval(accountsPoller)
    }

    return unsubscribe
  })
}
  
function* callCreateAccountsPollChannel({interval, web3}) {
  const accountsChannel = yield call(createAccountsPollChannel, {interval, web3})
  
  try {
    while (true) {
      var event = yield take(accountsChannel)

      if (event.type === 'SYNCING_ACCOUNTS') {      
        yield call(getAccounts, {web3: event.persistedWeb3})
        yield call(getAccountBalances, {web3: event.persistedWeb3})  
      }

      yield put(event)
    }
  } finally {
    accountsChannel.close()
  }
}

function* callGetBalances(action) {
  try {
  if (!action.accounts || !action.accounts.length) {
    console.error('No accounts')
    return;
  }
  const balances = yield all(action.accounts.map(account => {
    return callGetAccountBalance({ ...action, account })
  }))
  } catch (err) {
    console.log(err);
  }
}

function* callGetAccountBalance(action) {
  try {
    const balance = yield call(getBalance, action.account, action.web3)
    yield put({type: 'ACCOUNT_BALANCE_FETCHED', balance})
  } catch (err) {
    console.log(err);
  }
}

function* accountsSaga() {
  yield takeLatest('ACCOUNTS_FETCHING', getAccounts)
  yield takeLatest('ACCOUNTS_POLLING', callCreateAccountsPollChannel)
}

export default accountsSaga;
