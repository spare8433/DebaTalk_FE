import useInput from '@hooks/useInput'
import { BasicButtonBox, CircleImgBox, MainButton, SubButton } from '@styles/commonStyle'
import React from 'react'
import { ContentLine, IndexContainor, ReplyInputBox, TitleLine, WriteReplyBox } from './style'

const WriteReply = ({data}) => {
  const [replyContent,changeReplayContent] = useInput('')

  return (
    <IndexContainor>
      <CircleImgBox width='45'>
        {/*  data.author.imgUrl === 'default' ? './img/default_user.png' : data.author.imgUrl */}
        <img src={'./img/default_user.png'} alt="" />
      </CircleImgBox>
      <WriteReplyBox>
        {/*  data.author.imgUrl === 'default' ? './img/default_user.png' : data.author.imgUrl */}
        <img src={'./img/default_user.png'} alt="" />

        <TitleLine>
          <h2>{data.title} 님의 {'찬반 여부'} 의견</h2>
          <p>{data.ceatedate}</p>
        </TitleLine>

        <ContentLine>
          <ReplyInputBox>
            <input type="text" name="" id="" value={replyContent} onChange={changeReplayContent}/>
          </ReplyInputBox>
        </ContentLine>

        <BasicButtonBox>
          <SubButton width='60' height='30' fontSize='14'>취소</SubButton>
          <MainButton width='60' height='30' fontSize='14'>작성</MainButton>
        </BasicButtonBox>

      {'답글 쓰기'}

      </WriteReplyBox>
    </IndexContainor>
  )
}

export default WriteReply