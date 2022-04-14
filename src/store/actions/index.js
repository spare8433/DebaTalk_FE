export const addTest = (items) => {
  return {
    type: "ADD_TEST",
    payload: items
  }      
}

export const delTest = (items) => {
  return {
    type: "DELETE_TEST",
    payload: items
  }      
}

export const setUser = (items) => {
  return {
    type: "SET_CURRENT_USER",
    payload: items
  }
}