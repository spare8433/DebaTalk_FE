import { createCommentAPI } from '@api/comment'
import useInput from '@hooks/useInput'
import { BasicButtonBox, MainButton } from '@styles/commonStyle'
import React from 'react'
import { useSelector } from 'react-redux'
import { AuthorOptionBox, CommentTextArea, IndexContainor, ProsConseSelectBox, UserNickNameInput } from './style'

const initOption = {
  voteOn:false    // 찬성 , 반대 옵션 추가
}

const WriteComment = ({option = initOption,postId}) => {
  
  const user = useSelector(state=> state.user)

  const [nickName,ChangeNickName] = useInput('')
  const [prosCors,ChangeProsCors] = useInput('')
  const [commentContent,ChangeCommentContent] = useInput('')

  const submitComment = async () => {
    if (user.myData === null) return alert('로그인후 이용가능한 서비스입니다')
    console.log(commentContent);
    await createCommentAPI({
      postId,
      data:{
        author:user.myData.id,
        content:commentContent
      }
    })
  }
  return (
    <IndexContainor>
      <AuthorOptionBox>
        {option.voteOn && <ProsConseSelectBox>
          <select onChange={ChangeProsCors} value={prosCors}>
            <option value="찬성">찬성</option>
            <option value="반대">반대</option>
          </select>
          
        </ProsConseSelectBox>}

        <UserNickNameInput width='280' height='30'>
          <input type="text" placeholder={'로그인후 이용가능한 서비스입니다'} value={user.myData !== null ? user.myData.userId : nickName } onChange={ChangeNickName}/>
        </UserNickNameInput>

      </AuthorOptionBox>

      <CommentTextArea rows='8' maxLength={300} onChange={ChangeCommentContent} value={commentContent}></CommentTextArea>

      <BasicButtonBox>
        <MainButton width='120' height='36' fontSize='16' onClick={()=>submitComment()}>댓글작성</MainButton>
      </BasicButtonBox>    

    </IndexContainor>
  )
}

export default WriteComment