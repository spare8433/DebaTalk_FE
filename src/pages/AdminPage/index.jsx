import React, { useEffect } from 'react'
import { Containor, ImgBox } from '../../styles/commonStyle'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getCookie } from '../../cookie';
import { getUser } from '../../api/user';
import { Profile } from '../../components/profile';

const AdminContainor = styled.div`
  height: 100%;
`

// 왼쪽메뉴
const Nav = styled.div`
  width: 350px;
  padding:20px;
  box-sizing: border-box;
  background-color: #353535;
  height: 100%;
`

const LogoBox = styled.div`
  text-align: center;
  padding-bottom: 10px;
  border-bottom: solid 2px ${({theme})=>theme.colors.gray_1};
`

const ProfileBox = styled.div`
  margin: 30px 0;
`
// 메뉴부분을 제외한 콘테츠를 감싸는 부분
const MainBox = styled.div`
  
`

// MainBox 에 헤더부분
const Header = styled.div`
  
`

// MainBox 에 가변되는 내용을 감싸는 박스
const ContentBox = styled.div`
  
`

const AdminPage = () => {

  
  return (
    <Containor minWidth='1440'>
      <AdminContainor>
        {/* 왼쪽 메뉴 */}
        <Nav>
          <LogoBox>
            <ImgBox width=''><img alt='logo' src='./img/temp_logo_white.png'></img></ImgBox>
          </LogoBox>

          <ProfileBox>
            <Profile mode='dark'/>
          </ProfileBox>
          
        </Nav>

        <MainBox>
          <Header>

          </Header>
          <ContentBox>
            {/* <Router>
              <Routes>
              <Route path="" element={} />
              </Routes>
            </Router> */}

          </ContentBox>
        </MainBox>
        

      </AdminContainor>
    </Containor>
  )
}

export default AdminPage