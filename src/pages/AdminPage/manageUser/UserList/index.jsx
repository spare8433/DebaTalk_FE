import { Containor } from '@styles/commonStyle'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import UserDetail from './UserDetail'
import UserSearchBox from './UserSearchBox'
import UserTable from './UserTable'

const UserListContanior = styled.div`
  
`

const MainContentBox = styled.div`
  
`

const ButtonBox = styled.div`
  
`

const UserList = () => {

  return (
    <Containor width='800'>
      <Routes>
        <Route path="/" element={
          <UserListContanior>
            
            {/* 검색 옵션 박스 */}
            <UserSearchBox />

            {/* 검색결과 이자 유저리스트 테이블 */}
            <MainContentBox>
              <UserTable />
            </MainContentBox>

            {/* 컨트롤 버튼 */}
            <ButtonBox></ButtonBox>
    
          </UserListContanior>
        }></Route>

        <Route path="user-detail" element={<UserDetail />} />
      </Routes>
      
    </Containor>
  )
}
export default UserList