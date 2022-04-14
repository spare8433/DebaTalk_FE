import React from 'react'
import styled from 'styled-components'
import { BasicInput } from '../../components/basicInput'
import useInput from '../../hooks/useInput'
import { Containor, MainButton } from '../../styles/commonStyle'

const SginUpContainor = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* border: 8px solid ${({theme})=> theme.colors.gray_2}; */
  border-left: 0;
  border-right: 0;
  padding: 16px 20px;
`

const SginUpBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 20px;
  border: 1px solid ${({theme})=> theme.colors.gray_3};
  border-radius: 5px;
  background-color: ${({theme})=> theme.colors.background};
  h2{
    width: 350px;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
  }
`

const SginUpPage = () => {
  const [tempUserId,onChangeTempUserId] = useInput('')
  const [tempUserEmail,onChangeTempUserEmail] = useInput('')
  const [tempUserNickName,onChangeTempUserNickName] = useInput('')
  const [tempUserPw,onChangeTempUserPw] = useInput('')
  const [tempUserRePw,onChangeTempUserRePw] = useInput('')

  return (
    <Containor minWidth='800'>
      <SginUpContainor>
        <SginUpBox>
          <h2>회원가입</h2>
          <BasicInput styles={{width:'350', placeholder:'아이디'}} value={tempUserId} onChange={onChangeTempUserId}></BasicInput>
          <BasicInput styles={{width:'350', placeholder:'이메일'}} value={tempUserEmail} onChange={onChangeTempUserEmail}></BasicInput>
          <BasicInput styles={{width:'350', placeholder:'닉네임'}} value={tempUserNickName} onChange={onChangeTempUserNickName}></BasicInput>
          <BasicInput styles={{width:'350', placeholder:'비밀번호'}} type='password' value={tempUserPw} onChange={onChangeTempUserPw}></BasicInput>
          <BasicInput styles={{width:'350', placeholder:'비밀번호 확인'}} type='password' value={tempUserRePw} onChange={onChangeTempUserRePw}></BasicInput>
          <MainButton width='350' height='40' type='submit' fontSize='18'>회원가입</MainButton>
        </SginUpBox>  
        
      </SginUpContainor>
    </Containor>  )
}

export default SginUpPage