import React, { useEffect, useState } from 'react'
import { Containor, ImgBox } from '../../styles/commonStyle'
import styled from 'styled-components'
import { Routes, Route, useNavigate,useLocation } from 'react-router-dom';
import { Profile } from '../../components/profile';
import { SlideMenu } from '../../components/slideMenu';
import { WritePost } from './managePost/writePost';

const AdminContainor = styled.div`
  height: 100%;
  display: flex;
`

// 왼쪽메뉴
const Nav = styled.div`
  min-width: 280px;
  padding:30px 0;
  /* box-sizing: border-box; */
  background-color: #353535;
  height: 100%;
  float:left;
`

const MenuBox = styled.div`
  margin: 20px 0;
  font-size: 18px;
  color: white;
  ul{
    text-align: center; 
  }
  li{
    cursor: pointer;
  }
  span{
    margin-left:20px ;
  }
`

const SlideMenuTitle = styled.div`
  text-align: center;
  display: flex; 
  align-items: center;
  box-sizing: border-box;
`

const SlideMenuList = styled.div`
  background-color: ${({theme})=>theme.colors.gray_2};
  p{
    font-size: 16px;
    padding: 8px 0;
  }
`

const LogoBox = styled.div`
  text-align: center;
  padding-bottom: 10px;
  border-bottom: solid 2px ${({theme})=>theme.colors.gray_1};
`

const ProfileBox = styled.div`
  padding: 20px 0;
  border-bottom: solid 2px ${({theme})=>theme.colors.gray_1};
`
// 메뉴부분을 제외한 콘테츠를 감싸는 부분
const MainBox = styled.div`
  width: 100%;
  
`

// MainBox 에 헤더부분
const Header = styled.div`
  display: flex;
  //justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color:white;
`

// MainBox 에 가변되는 내용을 감싸는 박스
const ContentBox = styled.div`
  max-width: 1120px;
  padding: 10px;
  box-sizing: border-box;
  background-color:white;
  margin: 10px;
`

const AdminPage = () => {
  const location = useLocation()
  const navigation = useNavigate()

  const [breadcrumb,setBreadcrumb] = useState('')

  const handleListClick = (address)=>{
    navigation('./'+ address,)
  }

  
  useEffect(()=>{
    var result = '';
    location.pathname.slice(1).split('/').map( res => {
      result += res + ' > ';
      return 0;
    })
    setBreadcrumb(result)
  },[location])

  return (
    <Containor minWidth='1440'>
      <AdminContainor>
        {/* 왼쪽 메뉴 */}
        <Nav>
          <LogoBox>
            <ImgBox width='200'><img alt='logo' src='/img/temp_logo_white.png'></img></ImgBox>
          </LogoBox>

          <ProfileBox>
            <Profile mode='dark'/>
          </ProfileBox>

          <MenuBox>
            <ul>
              <li>
                <SlideMenu 
                  title={
                    <SlideMenuTitle>
                      <ImgBox width='24'><img alt='user' src='/img/edit_white.png'></img></ImgBox>
                      <span>사용자 관리</span>
                    </SlideMenuTitle>
                  }>
                  <SlideMenuList>
                    <p>테스트</p>
                  </SlideMenuList>

                </SlideMenu>
              </li>


              <li>
                <SlideMenu 
                    title={
                      <SlideMenuTitle>
                        <ImgBox width='24'><img alt='post' src='/img/form_white.png'></img>
                        </ImgBox><span>게시물 관리</span>
                      </SlideMenuTitle>
                    }>
                    <SlideMenuList>
                      <p onClick={()=> handleListClick('writePost')}>글 쓰기</p>
                    </SlideMenuList>

                </SlideMenu>  
              </li>

              <li>
              <SlideMenu 
                  title={
                    <SlideMenuTitle>
                      <ImgBox width='24'><img alt='report' src='/img/megaphone_white.png'></img></ImgBox>
                      <span>신고 관리</span>
                    </SlideMenuTitle>
                  }>
                  <SlideMenuList>
                    <p>신고 쓰기</p>
                  </SlideMenuList>

                </SlideMenu>
              </li>
              
              {/* <li><ImgBox width='24'><img alt='post' src='./img/form_white.png'></img></ImgBox><span>게시물 관리</span></li>
              <li><ImgBox width='24'><img alt='report' src='./img/ megaphone_white.png'></img></ImgBox><span>신고 관리</span></li> */}
           
            </ul>
          </MenuBox>
          
        </Nav>

        <MainBox>
          <Header>
            {!!breadcrumb && breadcrumb}
          </Header>
          <ContentBox>
            
              <Routes>
                <Route path="writePost" element={<WritePost />} />
              </Routes>
            

          </ContentBox>
        </MainBox>
        

      </AdminContainor>
    </Containor>
  )
}

export default AdminPage