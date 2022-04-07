import {React, useState, useRe, useEffect} from 'react'
import styled from 'styled-components'
import { CustomCarousle } from '../components/customCarousle'

const Content = styled.div`
  width: ${({width}) => width + 'px'};  
`
const BannerImg = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: auto;
`
export const MainCarousel = () => {
  const [contents, setContents] = useState('')
  const [banner, setBanner] = useState('')

  const option ={
    width:1160,
    height: 360,
    devidedScreen:1,
    contentWidth:1160
  }  

  var test = { // 가상 게시물 
    content:[
      {name:0},{name:1},{name:12}
    ]
  }
  

  useEffect(()=>{
    //  api 호출 test라고 가정
    setContents(test.content.map(res=> {
      return <Content key={res.name} width={option.contentWidth}>
        {res.name}
        <h1>test</h1>
        <p>adsfasd</p>
      </Content>
    }))

    setBanner(<BannerImg><img alt='debatePeople' src='./img/mainBannerImg.png'></img></BannerImg>)
  },[])
  

  return (
    <div>
      <CustomCarousle option={option} banner={banner}>
        {contents}
      </CustomCarousle>
    </div>
  )
}

