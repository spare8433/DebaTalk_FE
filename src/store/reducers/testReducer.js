const initialState = ""

export const testReducer = (state = initialState,action) => {
  switch(action.type) {
    case "ADD_TEST" :
      return action.payload
    case "DELETE_TEST" :
      return action.payload
    default :
      return state
  }
}