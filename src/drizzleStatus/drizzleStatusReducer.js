const initialState = {
  initialized: false
}

const drizzleStatusReducer = (state = initialState, action) => {
  /*
   * Drizzle Status
   */

  if (action.type === 'DRIZZLE_FAILED')
  {
    return {
      ...state,
      error: action.error.message,
    }
  }

  if (action.type === 'DRIZZLE_INITIALIZED')
  {
    return {
      ...state,
      initialized: true,
      error: null,
    }
  }
  return state
}

export default drizzleStatusReducer
