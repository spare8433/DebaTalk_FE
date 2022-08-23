import { CircleImgBox } from '@styles/commonStyle'
import React from 'react'
import { ContentLine, IndexContainor, OtherButtonItems, OtherServiceLine, ReplyBox, TitleLine } from './style'

const Reply = ({data}) => {
  return (
    <IndexContainor>
      <CircleImgBox width='45'>
        {/*  data.author.imgUrl === 'default' ? './img/default_user.png' : data.author.imgUrl */}
        <img src={'./img/default_user.png'} alt="" />
      </CircleImgBox>
      <ReplyBox>
        {/*  data.author.imgUrl === 'default' ? './img/default_user.png' : data.author.imgUrl */}
        <img src={'./img/default_user.png'} alt="" />

        <TitleLine>
          <h2>{data.title} 님의 {'찬반 여부'} 의견</h2>
          <p>{data.ceatedate}</p>
        </TitleLine>

        <ContentLine>
          {data.content}
        </ContentLine>

        <OtherServiceLine>

          <OtherButtonItems>
            <span>답글</span>
            <span>추천</span>
            <span>비추천</span>
          </OtherButtonItems>

        </OtherServiceLine>

      {'답글 쓰기'}

      </ReplyBox>
    </IndexContainor>
  )
}
export default Reply