const initialState = {
	loadMyInfoLoading: false,
	loadMyInfoDone: false,
	loadMyInfoError: null,
	signUpLoading: false,
	signUpDone: false,
	signUpError: null,
	logInLoading: false,
	logInDone: false,
	logInError: null,
	logOutLoading: false,
	logOutDone: false,
	logOutError: null,
	myData: null
}

//* 유저정보 조회 타입
export const LOAD_MY_INFO = 'LOAD_MY_INFO'

//* 유저정보 조회 액션
export const loadMyInfoAction = () => ({ type: LOAD_MY_INFO })

export const userReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_CURRENT_USER':
      // immer
      // 리듀서에서 데이터를 넣는 순간에 default 값인지 확인해서 맞다면 기본이미지, 아니면 서버에서 받은 프로필이미지
      // draft.state.meData.imageUrl = action.data.imageUrl === 'default' ? '기본이미지' : action.data.imageUrl
      return {
        ...state,
        myData: action.payload
      };
    case 'DELETE_CURRENT_USER':
      return {
        ...state
      };
    default :
      return state  
  }
}