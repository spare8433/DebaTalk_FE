import { getAllUsersRequest } from '@store/userList/userList.actions'
import { LightGrayButton } from '@styles/commonStyle'
import React, { useEffect, useState } from 'react'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const IndexContainor = styled.div`
  padding: 8px 8px 24px;
  border: solid 1px ${({theme})=> theme.colors.gray_3};
  border-radius:5px;
  margin-top: 10px;
`

const UserTableBox = styled.table`
  width: 100%;
 

  thead {
    border-bottom: solid 2px ${({theme})=> theme.colors.main};
    font-weight: 500;
  }

  tbody {
    text-align: center;
    font-weight: 300;
  }

  tr {
    border-bottom: solid 1px ${({theme})=> theme.colors.gray_3};
  }

  th,td {
    padding: 8px 0;
  }
`

const UserTable = () => {
  const navigate = useNavigate()
  const dispatch  = useDispatch()
  const [checkedList, setCheckedLists] = useState([]);

  const userList = useSelector(state => state.userList)

  useEffect( ()=>{  
    if (userList.data !== null) return;
    dispatch( getAllUsersRequest({}))
  },[])

  const onChekedAll = useCallback((checked)=>{
    const checkedListArray = [];

    if (userList.data !== null && checked) {
      userList.data.forEach(res=>{  
        checkedListArray.push(res.id)
      })

      setCheckedLists(checkedListArray)
    }else {
      setCheckedLists([])
    }
  },[userList.data])

  // 레코드 하나 선택
  const onChekedElement = (checked,id) =>{
    if (checked) {
      setCheckedLists([...checkedList, id])
    }else {
      setCheckedLists(checkedList.filter(res=> res !== id))
    }
    
  }

  return (
    <IndexContainor>
      <UserTableBox>
        <thead>
          <tr>
            <th><input type="checkbox" name="" id="" onClick={(e)=>onChekedAll(e.currentTarget.checked)}/></th>
            <th>아이디</th>
            <th>이메일</th>
            <th>닉네임</th>
            <th>관리등급</th>
            <th>생성일자</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {userList.data !== null && userList.data.map((res,index)=>{
            return <tr key={'userRecord_' + index}>
              <td><input type="checkbox" name="" id="" checked={checkedList.includes(res.id)} onChange={(e)=> onChekedElement(e.currentTarget.checked,res.id) } /></td>
              <td>{res.userId}</td>
              <td>{res.email}</td>
              <td>{res.nickname}</td>
              <td>{res.manageLevel}</td>
              <td>{res.createDate}</td>
              <td><LightGrayButton fontSize='12' onClick={()=> navigate('./user-detail',res.id)}>자세히</LightGrayButton></td>
            </tr>
          })}
        </tbody>
      </UserTableBox>
    </IndexContainor>
  )
}
export default UserTable