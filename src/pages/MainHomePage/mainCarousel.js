import {React, useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import { CustomCarousle } from '@components/customCarousle'
import { getPostAPI } from 'api/post'

const Content = styled.div`
  width: ${({width}) => width + 'px'};  
`

const Keyword = styled.h2`
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
  
  // [
  //   {
  //     "category": "자유",
  //     "title": "첫번째 게시글 입니다!",
  //     "content": "첫번째 게시글의 내용입니다!",
  //     "likeList": [
  //       "string"
  //     ],
  //     "unlikeList": [
  //       "string"
  //     ],
  //     "hits": 0,
  //     "imgUrl": "default",
  //     "createDate": "2022년 4월 5일",
  //     "id": "624c480198bd174b28ef930b"
  //   }
  // ]

  const titles = useRef([])
  const page = useRef([])

  useEffect(()=>{
    const querry = {
      limit:12,
      skip:12
    }


    // 12     3
    // 13     3.1
    const kewordCount = 4;
    
    
    
    const setCarousle = async () => {
      const posts = await getPostAPI(querry);
      setContents('')
      titles.current = posts.content.map((res)=> {
        return <Keyword key={res.id}>{res.title}</Keyword> 
      })
      // return <Content key={res.id} width={option.contentWidth}>
        // </Content>
      for (let index = 0; index < querry.limit ; index++) {
        page.current[Math.floor(index / kewordCount)] += titles.current[index]
      }

      page.current.map(res => {
        return <Content width={option.contentWidth}>{res}</Content>
      })
    
    } 
    
    setCarousle()

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

