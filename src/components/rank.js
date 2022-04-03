import React from 'react'
import styled from 'styled-components'
import {Title} from '../styles/commonStyle'


const MainDebate = styled.div`
  width:100%;
  display: grid;
  padding :50px 0px;
  grid-template-columns :repeat(3, 1fr);
  justify-items: center;
`

export const rank = () => {

    // 가상 유저 랭킹 데이터     
    const user = [
      {
        name:'user01',
        level:1,
        point:300,        
      },{
        name:'user02',
        level:2,
        point:200,        
      },{
        name:'user03',
        level:3,
        point:100,        
      }   
    ]

    // 가상 유저 추천 게시판 데이터
    const board = [
      {
        title:'title10',
        userName:'user01',
        recNum:100,
        hits:200
      },
      {
        title:'title02',
        userName:'user02',
        recNum:90,
        hits:190
      },
      {
        title:'title03',
        userName:'user03',
        recNum:80,
        hits:180
      },
    ]

  return (
    <div>rank</div>
  )
}
