import React from 'react'
import styled from 'styled-components'

import { Header } from '@components/Header';

import { MainCarousel } from './mainCarousel'
import { MainDebateContent } from '@components/mainDebateContent'
import { MainSearch } from '@components/mainSearch'
import { RecentReaction } from '@components/recentReaction'

const IndexContainor = styled.div`
  width: 100%;  
`
const ContentContainor = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  background-color: #fff;
  &.topBanner{
    background-color: #fff;
  }
  &.majorContent{
    background-color: ${({theme})=> theme.colors.background};
  }
  &.recentReaction{
    background-color: ${({theme})=> theme.colors.main};
  }  
`

const ContentBox = styled.div`
  width: 1160px;
  margin: 0 auto; 
`

// const MainTitle = styled.h1`
//   font-weight: 500;
//   font-size: 24px;
// `

const MainHome = (props) => {
  return (
    <IndexContainor>
      <Header></Header>
      <ContentContainor className='topBanner'>
        <ContentBox>
          {/* <MainTitle>자칭 전문가들의 거대한 토론장에 오신걸 환영합니다.</MainTitle> */}
          <MainSearch />
          <MainCarousel></MainCarousel>        
        </ContentBox>
      </ContentContainor>

      <ContentContainor className='majorContent'>
        <ContentBox>
          <MainDebateContent></MainDebateContent>
        </ContentBox>
      </ContentContainor>

      <ContentContainor className='recentReaction'>
        <ContentBox>
          <RecentReaction></RecentReaction>
        </ContentBox>
      </ContentContainor>


    </IndexContainor>
  )
}

export default MainHome