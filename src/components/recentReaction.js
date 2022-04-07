import {React, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import {ImgBox, CarouselButton} from '../styles/commonStyle'
import { CustomCarousle } from './customCarousle'



const Cotainor = styled.div`
  width: 100%;  
  height: 450px;
`
const View = styled.div`
  width: 900px;
  margin: 20px auto;
`

const Content = styled.div`
  background-color: ${({theme})=> theme.colors.background};
  width: ${({width}) => width + 'px'};
  padding: 0 10px;
`
const ReactionBox = styled.div`
  width: 100%;
  height: 240px;
`
const ProfileBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
`

// 데이터 받아오고

export const RecentReaction = () => {
  const [contents, setContents] = useState('')  

  const option ={
    width:1160,
    height: 360,
    devidedScreen:3,
    contentWidth:300
  }  
  
  

  var test = { // 가상 게시물 
    content:[
      {name:0},{name:1},{name:12}
    ]
  }
  useEffect(()=>{
    setContents(test.content.map(res=> {
      return <Content key={res.name} width={option.contentWidth}>
        <ReactionBox>

        </ReactionBox>

        <ProfileBox>

        </ProfileBox>
        
      </Content>
    }))
  },[])
    

  return (
    <Cotainor>
      <View>
        <CarouselButton className='prev'></CarouselButton>        
        <CustomCarousle option={option}>
          {!!contents.length && contents} 
        </CustomCarousle>                        
      </View>
    </Cotainor>
  )
}
