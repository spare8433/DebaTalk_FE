import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '@services/logout'
import styled from 'styled-components'
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

const ProfileBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${ImgBox}{ 
    margin:0 10px 0 20px;
  }
`

const DropDown = styled.div`
  position: absolute;
  /* display: flex; */
  right: 0px;
  top:45px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  ul {
    top:10px;
    background-color: white;
    display: block;
    
    li {
      &:hover{
        /* background-color: ${({theme})=>theme.colors.gray_3}; */
        background-color: #f1f2f6;
      }
      width: 160px;
      padding: 12px 16px;
      font-size: 12px;
      margin: 0;
      box-sizing: border-box;
    }
  }
  img{
    position: absolute;
    top:-12px;
    right: 10px;
    text-align: right;
    margin: 0;
    height: auto;
  }
`

export const Header = () => {
  const [isDropListToggleOn,setIsDropListToggleOn] = useState(false)

  const navigate = useNavigate()

  const handleDropListClick = () => {
    setIsDropListToggleOn(!isDropListToggleOn);
  }

  return (
    <HeaderContainor>
      <HeaderBox>
        <div onClick={()=>navigate('/')}><img alt='logo' src='./img/temp_logo.png'></img></div>
        <ul>
          <li>홈</li>
          <li>토론장</li>
          <li>커뮤니티</li>
          <li>랭킹</li>
        </ul>

        <ProfileBox>
          <Profile onClick={()=>navigate('profile')} />
          <ImgBox width='18' onClick={()=>handleDropListClick()}>
            <img src='/img/menu-dots_light-gray.png' alt='menu'></img>
          </ImgBox>
          
            {!isDropListToggleOn ? '' : 
            <DropDown><img src='/img/drop-tail.png' alt=''></img>
              <ul>
                <li onClick={()=>navigate('/profile')}>마이 페이지</li>
                <li onClick={()=> logout()}>로그아웃</li>
              </ul>
            </DropDown>}
          
        </ProfileBox>

      </HeaderBox>
    </HeaderContainor>
  )
}
