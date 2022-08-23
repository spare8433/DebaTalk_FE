import React, { useState } from 'react'
import styled from 'styled-components'
import { BasicSearchBox, BasicSelectBox, HeaderInfoBox, ImgBox, Line } from '@styles/commonStyle'
import DebateCotentBox from './DebateCotentBox'
import { Header } from '@components/Header'
import  NavLinkList  from '@components/NavLinkList'
import { Routes, Route } from  'react-router-dom'; 
import DetailDebatePage from 'pages/DetailDebatePage'
import { DebateCategoryMenus, DebateModeMenus } from '@data/staticData'

const IndexContanior = styled.div`
  width: 100%;
`

const DebateForumContainor = styled.div`
  width: 1160px;
  margin: 0 auto;
`

const PrColorLine = styled(Line)`
  background-color: ${({theme})=> theme.colors.main};
`

const CategoryBox = styled.div`
  h2 {
    margin: 24px 0 24px;
    font-weight: 500;
  }
`

const ModeItem = styled.a`
  font-weight:500;
  font-size: 18px;
  margin-right: 40px;
  color:${({theme})=> theme.colors.gray_2};
`

const CategoryItem = styled.a`
  font-size: 16px;
  margin-right: 30px;
  font-weight:500;
  color:${({theme})=> theme.colors.gray_2};
`

const DetailControllBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 16px;
`


const DebateForumPage = () => {
  const [debateMode,setDebateMode] = useState('전체');
  const [debateCategory,setDebateCategory] = useState('전체');

  return (
    <IndexContanior>

      <Header></Header>
      <Routes>
        <Route path="/" element={
          <DebateForumContainor width='1160'>
      
            {/* <TitleBox>토론 게시판</TitleBox> */}
    
            <HeaderInfoBox>
              <p>
              다양한  토론주제들과 여러의견이 존재하는 <span>토론 게시판</span>입니다 자유로운 의견교환 및 토론을 즐기세요<br></br>
              과도한 분쟁을 유발하거나 거래글, 광고글, 음란물, 비방, 욕설,  정치관련 등등 부적절한 언행 시 제재 대상이 될 수 있습니다.<br></br>
              {/* 자세한 내용은 공지사항을 참고하여 규칙과 에티켓을 숙지하고 준수해주시면 감사하겠습니다. ^_^ */}
              </p>
              <PrColorLine height='2' width='250'></PrColorLine>
            </HeaderInfoBox>
            

            <CategoryBox>
              <h2 style={{"fontSize":"26px"}}>토론 분류</h2>
              
              <NavLinkList 
                onClick={setDebateMode} 
                value={debateMode} 
                category='debateMethod'
                items={
                  DebateModeMenus.map((res,index) => {
                    return <ModeItem key={'debateModeItems_'+(index+1)} value={res}>{res}</ModeItem>
                  })
                }
              >
                <ModeItem value='전체'>전체</ModeItem>
              </NavLinkList>
    
    
              <h2 style={{"fontSize":"22px"}}>카테고리</h2>
                
              <NavLinkList  
                onClick={setDebateCategory} 
                value={debateCategory} 
                category='debateCategory' 
                items={
                  DebateCategoryMenus.map((res,index) => {
                    return <CategoryItem key={'debateCategoryItems'+(index + 1)} value={res}>{res}</CategoryItem>
                  })
                }
              >
                <CategoryItem value='전체'>전체</CategoryItem>
              </NavLinkList>
            </CategoryBox>
    
            <DetailControllBox>
              <BasicSearchBox>
                <ImgBox><img alt='돋보기' src='./img/search.png'></img></ImgBox>
                <input placeholder='검색'></input>
              </BasicSearchBox>
    
              <BasicSelectBox>
                <select>
                  <option value="최신순">최신순</option>
                  <option value="추천순">추천순</option>
                  <option value="조회순">조회순</option>
                </select>
              </BasicSelectBox>
            </DetailControllBox>
            
    
            <DebateCotentBox />
    
            {/* {debateMode}
            {debateCategory} */}
          </DebateForumContainor>
        }></Route>

        <Route path="detail-debatepost" element={<DetailDebatePage />} /> 
      </Routes>  
    </IndexContanior>
      
  )
}

export default DebateForumPage