import {React} from 'react'
import { useNavigate } from 'react-router-dom';
import { loginAPI } from '../../api/user';
import { BasicInput } from '../../components/basicInput';
import { setCookie } from '../../cookie';
import useInput from '../../hooks/useInput';
import { Containor, ImgBox, Line, MainButton, SubButton} from '../../styles/commonStyle';


import { LoginBox, LoginContainor, LogoBox, SubBox } from './styles';


const LoginPage = () => {
  const navigate = useNavigate()

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
    <Containor minWidth='800'>
      <LoginContainor>
        <LogoBox><img alt='logo' src='./img/temp_logo.png'></img></LogoBox>
        <LoginBox>
          <h2>로그인</h2>
          <form onSubmit={onSubmitForm}>
          <BasicInput styles={{width:'350',placeholder:'아이디'}} value={userId} onChange={onChangeUserId}></BasicInput>
          <BasicInput styles={{width:'350',placeholder:'비밀번호'}} type='password' value={password} onChange={onChangePassword}></BasicInput>
          {/* <InputBox width='350'><input placeholder='ID' value={userId} onChange={onChangeUserId}/></InputBox> */}
          {/* <InputBox width='350'><input tpye='password' placeholder='PW' value={password} onChange={onChangePassword}/></InputBox> */}
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
            <SubButton width='160' height='40' fontSize='16' onClick={() => navigate('/sign-up')}>회원가입</SubButton>
          </SubBox>                    
        </LoginBox>
      </LoginContainor>
    </Containor>
  )
}

export default LoginPage
