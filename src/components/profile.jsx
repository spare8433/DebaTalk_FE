import React, { memo, useEffect, useState } from 'react'
import { CircleImgBox } from '@styles/commonStyle'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { isLogin } from '@services/isLogin'
import { getUser } from '@api/user'
import { getCookie } from '@cookie/'
import { setUser } from '@store/actions'

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
	const dispatch = useDispatch();

	const [userData,setUserData]= useState(null)
	const user = useSelector(state=> state.user);

	useEffect(()=>{
		console.log('1');
		const fetchProfile = async () =>{
			console.log('2');
			const user = await getUser(getCookie('token'));
      dispatch(setUser(user.data));
		}
		fetchProfile()
	},[])

  return (
    <ProfileContainor mode={mode}>
			{isLogin() ? 
				<ProfileLine onClick={onClick}>
					<CircleImgBox width='32'><img alt='userImg' src={user.imgUrl === 'default' ? './img/default_user.png' : user.imgUrl }></img></CircleImgBox>
					<h2>{user.nickname}</h2>
				</ProfileLine> 
			: 
				<LoginLineStyle onClick={()=>{navigation('/login')}}>로그인</LoginLineStyle>}

		</ProfileContainor>
  )
}

export default memo(Profile)