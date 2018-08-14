const initialState = {}

const accountBalancesReducer = (state = initialState, action) => {
  if (action.type === 'ACCOUNT_BALANCE_FETCHED')
  {
    let newState = {
      ...state,
      [action.account]: action.accountBalance
    }
    // prevents from updating state and re-rendering components unnecessarily when balances are the same
    if (JSON.stringify(newState) === JSON.stringify(state)) {
      return state;
    }
    return newState
  }

  return state
}

export default accountBalancesReducer
