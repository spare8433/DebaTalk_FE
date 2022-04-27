import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getUser } from '../api/user'
import { getCookie } from '../cookie'
import { ImgBox } from '../styles/commonStyle'
import { Profile } from './profile'

const HeaderContainor = styled.div`
  width: 100%;
  border-bottom: #b2bec3 2px solid;
`

const HeaderBox = styled.div`
  width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul{
    display: flex;
    align-items : center;
    justify-content: space-between;
    font-weight: 500;
    height: min-content;
    li{
      margin: 0 25px; 
      font-size: 22px;
    }
  }
`

// const ProfileBox = styled.div`
//   display: flex;
//   align-items: center;
//   padding-bottom: 10px;
//   h2{
//     color: ${({theme})=> theme.colors.gray_1};
//     margin-left: 10px;

//   }
// `

export const Header = () => {

  // const [userData,setUserData]= useState(null)

  // useEffect(()=>{
  //   const test = async () => {
  //     if(getCookie('token')){
  //       const {data} = await getUser(getCookie('token'))

  //       setUserData(<ProfileBox>
  //         <ImgBox width='32'><img alt='userImg' src={data.imgUrl === 'default' ? './img/default_user.png' : data.imgUrl }></img></ImgBox>
  //         <h2>{data.nickname}</h2>
  //       </ProfileBox>)
  //     }
  //   }
  //   test()
  // },[])

  return (
    <HeaderContainor>
      <HeaderBox>
        <div><img alt='logo' src='./img/temp_logo.png'></img></div>
        <ul>
          <li>홈</li>
          <li>토론장</li>
          <li>커뮤니티</li>
          <li>랭킹</li>
        </ul>

        <Profile />
        {/* { userData !== null ? userData
        : <Link to="/login">로그인</Link>} */}
        
      </HeaderBox>
    </HeaderContainor>
  )
}
