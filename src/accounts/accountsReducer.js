const initialState = []

const accountsReducer = (state = initialState, action) => {
  if (action.type === 'ACCOUNTS_FETCHING')
  {
    return state
  }

  if (action.type === 'ACCOUNTS_FETCHED')
  {
    let needsUpdate;
    let acc = action.accounts || [];
    let intersect = acc.filter(x => state.includes(x));
    if (intersect.length === acc.length) {
      return state;
    }
    return [
      ...state,
      ...action.accounts
    ]
  }

  return state

}

export default accountsReducer
