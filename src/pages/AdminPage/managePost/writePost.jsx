import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { BasicInput } from '../../../components/basicInput'
import useInput from '../../../hooks/useInput'
import { Containor, InputBox, MainButton } from '../../../styles/commonStyle'

const SelectBox = styled(InputBox)`
margin-left:10px; 
  select{
    color:${({theme})=> theme.colors.gray_1};
    padding-right: 8px;
    padding-left: 8px;
  }
`
const TopInputBox = styled.div`
  display: flex;
`
 
export const WritePost = () => {
  const location = useLocation()
  console.log(location);
  alert(location.pathname)
  const defaultText = '타이틀 ㅇㅇㅇ /n dad'
  const [postTitle,onChangePostTitle] = useInput('')
  return (
      
    <Containor width='100%'>
      <form>
        <TopInputBox>
          <BasicInput styles={{width:400,height:30,placeholder:'제목을 입력해주세요'}} value={postTitle} onChange={onChangePostTitle} type='search' ></BasicInput>
          
          <SelectBox height='30'>
            <select>
              <option>주제토론</option>
              <option>찬반토론</option>
              <option>끝장토론</option>
            </select>
          </SelectBox>
        </TopInputBox>

        <MainButton type='submit' width='180' height='40' fontSize='18'>등록</MainButton>
        {/* <input type="submit"></input> */}
        {/* <textarea placeholder={defaultText}></textarea> */}
      </form>
    </Containor>
  )
}
