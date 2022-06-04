import React, { memo, useEffect } from 'react'
import { CircleImgBox } from '@styles/commonStyle'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { isLogin } from '@services/isLogin'
import { fetchUserProfileRequest } from '@store/user/user.actions'
import { getCookie } from '@cookie/'


const ProfileContainor = styled.div`
	display: flex;
	align-items: center;
	/* justify-content: center; */
	font-size: 18px;
	color : ${({mode,theme})=> mode === 'dark' ? 'white' : theme.colors.gray_1};
`

const ProfileLine = styled.div`
  display: flex;
  align-items: center;
  h2{
    color: ${({theme})=> theme.colors.gray_1};
    margin-left: 10px;
  }
`

const LoginLineStyle = styled.div`
	cursor: pointer;
`

const Profile = ({mode,onClick}) => {
	const navigation = useNavigate();

	const user = useSelector(state=> state.user);
	const dispatch = useDispatch()

	useEffect(() => {
		console.log(1);
		if (user.myData !== null) return; // 포스트가 존재하면 아예 요청을 하지 않음
    dispatch(fetchUserProfileRequest())
		console.log(2);
	}, [])
	

	console.log(isLogin());
	console.log(user);

  return (
    <ProfileContainor mode={mode}>
			{user.myData !== null ? 
				<ProfileLine onClick={onClick}>
					<CircleImgBox width='32'><img alt='userImg' src={!!user && user.myData.imgUrl}></img></CircleImgBox>
					<h2>{!!user && user.myData.nickname}</h2>
				</ProfileLine> 
			: 
				<LoginLineStyle onClick={()=>{navigation('/login')}}>로그인</LoginLineStyle>}

		</ProfileContainor>
  )
}

export default memo(Profile)