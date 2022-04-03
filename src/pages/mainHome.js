import React from 'react'
import styled from 'styled-components'
import { CustomCarousle } from '../components/customCarousle'

import { MainCarousel } from '../components/mainCarousel'
import { MainDebateContent } from '../components/mainDebateContent'
import { MainSearch } from '../components/mainSearch'

const IndexContainor = styled.div`
  width: 100%;  
`
const ContentContainor = styled.div`
  width: 100%;
  margin: 20px auto;
  &.top{
    background-color: #fff;
  }
  &.middle{
    background-color: ${({theme})=> theme.colors.background};
  } 
`

const ContentBox = styled.div`
  width: 1160px;
  margin: 0 auto; 
`

const MainTitle = styled.h1`
  font-weight: 500;
  font-size: 24px;
  
`

const MainHome = (props) => {
  return (
    <IndexContainor>

      <ContentContainor className='top'>
        <ContentBox>
          <MainTitle>자칭 전문가들의 거대한 토론장에 오신걸 환영합니다.</MainTitle>
          <MainSearch />
          <MainCarousel></MainCarousel>        
        </ContentBox>
      </ContentContainor>

      <ContentContainor className='middle'>
        <ContentBox>
          <MainDebateContent></MainDebateContent>
        </ContentBox>
      </ContentContainor>

    </IndexContainor>
  )
}

export default MainHome