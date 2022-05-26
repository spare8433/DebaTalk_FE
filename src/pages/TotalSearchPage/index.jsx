import React, { useState } from 'react'
import styled from 'styled-components'
import { MainSearch } from '@components/MainSearch'
import { SmallBanner } from '@components/SmallBanner'
import SearchedCommunityPost from './SearchedCommunityPost'
import { Header } from '@components/Header'
import SearchedDebatePost from './SearchedDebatePost'
import  NavLinkList  from '@components/NavLinkList'

const IndexContainor = styled.div`
  width: 100%;
`
const ContentContainor = styled.div`
  width: 1160px;
  margin: 0 auto;
`

const ContentHeader = styled.div`
  background-color: white;
  padding: 15px 50px;
  margin-bottom: 16px;
`
const SearchedTextLine = styled.div`
  margin: 24px 10px 16px;
`
const CategoryItem = styled.a`
    margin-right: 80px;
`

const ContentBox = styled.div`
  background-color: white;
  padding: 15px 20px;
`

const TotalSearchPage = () => {
  const [searchCategory,setSearchCategory] = useState('전체');
  return (
    <IndexContainor>
      <Header />
      <SmallBanner />
      <ContentContainor>

       

        <MainSearch />

        <SearchedTextLine>{`"" 으로 검색한 결과입니다.`}</SearchedTextLine>
        

        <ContentHeader>
          
          <NavLinkList width='100%' onClick={setSearchCategory} value={searchCategory} category='searchCategory'>
            <CategoryItem value='전체'>전체 {27}</CategoryItem>
            <CategoryItem value='토론게시판'>토론게시판 {10}</CategoryItem>
            <CategoryItem value='주제선정 게시판'>주제선정 게시판 {10}</CategoryItem>
            <CategoryItem value='커뮤니티'>커뮤니티 {7}</CategoryItem>
          </NavLinkList> 
            
          
        </ContentHeader>

        
          {searchCategory === '전체' ? 
            <ContentBox>
              <SearchedCommunityPost />
              <SearchedDebatePost />
            </ContentBox>
          :
            <ContentBox>
              
            </ContentBox>
          }
          
        
      </ContentContainor>
    </IndexContainor>
  )
}
export default TotalSearchPage