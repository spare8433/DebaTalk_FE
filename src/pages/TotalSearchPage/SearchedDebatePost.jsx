import { ImgBox, Title } from '@styles/commonStyle'
import DebateCotentBox from 'pages/DebateForumPage/DebateCotentBox'
import React, { memo } from 'react'
import styled from 'styled-components'

const MoreInfoButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  ${({theme})=>theme.colors.gray_2}
  margin:12px auto;
  color: ${({theme})=>theme.colors.gray_3};
  border-bottom: 1px solid ${({theme})=>theme.colors.gray_3};
  padding: 16px 0 12px;
  
  span, ${ImgBox} {
    margin-right:6px;
    cursor: pointer;
  }
`
const SearchedDebatePost = () => {
  return (
    <div>
      <Title>토론게시판</Title>
      <DebateCotentBox></DebateCotentBox>
      <MoreInfoButtonBox>
        <span>총 {7} 건 더보기</span>        
        <ImgBox width='14'><img src="/img/right_gray.png" alt="" /></ImgBox>
      </MoreInfoButtonBox>
    </div>
  )
}

export default memo(SearchedDebatePost)
 