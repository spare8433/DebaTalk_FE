const initialState = {
}

export const userReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_CURRENT_USER':      
      return action.payload;
    case 'DELETE_CURRENT_USER':
      return initialState;
    default :
      return state  
  }
}