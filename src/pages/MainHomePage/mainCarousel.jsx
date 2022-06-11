import {React, useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import { CustomCarousle } from '@components/customCarousle'
import { getPostsAPI } from 'api/post'

const Content = styled.div`
  width: ${({width}) => width + 'px'};  
`

const Keyword = styled.h2`
  &:hover{
    font-weight: 600;
    color: #000;
  }
  width: 70%;
  color: ${({theme})=> theme.colors.gray_1};
  margin: 20px 0;
  font-size: 36px;
 
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

    const exposedKewordCount = 4;
    
    
    const setCarousle = async () => {
      const {data} = await getPostsAPI(querry);
      console.log(data);

      data.map((res)=>{
        return { id:res.id, title:res.title, category:res.title}
      })

      titles.current = data.map((res,index)=> {
        return <Keyword key={res.id + index}>{res.title}</Keyword> 
      })

      for (let pageNum = 0; pageNum < data.length / exposedKewordCount ; pageNum++) {
        var result = [];
        for (let titleNum = pageNum * 4; titleNum < (pageNum + 1) * 4 && titleNum < data.length; titleNum++) {
          result.push(data[titleNum])
        }
        page.current[pageNum] = result;
      }

      setContents(page.current.map(res=>{
        return <Content>{res.map((res,index) => {
          return <Keyword key={res.id + index}>{res.title}</Keyword> 
        })}</Content> 
      }))

      console.log(page.current);
    } 
  
    setBanner(<BannerImg><img alt='debatePeople' src='./img/mainBannerImg.png'></img></BannerImg>)
    setCarousle()
  },[])
  

  return (
    <div>
      <CustomCarousle option={option} banner={banner}>
        {contents}
      </CustomCarousle>
    </div>
  )
}

