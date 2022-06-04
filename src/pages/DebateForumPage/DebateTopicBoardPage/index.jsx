import { Header } from '@components/Header'
import  NavLinkList  from '@components/NavLinkList'
import { DebateCategoryMenus } from '@data/staticData'
import { BasicSearchBox, BasicSelectBox, HeaderInfoBox, ImgBox, Line, TitleBox } from '@styles/commonStyle'
import React from 'react'
import styled from 'styled-components'
import { DebateTopicContentBox } from './DebateTopicContentBox'

const IndexContainor = styled.div`
  width: 100%;
`

const DebateTopicBoardContainor = styled.div`
  width: 1160px;
  margin: 0 auto;
`

const PrColorLine = styled(Line)`
  background-color: ${({theme})=> theme.colors.main};
`

const CategoryItem = styled.a`
  font-size: 18px;
  margin-right: 30px;
  font-weight:500;
  color:${({theme})=> theme.colors.gray_2};
`

const CategoryBox = styled.div`
  h2 {
    margin: 32px 0 24px;
    font-weight: 500;
  }
`

const DetailControllBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 16px;
`


const DebateTopicBoardPage = () => {

  return (
    <IndexContainor>
      
      <Header />

      <DebateTopicBoardContainor>

        {/* <TitleBox>주제 선정 게시판</TitleBox> */}
    
        <HeaderInfoBox>
          <p>
            토론 할만한 주제들을 자유롭게 작성하고 살펴보는 <span>주제 선정 게시판</span> 입니다 또한 좋은 주제들은 선정하여 업로드 됩니다.<br></br>
            공지사항을 참고하여 이용시 규칙과 에티켓을 숙지하고 준수해주시면 감사하겠습니다. 
          </p>
          <PrColorLine height='2' width='250'></PrColorLine>
        </HeaderInfoBox>
        

        <CategoryBox>
          <h2 style={{"fontSize":"26px"}}>카테고리</h2>

          <NavLinkList width='100%' category='debateCategory' key='b'>
                  {DebateCategoryMenus.map((res) => {return <CategoryItem key={'debateCategoryItems'+res} value={res}>{res}</CategoryItem>})}
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

        <DebateTopicContentBox />
      </DebateTopicBoardContainor>
      
    </IndexContainor>
  
  )
}
export default DebateTopicBoardPage