import React, { useState } from 'react'

import styled from 'styled-components'
import { BasicInput } from '@components/basicInput'
import useInput from '@hooks/useInput'
import { BasicButtonBox, Containor, InputBox, MainButton } from '@styles/commonStyle'
import Editor from '@components/Editor'
import { createDebatePostAPI } from '@api/debatePost'

const TopInputBox = styled.div`
  display: flex;
`

const SelectBox = styled(InputBox)`
margin-left:10px; 
  select{
    color:${({theme})=> theme.colors.gray_1};
    padding-right: 8px;
    padding-left: 8px;
  }
`

const EditBox = styled.div`
  margin: 10px 0 30px;
  .ql-editor strong{
     font-weight:bold;
 }
`
 
const WritePost = () => {
  const [title,onChangeTitle] = useInput('')
  const [content, setContent] = useState('');
  const [category, onChangeCategory] = useInput('주제토론');
  const [method, onChangeMethod] = useInput('주제토론');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log([category,title,content]);

    const response = await createDebatePostAPI({
      method,
      category,
      title,
      content
    })
    console.log(response);
  }

  return (
      
    <Containor width='800'>      
      <form onSubmit={onSubmitForm}>
        <TopInputBox>
        
          <BasicInput styles={{width:400,height:30,placeholder:'제목을 입력해주세요'}} value={title} onChange={onChangeTitle} type='search' ></BasicInput>
          
          <SelectBox height='30'>
            <select value={method} onChange={onChangeMethod}>
              <option>주제토론</option>
              <option>찬반토론</option>
              <option>끝장토론</option>
            </select>
          </SelectBox>

          <SelectBox height='30'>
            <select value={category} onChange={onChangeCategory}>
              <option>자유</option>
              <option>사회</option>
              <option>문화</option>
            </select>
          </SelectBox>
        </TopInputBox>

        <EditBox>
          <Editor value={content} setValue={setContent}></Editor>
        </EditBox>

        <BasicButtonBox width={'100%'}>
          <MainButton type='submit' width='180' height='40' fontSize='18'>등록</MainButton>
        </BasicButtonBox>
      </form>
      
    </Containor>
  )
}

export default WritePost