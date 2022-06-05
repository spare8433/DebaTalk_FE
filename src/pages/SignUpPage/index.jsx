import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { BasicInput } from '@components/basicInput'
import useInput from '@hooks/useInput'
import { Containor, MainButton } from '@styles/commonStyle'
import { checkEmail, checkId, checkNickname, checkPassword, checkRePassword, emptyCheckAll, regexCheckAll } from './check'
import { useDispatch } from 'react-redux'
import { signUpRequest } from '@store/user/user.actions'

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
  const dispatch = useDispatch()

  const [userId,onChangeUserId] = useInput('')
  const [email,onChangeUserEmail] = useInput('')
  const [nickname,onChangeUserNickName] = useInput('')
  const [password,onChangeUserPw] = useInput('')
  const [rePassword,onChangeUserRePw] = useInput('')

  // 입력값 아래 안내 메시지
  const [idNotiMsg, setIdNotiMsg] = useState('')
  const [emailNotiMsg, setEmailNotiMsg] = useState('')
  const [nicknameNotiMsg, setNicknameNotiMsg] = useState('')
  const [passwordNotiMsg, setPasswordNotiMsg] = useState('')
  const [rePasswordNotiMsg, setRePasswordNotiMsg] = useState('')

  const onSubmitForm = async (e) => {
    e.preventDefault()

    const isEmptyAll = emptyCheckAll({userId,email,nickname,password})
    const isRegexAll = regexCheckAll({userId,email,nickname,password})

    // 회원 가입전 오류 체크
    if(!isEmptyAll.check)             // 입력 값 공백 확인
      return alert(isEmptyAll.msg)
    else if(!isRegexAll.check)        // 입력 값 유효성 확인
      return alert(isRegexAll.msg)
    else{
      console.log('입력값 체크 완료');
      dispatch(signUpRequest({
        userId,
        email,
        nickname,
        password
      }))
    }
  }

  const checkObject = (data) => {
    if (!data.check)
      return data.msg
    return ''
  }
  
  const cssStyle = css`
     margin: 0 auto 20px;
  `
  const inputStyles = {
    width:'350',
    height:'40',
    cssStyle
  }

  return (
    <Containor minWidth='800'>
      <SginUpContainor>
        <SginUpBox>
          <h2>회원가입</h2>
          <form onSubmit={onSubmitForm}>
            <BasicInput styles={{...inputStyles, placeholder:'아이디'}} value={userId} onChange={onChangeUserId} onBlur={()=>{setIdNotiMsg(checkObject(checkId(userId)));}}>
              <span>{idNotiMsg}</span>
            </BasicInput>
            
            <BasicInput styles={{...inputStyles, placeholder:'이메일'}} value={email} onChange={onChangeUserEmail} onBlur={()=>{setEmailNotiMsg(checkObject(checkEmail(email)));}}>
              <span>{emailNotiMsg}</span>
            </BasicInput>
            
            <BasicInput styles={{...inputStyles, placeholder:'닉네임'}} value={nickname} onChange={onChangeUserNickName} onBlur={()=>{setNicknameNotiMsg(checkObject(checkNickname(nickname)));}}>
              <span>{nicknameNotiMsg}</span>
            </BasicInput>
            
            <BasicInput styles={{...inputStyles, placeholder:'비밀번호'}} type='password' value={password} onChange={onChangeUserPw} onBlur={()=>{setPasswordNotiMsg(checkObject(checkPassword(password)));}}>
              <span>{passwordNotiMsg}</span>
            </BasicInput>
            
            <BasicInput styles={{...inputStyles, placeholder:'비밀번호 확인'}} type='password' value={rePassword} onChange={onChangeUserRePw} onBlur={()=>{setRePasswordNotiMsg(checkObject(checkRePassword(password,rePassword)));}}>
              <span>{rePasswordNotiMsg}</span>
            </BasicInput>
            
            <MainButton width='350' height='40' type='submit' fontSize='18'>회원가입</MainButton>
          </form>
        </SginUpBox>  
        
      </SginUpContainor>
    </Containor>  )
}

export default SginUpPage