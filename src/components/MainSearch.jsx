import { ImgBox } from '@styles/commonStyle'
import React from 'react'
import styled from 'styled-components'

const MainSearchBox = styled.div`
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  border: #A38AF8 4px solid;
  border-radius:25px;
  display: flex;
  align-items: center;
  height: 45px;
  ${ImgBox}{
    /* margin: 0 8px; */
    margin-left: 12px;
  }
  input{
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

export const MainSearch = () => {
  return (
    <>
      <MainSearchBox>
        <ImgBox><img alt='돋보기' src='./img/search.png'></img></ImgBox>
         <input placeholder='관심있는 내용을 검색해보세요'></input>
      </MainSearchBox>
    </>
  )
}
