import { Header } from '@components/Header'
import { NavLinkList } from '@components/NavLinkList'
import { ImgBox, Line, TitleBox } from '@styles/commonStyle'
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

const HeaderInfoBox=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  font-size: 16px;
  text-align: center;
  margin: 20px 0;
  p{
    font-weight: 400;
    line-height: 1.8;
    padding: 20px 0;
    span{
      margin: 0 5px;
      font-size: 22px;
      color:${({theme})=> theme.colors.main};
      font-weight: 600;
    }
  }
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
const SearchLine = styled.div`
  background-color: white;
  width: 280px;
  box-sizing: border-box;
  border: ${({theme})=> theme.colors.gray_1} 1px solid;
  border-radius:5px;
  display: flex;
  align-items: center;
  height: 32px;
  ${ImgBox} {
    /* margin: 0 8px; */
    margin-left: 10px;
  }
  input{
    color: ${({theme})=> theme.colors.gray_1};
    width: 100%;
    border: 0;
    padding: 0;
    margin: 0 12px;
    outline: none;
    height: 100%;
    background: none;
    font-size: 16px;
    font-weight: 400;
  }
`
const AlignLine = styled.div`
  display: flex;
  align-items: center;
  select{
    padding: 4px 8px;
    color:${({theme})=> theme.colors.gray_1};
    font-weight: 400;
    outline: none;
  } 
`

const DebateTopicBoardPage = () => {


  const categoryList = ['전체','정치','경제','사회','문화','교육','과학 / it','역사','철학','스포츠','환경','기타'];
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
                  {categoryList.map((res) => {return <CategoryItem key={'debateCategoryItems'+res}>{res}</CategoryItem>})}
          </NavLinkList>
        </CategoryBox>
        
        <DetailControllBox>
          <SearchLine>
            <ImgBox><img alt='돋보기' src='./img/search.png'></img></ImgBox>
            <input placeholder='검색'></input>
          </SearchLine>

          <AlignLine>
            <select>
              <option value="최신순">최신순</option>
              <option value="추천순">추천순</option>
              <option value="조회순">조회순</option>
            </select>
          </AlignLine>
        </DetailControllBox>

        <DebateTopicContentBox />
      </DebateTopicBoardContainor>
      
    </IndexContainor>
  
  )
}
export default DebateTopicBoardPage