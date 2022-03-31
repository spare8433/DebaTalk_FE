import React from 'react'
import styled from 'styled-components'

const MainSearchBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: #A38AF8 4px solid;
  display: flex;
  align-items: center;
  height: 36px;
  img{
    margin: 0 8px;
  }
  input{
    width: 100%;
    border: 0;
    padding: 0;
    margin: 0 8px;
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
         <img alt='돋보기' src='./img/search.png'></img>
         <input placeholder='관심있는 내용을 검색해보세요'></input>
      </MainSearchBox>
    </>
  )
}
