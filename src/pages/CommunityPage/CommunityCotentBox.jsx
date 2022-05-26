import { getPostAPI } from '@api/post'
import { BasicSearchBox, BasicSelectBox, FitImgBox, ImgBox } from '@styles/commonStyle'
import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import dompurify from 'dompurify'
import { useNavigate } from 'react-router-dom'

const IndexContainor = styled.div`
  width: 100%;
`

const CotentBox = styled.div`
  border-radius: 8px;
  background-color: white;
  border: ${({theme})=> theme.colors.gray_1};
  padding:10px 30px 20px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
` 

const HeaderBox = styled.div`
  width: 100%;
  background-color: white;
  padding:20px 20px 16px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  border-radius: 8px;
  margin-bottom: 10px;
  h2{
    font-size: 22px;
    font-weight:500;
  }

`
  const SelectLine = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 16px;
  `
    const CategoryItmes = styled.ul`
      display:flex;
      font-size: 18px;
      li{
        display: flex;
        align-items: fle;
        margin: 0 16px;

        ${ImgBox} {

        }

        p{
          color : ${({theme})=>theme.colors.gray_1};
          padding: 0 10px;
          &:hover{
            color: ${({theme})=>theme.colors.main};
            font-weight:500;
          }
        }
      }
    `

    const InputItmes = styled.div`
      display: flex;
    `

      const SelectBox = styled(BasicSelectBox)`
        margin-right:10px;
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
    const fetchContent = async () => {

      const querry = {
        limit:12,
        skip:12
      }
      
      //  커뮤니티 검색 내용 반영해서 데이터 가져와야함 
      const { data } = await getPostAPI(querry);
      console.log(data);
      setPostContent(data.map((res,index)=>{
        return <PostBox key={'debatePostItmes'+index} onClick={()=>navigate('./detail-communitypost',{ state: { id:res.id}})}>
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
    <IndexContainor>
      <HeaderBox>
        <h2>{'전체'}</h2>

        <SelectLine>
          <CategoryItmes>
            <li><ImgBox width='24'><img src="/img/clock_main-color.png" alt="" /></ImgBox><p>최신</p></li>
            <li><ImgBox width='24'><img src="/img/thumbs-up_main-color.png" alt="" /></ImgBox><p>추천</p></li>
            <li><ImgBox width='24'><img src="/img/fire_main-color.png" alt="" /></ImgBox><p>인기</p></li>
          </CategoryItmes>

          <InputItmes>

            <SelectBox>
              <select>
                <option value="제목">제목</option>
                <option value="내용">내용</option>
                <option value="제목 + 내용">제목 + 내용</option>
              </select>
            </SelectBox>

            <BasicSearchBox>
              <ImgBox><img alt='돋보기' src='./img/search.png'></img></ImgBox>
              <input placeholder='검색'></input>
            </BasicSearchBox>

          </InputItmes>
        </SelectLine>
        
      </HeaderBox>
    
      <CotentBox>
        {postContent !== null && postContent}
      </CotentBox>
    </IndexContainor>
  )
}

export default memo(CommunityCotentBox)