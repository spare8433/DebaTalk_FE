import { BasicButtonBox, MainButton, SubButton } from '@styles/commonStyle'
import React from 'react'
import styled from 'styled-components'

const IndexContainor = styled.div`
  width: 100%;
`
const RestritctUserModalBox = styled.div`

`
const BackBord = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 50%;
  z-index: 2000;
`
const RestrictForm = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 450px;
  height: 450px;
  padding: 20px 0;
  z-index: 2001;
`

const TitleBox = styled.div`
  font-size: 18px;
  padding:0 16px 16px;
  border-bottom: #b2bec3 2px solid;
`

const ContentBox= styled.div`
  display: flex;
  flex-direction: column;
`

const ButtonBox = styled(BasicButtonBox)`
  margin:0 24px;
`
const RestrictUserModal = ({setter}) => {
  
  return (
    <IndexContainor>
      
      <RestritctUserModalBox>

        <BackBord></BackBord>
        <RestrictForm>
          <TitleBox>사용자 제제</TitleBox>

          <ContentBox>
   
          </ContentBox>
          
          <ButtonBox>
            <SubButton width='100' height='30' fontsize='16' onClick={()=>setter(false)}>취소</SubButton>
            <MainButton width='100' height='30' fontsize='16'>적용</MainButton>
          </ButtonBox>
          
        </RestrictForm>

      </RestritctUserModalBox>
      
    </IndexContainor>
  )
}
export default RestrictUserModal