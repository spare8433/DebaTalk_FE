import { CircleImgBox, ImgBox } from '@styles/commonStyle'
import React from 'react'
import { CommentBox, ContentLine, IndexContainor, OtherButtonItems, OtherServiceLine, ShowReplyButton, TitleLine } from './style'

const CommentList = ({data}) => {

  const [viewReplyList,setViewReplyList] = true
  return (
    <IndexContainor>
      <CircleImgBox width='45'>
        {/*  data.author.imgUrl === 'default' ? './img/default_user.png' : data.author.imgUrl */}
        <img src={'./img/default_user.png'} alt="" />
      </CircleImgBox>
      <CommentBox>

        <TitleLine>
          <h2>{'작성자 닉네임'} 님의 {'찬반 여부'} 의견</h2>
          <p>{data.createDate}</p>
        </TitleLine>

        <ContentLine>
          {data.content}
        </ContentLine>

        <OtherServiceLine>

          <ShowReplyButton onClick={()=>setViewReplyList(!viewReplyList)}>
            <ImgBox><img src={viewReplyList ? "./img/slideUp_gray.png" : "./img/slideDown_gray.png"} alt="" /> 답글{data.comments.length}</ImgBox>
          </ShowReplyButton>

          <OtherButtonItems>
            <span>답글</span>
            <span>추천</span>
            <span>비추천</span>
          </OtherButtonItems>

        </OtherServiceLine>

        {'답글 리스트 들어올자리'}

      </CommentBox>
    </IndexContainor>
  )
}
export default CommentList