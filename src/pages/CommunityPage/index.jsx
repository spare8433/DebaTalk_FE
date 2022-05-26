import { Header } from '@components/Header'
import { CommunityCategoryMenus } from '@data/staticData'
import { HeaderInfoBox, Line } from '@styles/commonStyle'
import React from 'react'
import styled from 'styled-components'
import { Routes, Route } from  'react-router-dom'; 
import CommunityCotentBox from './CommunityCotentBox'
import { DetailCommunityPost } from './DetailCommunityPost'

const IndexContainor = styled.div`
  width: 100%;
`
const CommunityPageContainor = styled.div`
  width:1160px;
  margin: 0 auto;
`
const ContentsContainor = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const NavBox = styled.div`
  border-radius: 8px;
  background-color:white;
  width: 280px;
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  h3{
    font-size: 18px;
    font-weight: 500;
    border-bottom: 2px solid ${({theme})=> theme.colors.gray_3};
    padding: 0 10px 8px;
    padding-bottom: 8px;
  }
  li{
    box-sizing: border-box;
    font-size:16px;
    font-weight: 400;
    border-radius: 5px;
    width: 90%;
    padding: 8px 16px;
    margin: 5px auto 14px;
    cursor: pointer;
    &:hover{
      background-color: ${({theme})=> theme.colors.background};
      color: ${({theme})=> theme.colors.main};
      font-weight: 600;
    }
  }
`

const PrColorLine = styled(Line)`
  background-color: ${({theme})=> theme.colors.main};
`


const MainBox = styled.div`
  width: 860px;
`

const ContentsBox = styled.div`
  width: 100%;
`

const CommunityPage = () => {
  return (
    <IndexContainor>
      <Header />  
      <CommunityPageContainor>
        <HeaderInfoBox>
          <p>
            토론보다는 가벼운 이야기들을 나눌 수 있는 <span>커뮤니티</span> 입니다 서로  에티켓을 지키며 이용해주세요<br></br>
            거래글, 광고글, 음란물, 비방, 욕설,  정치관련, 분쟁을 유발하는 게시물 등등 기타 부적절한 행동은 제제 대상이며 신고 부탁드립니다. <br></br></p>
            <PrColorLine height='2' width='250'></PrColorLine>
        </HeaderInfoBox>

        <ContentsContainor>
          <NavBox>
               
            <h3>카테고리</h3>
              <ul>{CommunityCategoryMenus.map(res => <li>{res}</li>)}</ul>

            <h3>정보</h3>
            <ul>
              <li>공지사항</li>
            </ul>

            
            {/* CommunityCategoryMenus */}
          </NavBox>

          <MainBox>
            <Routes>    
              {/* 커뮤니티 게시물 리스트 부분 */}
              <Route path="/" element={<CommunityCotentBox />}></Route>

              {/* 커뮤니티 게시물 디테일 부분 */}
              <Route path="detail-communitypost" element={<DetailCommunityPost />} />
            </Routes>
          </MainBox>
          
        </ContentsContainor>

      </CommunityPageContainor>
    </IndexContainor>
  )
}

export default CommunityPage