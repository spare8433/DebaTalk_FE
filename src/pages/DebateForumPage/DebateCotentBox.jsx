import { getPostsAPI } from '@api/post'
import { ImgBox } from '@styles/commonStyle'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import dompurify from 'dompurify'
import { useNavigate } from 'react-router-dom'

const CotentBox = styled.div`
  border-radius: 8px;
  background-color: white;
  border: ${({theme})=> theme.colors.gray_1};
  padding:20px 30px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
` 

const PostBox = styled.div`
  display: flex;
  padding:  16px 0;
  border-bottom: ${({theme})=> theme.colors.gray_3} 1px solid ;
` 

const TextBox = styled.div`
  width: 870px;
  box-sizing: border-box;
  padding: 8px 0 8px 30px;
  display: flex;
  flex-direction: column;
  flex:1;
  h3,span{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;  
  }
  h3{font-size:22px}
  span{font-size:14px}
` 

const TextContentLine = styled.div`
  margin: 10px 0;
  flex: 1;
  p{
    height: 70px;
    line-height: 1.6;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-wrap: break-word;
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`

const DebateCotentBox = () => {
  const navigate = useNavigate()

  const [postContent,setPostContent] = useState(null)

  useEffect( ()=>{
    const sanitizer = dompurify.sanitize;

    const fetchContent = async () => {

      const querry = {
        limit:12,
        skip:12
      }
      
      //  검색 내용 반영해서 데이터 가져와야함 
      const { data } = await getPostsAPI(querry);
      console.log(data);
      setPostContent(data.map((res,index)=>{
        return <PostBox key={'debatePostItmes'+index} onClick={()=>navigate('./detail-debatepost',{ state: { id:res.id}})}>
          <ImgBox shadow='true' width='160'><img src={res.imgUrl === 'default' ? '/img/default-thumbnail.png' : res.imgUrl} alt=''></img></ImgBox>
          <TextBox>
            <h3>{res.title}</h3>
            <TextContentLine dangerouslySetInnerHTML={ {__html: sanitizer(res.content)} }></TextContentLine>
           
            <span>{res.likeList.length + '|' + res.likeList.length}</span>           
          </TextBox>
        </PostBox>
      }))
    }

    fetchContent();

  },[navigate])

  

  return (
    <CotentBox>
      {postContent !== null && postContent}
    </CotentBox>
  )
}

export default DebateCotentBox