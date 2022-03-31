import React from 'react'
import styled from 'styled-components'

import { MainCarousel } from '../components/mainCarousel'
import { MainSearch } from '../components/mainSearch'

const IndexContainor = styled.div`
  width: 100%;  
`
const TopContentContainor = styled.div`
  width: 1160px;
  margin: 20px auto; 
`
const MainTitle = styled.h1`
  font-weight: 500;
  font-size: 24px;
  
`

const MainHome = () => {
  return (
    <IndexContainor>
      <TopContentContainor>
        <MainTitle>자칭 전문가들의 거대한 토론장에 오신걸 환영합니다.</MainTitle>
        <MainSearch />
        <MainCarousel />
      </TopContentContainor>
    </IndexContainor>
  )
}

export default MainHome