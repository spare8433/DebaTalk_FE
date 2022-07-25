import useInput from '@hooks/useInput'
import { getAllUsersRequest } from '@store/userList/userList.actions'
import { BasicSearchBox, MainButton, SelectBox } from '@styles/commonStyle'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const IndexContainor = styled.div`
  width: 100%;
`

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`

const SearchOptionLine = styled.div`
  display: flex;
  margin-bottom: 10px;
`
const ManageOptionLine = styled.div`
  display: flex;
  label{
    margin-left: 20px;
  }

  input[type='radio'] {
    margin-right: 8px;
  }
`

const UserSearchBox = () => {
  const dispatch = useDispatch()

  // 검색옵션 state
  const [searchText, setSearchText] = useInput('')       
  const [selectOption,setSelectOption] = useInput('아이디'); 
  const [manageLevel,setManageLevel] = useInput('0');   
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch( getAllUsersRequest({
      userId : selectOption === '아이디' ? searchText : '',
      nickaname : selectOption === '닉네임' ? searchText : '',
      manageLevel : manageLevel
    }))
  }

  return (
    <IndexContainor>
      <SearchBox>

        <InputBox>

          <SearchOptionLine>

            <BasicSearchBox>
              <input type="text" placeholder='검색어를 입력하세요' value={searchText} onChange={setSearchText}/>
            </BasicSearchBox>
        
            <SelectBox width='100' height='30'>
              <select value={selectOption} onChange={setSelectOption}>
                <option value="아이디">아이디</option>
                <option value="닉네임">닉네임</option>
              </select>
            </SelectBox>

          </SearchOptionLine>

          <ManageOptionLine>
            관리 등급 : 
            <label>
              <input type="radio" value={0} checked={manageLevel === '0'} onChange={setManageLevel}/> 0 : 일반사용자
            </label>

            <label>
              <input type="radio" value={1} checked={manageLevel === '1'} onChange={setManageLevel}/> 1 : 관리자
            </label>
          </ManageOptionLine>

        </InputBox>

        <MainButton width='100' height='60' fontSize='16' onClick={handleSubmit}>검색</MainButton>

        </SearchBox>
    </IndexContainor>
  )
}

export default UserSearchBox