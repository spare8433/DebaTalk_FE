import React, {  useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ImgBox } from '../styles/commonStyle'
import  Profile  from '@components/Profile'
import { isLogin } from '@services/isLogin'
import { removeCookie } from '@cookie/'
import { deleteUser } from 'store/actions'
import { useDispatch } from 'react-redux'
import { css } from 'styled-components'

const IndexContainor = styled.div`
  width: 100%;
`

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
      padding :15px 0 ;
      font-size: 22px;
      cursor: pointer;
    }
  }
`

const HeaderBreadcrumb = styled.div`
  width: 1160px;
  margin:0 auto;
  padding: 10px 0;
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
        background-color: #f1f2f6;
      }
      width: 160px;
      padding: 12px 16px;
      font-size: 14px;
      margin: 0;
      box-sizing: border-box;
    }
  }
  img{
    width: 18px;
    position: absolute;
    top:-12px;
    right: 10px;
    text-align: right;
    margin: 0;
    height: auto;
  }
`

const NotiDropDown = styled(DropDown)`
  right: -7px;
  top: 45px;
  ul {
    li{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;  
      width: 300px;
    }
  }
`

const DebateForumDropDown = styled(DropDown)`
    left: -10px;
    top: 50px;
    right: auto;
  ul {
    li{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;  
      width: 200px;
    }
  }
`

const NotiIconImgBox = styled(ImgBox)`
  position: relative;

  span {
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: red;
    color: white;
    ${({isNotification}) => {
      return (isNotification ? 
        css`
          position: absolute;
          right: 0;
          top:0;
          transform:translate(20%,-20%) ;
        `
        : css`
          display: none;
        `
      )
    }};
  }
`



export const Header = () => {

  const [isDropListToggleOn,setIsDropListToggleOn] = useState(false);
  const [isNotiListToggleOn,setIsNotiListToggleOn] = useState(false);
  const [isDebateForumListToggleOn,setIsDebateForumListToggleOn] = useState(false);
  const [breadcrumb,setBreadcrumb] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleDropListClick = () => {
    setIsDropListToggleOn(!isDropListToggleOn);
    setIsNotiListToggleOn(false);
  }

  const handleNotiListClick = () => {
    setIsNotiListToggleOn(!isNotiListToggleOn);
    setIsDropListToggleOn(false);
  }

  const handleDebateForumListMouseOver = () =>{
    setIsDebateForumListToggleOn(true);
    setIsNotiListToggleOn(false);
    setIsDropListToggleOn(false);
  }

  const logout = () => {
    removeCookie('token');
    dispatch(deleteUser());
    setIsDropListToggleOn(!isDropListToggleOn);
    navigate('/');
  }

  useEffect(()=>{
    var result = '';
    if(location.pathname !== '/'){
      location.pathname.slice(1).split('/').map( res => {
        result += res + ' > ';
        return 0;
      })
    }else{
      result=''
    }
    
    
    setBreadcrumb(result)
  },[location])
  // console.log(user);
  return (
    <IndexContainor>
      <HeaderContainor>
        <HeaderBox>
          <div onClick={()=>navigate('/')}><img alt='logo' src='./img/temp_logo.png'></img></div>
          <ul>
            <li>홈</li>
            <li onMouseOver={()=>handleDebateForumListMouseOver()} onMouseLeave={()=>setIsDebateForumListToggleOn(false)} style={{display:'flex',position:'relative'}}>
              토론장 
              <ImgBox width='22'><img src='/img/drop-down_black.png' alt=''></img></ImgBox>
              { !isDebateForumListToggleOn? '':
                <DebateForumDropDown>
                  <ul>
                    <li onClick={()=>navigate('/debate-forum')}>토론 게시판</li>
                    <li onClick={()=>navigate('/debate-topic-board')}>주제 선정 게시판</li>
                  </ul>
                </DebateForumDropDown>
              }
            </li>
            <li onClick={()=>navigate('/community')}>커뮤니티</li>
            <li>랭킹</li>
          </ul>

          <ProfileBox>
            
            {/* 로그인시 표시되는 알림 아이콘 */}
            {!isLogin() ? '' :
              <NotiIconImgBox width='24' onClick={()=>handleNotiListClick()} isNotification={true}>
                <img src='/img/bell_main-color.png' alt='menu'></img>
                <span></span>

                {!isNotiListToggleOn ? '' : 
                <NotiDropDown>
                  <img src='/img/drop-tail.png' alt=''></img>
                  <ul>
                    <li>abcdefg</li>
                  </ul>
                </NotiDropDown>
                } 
              </NotiIconImgBox>
            }

            {/* 알림 드랍 다운 리스트 */}
            
            
            {/* 로그인 or 프로필 사진 + 닉네임 */}
            <Profile onClick={()=>navigate('/profile')} />

            {/* 로그인시 표시되는 상세 메뉴 아이콘 */}
            {!isLogin() ? '' :
              <ImgBox width='18' onClick={()=>handleDropListClick()}>
                <img src='/img/menu-dots_light-gray.png' alt='menu'></img>

                {!isDropListToggleOn ? '' : 
                  <DropDown>
                    <img src='/img/drop-tail.png' alt=''></img>
                    
                    <ul>
                      <li onClick={()=> navigate('/profile')}>마이 페이지</li>
                      <li onClick={()=> logout()}>로그아웃</li>
                    </ul>
                  </DropDown>
                }
              </ImgBox>
            } 
            
          </ProfileBox>

        </HeaderBox>
      </HeaderContainor>

      
        {(!!breadcrumb && breadcrumb !== '>') && <HeaderBreadcrumb>{breadcrumb}</HeaderBreadcrumb>}
      
      
    </IndexContainor>
  )
}
