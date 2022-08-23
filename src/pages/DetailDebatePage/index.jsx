import React, { useEffect, useState } from 'react'
import dompurify from 'dompurify'
import { Containor, ImgBox } from '@styles/commonStyle'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { getOnePostAPI } from '@api/post'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getDebatePostRequest } from '@store/debatePost/debatePost.actions'
import WriteComment from '@components/WriteComment'

const IndexContainor = styled(Containor)`
  
`

const DetailDevateContainor = styled.div`
  width: 1160px;
  margin: 50px auto;
`

const PostHeaderBox = styled.div`
  h1{
    margin: 0 auto;
    width: fit-content;
    text-align: center;
    font-size: 36px;
    padding-bottom: 8px;
    border-bottom: 2px solid ${({theme})=> theme.colors.main};
  }
`

  const HeaderCategoryLine = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 10px 0;
  `
  const HeaderButtonBox =styled.div`
    
  `

  const HeaderInfoBox=styled.div`
    background-color: white;
    font-size: 18px;
    text-align: center;
    padding: 30px 0;
    p{
      margin-bottom: 16px;
      font-weight: 300;
    }
    span{
      font-weight: 500;
      cursor: pointer;
    }
  `
  const PostContentBox = styled.div`
  
  `

const PostCurrentSituationBox = styled.div`
  
`

const RelatedPostsBox = styled.div`
`

const DebateRulesBox = styled.div`
  background-color: white;
  padding: 20px 80px;
  margin-bottom: 20px;
  h3{
    font-size: 22px;
    font-weight:500;
  }
  p{
    padding: 20px;
    line-height: 1.6;
    font-size: 16px;
  }
`

const DetailDebatePage = () => {
  const dispatch = useDispatch();
  const sanitizer = dompurify.sanitize;
  const location = useLocation();
  console.log(location);
  const { id } = location.state;

  const debatePost = useSelector(state=> state.debatePost)

  useEffect(()=>{
    if(debatePost.debatePostData !== null) return
    dispatch( getDebatePostRequest(id) )
  },[id])
  


  return (
    <IndexContainor>
      <DetailDevateContainor>

        {/* 타이틀 부분 박스 */}
        <PostHeaderBox>

          <h1>{debatePost.debatePostData !== null && debatePost.debatePostData.title}</h1>

          <HeaderCategoryLine>

            <span>[{debatePost.debatePostData !== null && debatePost.debatePostData.createDate + ' - ' + debatePost.debatePostData.category + ' - ' + 3}]</span>

            <HeaderButtonBox>
              <ImgBox></ImgBox>
            </HeaderButtonBox>
          </HeaderCategoryLine>

          <HeaderInfoBox>
            <p>※ 서로의 관점을 존중하고 서로 의견을 나누며 긍정적이고 발전적인 토론이 되길바랍니다.  ※</p>
            <span>페이지 하단에서 의견을 남기실 수 있습니다. ↓↓</span>
          </HeaderInfoBox>
        </PostHeaderBox>

        {/* 토론 현황 박스 */}
        <PostCurrentSituationBox>

        </PostCurrentSituationBox>

        {/* html 형식 내용*/}
        <PostContentBox 
          dangerouslySetInnerHTML={ {__html: sanitizer(debatePost.debatePostData !== null && debatePost.debatePostData.content)} }
        ></PostContentBox>

        {/* 관련 포스트 추천 박스*/}
        <RelatedPostsBox></RelatedPostsBox>

        {/* 의견 및 댓글 (따로 컴포넌트)*/}
        <></>

        {/* 토론규칙 */}
        <DebateRulesBox>
          <h3>토론규칙</h3>
          <p>
            한걸음 더 나아가기 위한 토론장임을 기억하고 서로 다른 생각, 관점, 의견의 차이를 인정 합시다.<br></br>
            정확하지 않은 정보는 혼란을 야기할 수 있으니 인용하려는 정보의 출처를 남겨주십시오<br></br>
            비방 및 욕설은 삭제 조치되고 차후 사이트 이용에 제제가 있을 수 있습니다.
          </p>
        </DebateRulesBox>

        <WriteComment postId={ debatePost.debatePostData !== null && debatePost.debatePostData.id} option={ {
          voteOn :debatePost.debatePostData !== null && debatePost.debatePostData.category === '찬반토론' ? true : false 
        } }  />

      </DetailDevateContainor>
    </IndexContainor>
  )
}
export default DetailDebatePage