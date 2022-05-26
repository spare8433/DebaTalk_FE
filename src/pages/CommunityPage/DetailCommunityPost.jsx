import { ImgBox, LightGrayButton, MainButton, SubButton } from '@styles/commonStyle'
import React from 'react'
import styled from 'styled-components'
import { CommunityCommentBox } from './CommunityCommentBox'
import dompurify from 'dompurify'

const IndexContainor = styled.div`
  width: 100%;
`

const ContentContainor = styled.div`
  border-radius: 8px;
  background-color: white;
  border: ${({theme})=> theme.colors.gray_1};
  padding:10px 0 20px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
`

const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  padding: 10px 20px 12px;
  border-bottom: 1px solid ${({theme})=> theme.colors.gray_1};
`
  const TitleLine = styled.div`
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 22px;
      font-weight: 500;
    }
    span {

    }
  `
  const PostInfoLine = styled.div`
    display: flex;
    justify-content: space-between;

  `
    const CategoryItems = styled.ul`
    display: flex;
      li {
        margin: 0 10px;
        color: ${({theme})=> theme.colors.gray_2};
        font-weight: 400;
      }
    `
    const InteractInfoItems = styled.ul`
    display: flex;
      li {
        margin: 0 10px;
        color: ${({theme})=> theme.colors.gray_2};
        font-weight: 400;
      }
    `
const ContentBox = styled.div`
  padding: 16px 20px;
` 
  const PostMainImgBox = styled(ImgBox)`
    max-height: 300px;
  `

  const TextBox = styled.div`
    margin: 10px 0;
  `

const RecButtonBox = styled.div`
  text-align: center;
  padding: 16px 20px;
  border-top: 1px solid ${({theme})=> theme.colors.gray_2};
  border-bottom: 1px solid ${({theme})=> theme.colors.gray_2};
  button{
    margin:0 10px;
  }
`




export const DetailCommunityPost = () => {
  const sanitizer = dompurify.sanitize;
  return (
    <IndexContainor>
      <ContentContainor>

        <ContentHeader>
          <TitleLine>
            <h1> 커뮤니티 게시물 제목 </h1>
            <span>신고</span>
          </TitleLine>

          <PostInfoLine>

            <CategoryItems>
              <li>카테고리</li>
              <li>시간</li>
              <li>lv + 닉네임</li>
            </CategoryItems>
                        
            <InteractInfoItems>
              <li>조회수 100</li>
              <li>댓글 22</li>
              <li>추천 252</li>
            </InteractInfoItems>

          </PostInfoLine>

        </ContentHeader>

        <ContentBox>
          <PostMainImgBox></PostMainImgBox>
          {/* dangerouslySetInnerHTML={ {__html: sanitizer('ㅇ')} } */}
          <TextBox> 컨텐츠 내용이 들어올 자리입니다 </TextBox>
        </ContentBox>

        <RecButtonBox>
          <MainButton width='80' height='30' fontSize='14'>추천</MainButton>
          <SubButton width='80' height='30' fontSize='14'>비추천</SubButton>         
        </RecButtonBox>

        {/* 댓글리스트  */}
        <CommunityCommentBox />

      </ContentContainor>
    </IndexContainor>
  )
}
