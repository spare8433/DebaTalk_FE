import React from 'react'
import styled from 'styled-components'
import { CircleImgBox, MainButton } from '@styles/commonStyle'
import { useSelector } from 'react-redux'
import useInput from '@hooks/useInput'

const WriteCommentInputLine = styled.div`
  display: flex;
  input{
    background: none;
    font-size: 14px;
    flex: 1;
    border: 0;
    outline: none;
    border-bottom: 2px solid ${({theme})=> theme.colors.gray_3};
    margin:0 10px;
  }
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

// type = comment or reply
const WriteComment = ({type}) => {
  const user = useSelector((state)=> state.user)

  const [value,onChangeValue] = useInput('')

  return (
    <WriteCommentInputLine>
      {type === 'reply' && <ReplyIcon></ReplyIcon> }
      <CircleImgBox width='24'><img src={user.myData !== null ? user.myData.imgUrl : '/img/default_user.png'} alt="" /></CircleImgBox>
      <input type='text' placeholder='댓글을 입력하세요' value={value} onChange={onChangeValue}></input>
      <MainButton width='60' height='24' fontSize='12'>작성</MainButton>
    </WriteCommentInputLine>
  )
}

export default WriteComment