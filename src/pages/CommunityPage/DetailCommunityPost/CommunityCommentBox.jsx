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
	// 	if (user.myData !== null) return; // ???????????? ???????????? ?????? ????????? ?????? ??????
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
          <h2>?????? <span>??? {14} ???</span></h2>
          <p>????????????</p>
        </ContentHeader>
        
        {/* ?????? ????????? ?????? */}
        <CommentsBox>

          {/* ?????? ?????? ?????? */}
          <WriteCommentBox>
            <WriteComment type='comment' />
          </WriteCommentBox>

          {/* ?????? ????????? */}
          <CommentItem>
            <PostBox>
              <ProfileLine>
                <CircleImgBox><img src="" alt="" /></CircleImgBox>
                <h3>?????????</h3>
                <span>2 ?????????</span>
              </ProfileLine>

              <PostContentLine>????????????</PostContentLine>

              <InteractButtonLine>

                <InteractButtonItem>
                  <ImgBox></ImgBox><span>??????</span>
                </InteractButtonItem>

                <InteractButtonItem>
                  <ImgBox></ImgBox><span onClick={(e)=> testOnReply(e)}>??????</span>
                </InteractButtonItem>

                <InteractButtonItem>
                  <ImgBox></ImgBox><span>??????</span>
                </InteractButtonItem>
                
              </InteractButtonLine>

            </PostBox>

            {/* ?????? ????????? ?????? */}
            <RepliesBox>

              {/* ?????? ?????? ?????? */}
              <WriteReplyBox>
                <WriteComment type='reply' />
              </WriteReplyBox>

              {/* ?????? ????????? */}
              <ReplyItem>
                <ProfileLine>
                  <CircleImgBox><img src="" alt="" /></CircleImgBox>
                  <h3>?????????</h3>
                  <span>2 ?????????</span>
                  <ReplyIcon></ReplyIcon>
                </ProfileLine>

                <PostContentLine>????????????</PostContentLine>

                <InteractButtonLine>

                  <InteractButtonItem>
                    <ImgBox></ImgBox><span>??????</span>
                  </InteractButtonItem>

                  <InteractButtonItem>
                    <ImgBox></ImgBox><span>??????</span>
                  </InteractButtonItem>

                  <InteractButtonItem>
                    <ImgBox></ImgBox><span>??????</span>
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
