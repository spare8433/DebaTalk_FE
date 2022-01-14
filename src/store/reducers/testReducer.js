const initialState = ""

export const testReducer = (initialState,action) => {
  switch(action.type) {
    case "ADD_TEST" :
      return action.type
    case "DELETE_TEST" :
      return action.type
    default :
      return state
  }
}