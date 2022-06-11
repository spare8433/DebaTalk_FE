import { getCommunityPostRequest } from '@store/communityPost/communityPost.actions'
import { fetchUserProfileRequest } from '@store/user/user.actions'
import { BasicButtonBox, CircleImgBox, ImgBox, MainButton, SubButton } from '@styles/commonStyle'
import React, { useEffect,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import WriteComment from './WriteComment'


const IndexContainor = styled.div`
  width: 100%;
`
const ContentContainor = styled.div`
  width: 100%;
  padding: 10px 0;
`
const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0 16px;
  margin: 0 20px;
  border-bottom: 1px solid ${({theme})=> theme.colors.gray_2};;
  h2 {
    font-size: 18px;
    font-weight: 500;
    
  }
  span {
    font-size: 14px;
    margin-left: 10px;
    font-weight: 400;
    color: ${({theme})=> theme.colors.gray_2};
  }
`

const CommentsBox = styled.div`
  
`
  const WriteCommentBox = styled.div`
    padding:20px;
  `

  const CommentItem = styled.div`
    
  ` 
  const PostBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
  `
    const ProfileLine = styled.div`
      display: flex;
      h3{
        font-weight: 500;
        margin:0 16px;
      }
      span{
        font-size: 14px;
        font-weight: 400;
        color: ${({theme})=> theme.colors.gray_2};
      }
    `

    const PostContentLine = styled.div`
      font-weight: 400;
      margin: 14px 0;
    `

    const InteractButtonLine = styled.div`
      display: flex;
    `
      const InteractButtonItem = styled.div`
        margin:0 30px 0 5px;
        ${ImgBox} {

        }
        span {
          color: ${({theme})=> theme.colors.gray_2};
        }
      `
  const RepliesBox = styled.div`
    
  `
    const ReplyItem = styled(CommentItem)`
      padding: 20px 20px 20px 50px;
      background-color: ${({theme})=> theme.colors.background};
      position:relative;
    `
    const ReplyIcon = styled.div`
      position: absolute;
      position: absolute;
      left: 25px;
      width: 12px;
      height: 12px;
      border-left: 1px solid #c5cbd0;
      border-bottom: 1px solid #c5cbd0;
    `
    const WriteReplyBox = styled(ReplyItem)`
    
    `


export const CommunityCommentBox = () => {
  const user = useSelector((state)=> state.user)
	const dispatch = useDispatch()

	// useEffect(() => {
	// 	console.log(1);
	// 	if (user.myData !== null) return; // 포스트가 존재하면 아예 요청을 하지 않음
  //   dispatch(fetchUserProfileRequest())
	// 	console.log(2);
	// }, [])

  const testOnReply = (e) => {
    console.log(e)
  }

  console.log(user);

  return (
    <IndexContainor>
      <ContentContainor>

        <ContentHeader>
          <h2>댓글 <span>총 {14} 개</span></h2>
          <p>업데이트</p>
        </ContentHeader>
        
        {/* 댓글 리스트 박스 */}
        <CommentsBox>

          {/* 댓글 작성 부분 */}
          <WriteCommentBox>
            <WriteComment type='comment' />
          </WriteCommentBox>

          {/* 댓글 리스트 */}
          <CommentItem>
            <PostBox>
              <ProfileLine>
                <CircleImgBox><img src="" alt="" /></CircleImgBox>
                <h3>닉네임</h3>
                <span>2 시간전</span>
              </ProfileLine>

              <PostContentLine>댓글내용</PostContentLine>

              <InteractButtonLine>

                <InteractButtonItem>
                  <ImgBox></ImgBox><span>추천</span>
                </InteractButtonItem>

                <InteractButtonItem>
                  <ImgBox></ImgBox><span onClick={(e)=> testOnReply(e)}>답글</span>
                </InteractButtonItem>

                <InteractButtonItem>
                  <ImgBox></ImgBox><span>신고</span>
                </InteractButtonItem>
                
              </InteractButtonLine>

            </PostBox>

            {/* 답글 리스트 박스 */}
            <RepliesBox>

              {/* 답글 작성 부분 */}
              <WriteReplyBox>
                <WriteComment type='reply' />
              </WriteReplyBox>

              {/* 답글 리스트 */}
              <ReplyItem>
                <ProfileLine>
                  <CircleImgBox><img src="" alt="" /></CircleImgBox>
                  <h3>닉네임</h3>
                  <span>2 시간전</span>
                  <ReplyIcon></ReplyIcon>
                </ProfileLine>

                <PostContentLine>답글내용</PostContentLine>

                <InteractButtonLine>

                  <InteractButtonItem>
                    <ImgBox></ImgBox><span>추천</span>
                  </InteractButtonItem>

                  <InteractButtonItem>
                    <ImgBox></ImgBox><span>답글</span>
                  </InteractButtonItem>

                  <InteractButtonItem>
                    <ImgBox></ImgBox><span>신고</span>
                  </InteractButtonItem>
                  
                </InteractButtonLine>
              </ReplyItem>
            </RepliesBox>

          </CommentItem>
          
        </CommentsBox>

      </ContentContainor>
    </IndexContainor>
  )
}
