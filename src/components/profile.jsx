import React, { useEffect, useState } from 'react'
import { CircleImgBox } from '@styles/commonStyle'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isLogin } from '@services/isLogin'

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

export const Profile = ({mode,onClick}) => {
	const navigation = useNavigate();

    const [userData,setUserData]= useState(null)
		const user = useSelector(state=> state.user);

    useEffect(()=>{
    	const checkProfile = async () =>{
			if(isLogin()){
				console.log(user);	
				setUserData(
					<ProfileLine onClick={onClick}>
						<CircleImgBox width='32'><img alt='userImg' src={user.imgUrl === 'default' ? './img/default_user.png' : user.imgUrl }></img></CircleImgBox>
						<h2>{user.nickname}</h2>
					</ProfileLine>)
			}else{
				setUserData(null)
			}
    }
    checkProfile()
	},[onClick, user])

  return (
    <ProfileContainor mode={mode}>
	{userData !== null ? userData : <LoginLineStyle onClick={()=>{navigation('/login')}}>로그인</LoginLineStyle>}
	</ProfileContainor>
  )
}
