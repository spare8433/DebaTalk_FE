import { getPostAPI } from '@api/post'
import { FitImgBox, ImgBox } from '@styles/commonStyle'
import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import dompurify from 'dompurify'
import { useNavigate } from 'react-router-dom'

const CotentBox = styled.div`
  border-radius: 8px;
  background-color: white;
  border: ${({theme})=> theme.colors.gray_1};
  padding:10px 30px 20px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
` 

const PostBox = styled.div`
  display: flex;
  padding:  16px 0;
  border-bottom: ${({theme})=> theme.colors.gray_3} 1px solid ;
` 

const TextBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 4px 0 4px 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
` 

const TitleLine = styled.div`
  display: flex;
  align-items: center;
  
  span{
    text-align: center;
    width: 60px;
    background-color: white;
    color:${({theme})=> theme.colors.main};
    border-radius:3px;
    border: solid 2px ${({theme})=> theme.colors.main};
    padding: 4px 6px;
    margin-right: 16px;
    font-size: 14px;
    font-weight: 500;
  }
  h3{
    max-width: 800px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 500;
  }
  p{
    margin-left: 10px;
    color: ${({theme})=> theme.colors.main};
  }
`

const DetailInfoLine = styled.div`
  display: flex;
  p{
    margin-right: 15px;
    color: ${({theme})=> theme.colors.gray_3};
    font-weight:400;
  }
`


const CommunityCotentBox = () => {
  const navigate = useNavigate()

  const [postContent,setPostContent] = useState(null)

  useEffect( ()=>{
    const sanitizer = dompurify.sanitize;

    const fetchContent = async () => {

      const querry = {
        limit:12,
        skip:12
      }
      
      //  커뮤니티 검색 내용 반영해서 데이터 가져와야함 
      const { data } = await getPostAPI(querry);
      console.log(data);
      setPostContent(data.map((res,index)=>{
        return <PostBox key={'debatePostItmes'+index} onClick={()=>navigate('./detail-debatepost',{ state: { id:res.id}})}>
          <TextBox>

            <TitleLine>
              <span>과학 / it</span>
              <h3>인터넷은 사회의 발전을 저해하는 도구인가</h3>
              <p>[23]</p>
            </TitleLine>

            <DetailInfoLine>
              <p>닉네임</p>          
              <p>3시간전</p>
              <p>추천수</p>
              <p>조회수</p>
            </DetailInfoLine>         
          </TextBox>

          <FitImgBox shadow='true' width='100' height='60'><img src={res.imgUrl === 'default' ? '/img/default-thumbnail.png' : res.imgUrl} alt=''></img></FitImgBox>
          
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

export default memo(CommunityCotentBox)