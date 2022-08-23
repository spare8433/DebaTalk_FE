import { BasicSelectBox, InputBox } from '@styles/commonStyle'
import styled from 'styled-components'

export const IndexContainor = styled.div`
  width: 100%;
` 

export const AuthorOptionBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const CommentTextArea = styled.textarea`
  box-sizing: border-box;
  width : 100%;
  resize: none;
  outline: none;
  padding: 4px 8px;
  margin-bottom: 10px;
`

export const ProsConseSelectBox = styled(BasicSelectBox)`
  width : 100px;
  margin-right: 20px;
`

export const UserNickNameInput = styled(InputBox)`
  
  
  input{
    margin: 0;
    font-size: 14px;
    font-weight: 400;
  }
 `
