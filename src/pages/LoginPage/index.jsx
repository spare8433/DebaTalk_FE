import {React, useState} from 'react'
import { loginAPI } from '../../api/user';
import { getCookie, setCookie } from '../../cookie';
import useInput from '../../hooks/useInput';
import {ImgBox} from '../../styles/commonStyle';


import { Containor, InputBox, Line, LoginBox, LoginContainor, LogoBox, MainButton, SubBox, SubButton } from './styles';


const LoginPage = () => {

 
  const [userId, onChangeUserId] = useInput('')
  const [password, onChangePassword] = useInput('')


  const onSubmitForm = async (e) => {
    e.preventDefault()
    const {data} = await loginAPI({
      userId,
      password
    })
    setCookie('token',data.token)
    console.log(data.token);    
  }
  
  return (
    <Containor>
      <LoginContainor>
        <LogoBox><img alt='logo' src='./img/temp_logo.png'></img></LogoBox>
        <LoginBox>
          {/* <h2>로그인</h2> */}
          <form onSubmit={onSubmitForm}>
          <InputBox width='350'><input placeholder='ID' value={userId} onChange={onChangeUserId}/></InputBox>
          <InputBox width='350'><input tpye='password' placeholder='PW' value={password} onChange={onChangePassword}/></InputBox>
          <MainButton width='350' height='40' type='submit' fontSize='18'>로그인</MainButton>
          </form>
          <p>아이디 / 비밀번호 찾기</p>
          <Line width='350' height='1'></Line>
          <SubBox>
            <>
              <ImgBox width='40' shadow='true'><img alt='facebook' src='./img/facebook.png'></img></ImgBox>
              <ImgBox width='40' shadow='true'><img alt='google' src='./img/google-plus.png'></img></ImgBox>
              <ImgBox width='40' shadow='true'><img alt='kakao-talk' src='./img/kakao-talk.png'></img></ImgBox>
            </>
            <SubButton width='160' height='40' fontSize='16' onClick={()=>console.log(getCookie('user'))}>회원가입</SubButton>
          </SubBox>                    
        </LoginBox>
      </LoginContainor>
    </Containor>
  )
}

export default LoginPage
