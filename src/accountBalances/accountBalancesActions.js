const ACCOUNT_BALANCE_FETCHED = 'ACCOUNT_BALANCE_FETCHED'

export function accountBalanceFetched(results) {
  return {
    type: ACCOUNT_BALANCE_FETCHED,
    payload: results
  }
}