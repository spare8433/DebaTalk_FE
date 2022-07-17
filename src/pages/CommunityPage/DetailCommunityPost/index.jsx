import { ImgBox } from '@styles/commonStyle'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CommunityCommentBox } from './CommunityCommentBox'
import dompurify from 'dompurify'
import { useDispatch, useSelector } from 'react-redux'
import { getCommunityPostRequest } from '@store/communityPost/communityPost.actions'
import { useLocation } from 'react-router-dom'
import { css } from 'styled-components'
import ReportModal from '@components/ReportModal'

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
  display: flex;
  justify-content: center;
  padding: 16px 20px;
  border-top: 1px solid ${({theme})=> theme.colors.gray_2};
  border-bottom: 1px solid ${({theme})=> theme.colors.gray_2};
  button{
    margin:0 10px;
  }
`
const RecButton = styled.div`
  margin-right: 20px;
  width: 110px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme})=> theme.colors.background};
  border: ${props=> props.isAcitve ? 'none' : `solid 1px ${props.theme.colors.gray_2}` };
 
  &:hover{
    background-color : ${props => props.primary ? props.theme.colors.main : `#E67292` };
    border:none;
    span{
      background-image: url(${ props => props.imgUrl + '_white.png' });
    }
    p{
      color: white
    }
  };

  span {
    margin-right: 10px;
    width: 24px;
    height: 24px;
    background-size:cover;
    background-image: url(${props=> props.isAcitve ? props.imgUrl + '_white.png' : props.imgUrl + '_gray.png' })
  }
  p{
    color :${({theme})=> theme.colors.gray_1};
  }
`


const DetailCommunityPost = () => {
  const sanitizer = dompurify.sanitize;
  const dispatch = useDispatch()
  const location = useLocation()

  const { communityPostData } = useSelector(state => state.communityPost)

  const [reportModalOption,setReportModalOption] = useState({
    turnOn:false,
    contentType:''
  })

  console.log(location.state.id);
  console.log(communityPostData);

  useEffect(() => {
    console.log(1);  
      dispatch( getCommunityPostRequest(location.state.id) )
  },[])

  return (
    <IndexContainor>

      { reportModalOption.turnOn ? <ReportModal setter={setReportModalOption} option={reportModalOption} /> : '' }

      <ContentContainor>

        <ContentHeader>
          <TitleLine>
            <h1>{!!communityPostData && communityPostData.title}</h1>
            <span onClick={()=>{setReportModalOption({turnOn:true, contentType:'커뮤니티 게시물'});}}>신고</span>
          </TitleLine>

          <PostInfoLine>

            <CategoryItems>
              <li>{!!communityPostData && communityPostData.category}</li>
              <li>{!!communityPostData && communityPostData.createDate}</li>
              <li>lv + 닉네임 (수정해야함)</li>
            </CategoryItems>
                        
            <InteractInfoItems>
              <li>조회수 {!!communityPostData && communityPostData.hits}</li>
              <li>댓글 22 (수정해야함)</li>
              <li>추천 {!!communityPostData && communityPostData.likeList - communityPostData.unlikeList}</li>
            </InteractInfoItems>

          </PostInfoLine>

        </ContentHeader>

        <ContentBox>
          <PostMainImgBox></PostMainImgBox>
          <TextBox dangerouslySetInnerHTML={ {__html: sanitizer(!!communityPostData && communityPostData.content)} } />
        </ContentBox>

        <RecButtonBox>
          <RecButton 
            isActive={!!communityPostData && communityPostData.likeList.find((res)=>{if(res === !!communityPostData && communityPostData.id) return res; return 0})}
            imgUrl={'/img/thumbs-up'}
            primary>
             <span></span>
             <p>추천</p>
          </RecButton>

          <RecButton 
            isActive={!!communityPostData && communityPostData.unlikeList.find((res)=>{if(res === !!communityPostData && communityPostData.id) return res; return 0})}
            imgUrl={'/img/thumbs-down'}
            primary>
             <span></span>
             <p>비추천</p>
          </RecButton>         
        </RecButtonBox>

        {/* 댓글리스트  */}
        <CommunityCommentBox />

      </ContentContainor>
    </IndexContainor>
  )
}


export default DetailCommunityPost