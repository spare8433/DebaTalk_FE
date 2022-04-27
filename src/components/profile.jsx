import React, { useEffect, useState } from 'react'
import { getUser } from '../api/user'
import { getCookie } from '../cookie'
import { ImgBox } from '../styles/commonStyle'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

const ProfileContainor = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	color : ${({mode,theme})=> mode === 'dark' ? 'white' : theme.colors.gray_1};
`

const ProfileLine = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  h2{
    color: ${({theme})=> theme.colors.gray_1};
    margin-left: 10px;
  }
`

const LoginLineStyle = styled.div`
	cursor: pointer;
`

export const Profile = ({mode}) => {
	const navigation = useNavigate();

    const [userData,setUserData]= useState(null)

    useEffect(()=>{
    const checkProfile = async () =>{
			if(getCookie('token')){
			const {data} = await getUser(getCookie('token'))

			setUserData(
				<ProfileLine>
					<ImgBox width='32'><img alt='userImg' src={data.imgUrl === 'default' ? './img/default_user.png' : data.imgUrl }></img></ImgBox>
					<h2>{data.nickname}</h2>
				</ProfileLine>)
			}
    }
    checkProfile()
    },[])
  return (
    <ProfileContainor mode={mode}>
	{userData !== null ? userData : <LoginLineStyle onClick={()=>{navigation('/login')}}>로그인</LoginLineStyle>}
	</ProfileContainor>
  )
}
