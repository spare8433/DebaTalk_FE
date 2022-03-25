import React from 'react'
import styled, {css} from 'styled-components'

const HeaderContainor = styled.div`
  width: 100%;
  border-bottom: #2d3436 4px solid;
`

const HeaderBox = styled.div`
  width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  ul{
    align-items: flex-end;
    display: flex;  
    justify-content: space-between;
    font-weight: 500;
    padding-bottom: 20px;
    li{
      margin: 0 25px; 
      font-size: 22px;
    }
  }
  p{
    align-items: flex-end;
    display: flex;
    font-size: 18px;
    color: #505050;
    padding-bottom: 20px;
  }
`

export const Header = () => {
  return (
    <HeaderContainor>
      <HeaderBox>
        <div><img alt='자전거로고' src='./img/temp_logo.png'></img></div>
        <ul>
          <li>홈</li>
          <li>토론장</li>
          <li>커뮤니티</li>
          <li>랭킹</li>
        </ul>
        <p>로그인 | 회원가입</p>
      </HeaderBox>
    </HeaderContainor>
  )
}
