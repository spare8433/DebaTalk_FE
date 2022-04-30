import {React} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';
import { loginAPI } from '../../api/user';
import { BasicInput } from '../../components/basicInput';
import { setCookie } from '../../cookie';
import useInput from '../../hooks/useInput';
import { Containor, ImgBox, Line, MainButton, SubButton} from '../../styles/commonStyle';


import { LoginContainor, LogoBox, SubBox } from './styles';


const LoginBox = styled.div`
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
  p{
    color: ${({theme})=> theme.colors.gray_3};
    font-size: 14px;
    font-weight: 400;
    margin:16px 0;
  }
  ${BasicInput}{
    margin: 0 auto 20px;
  }
`

const LoginPage = () => {
  const navigate = useNavigate()

  const [userId, onChangeUserId] = useInput('')
  const [password, onChangePassword] = useInput('')

  
  const onSubmitForm = async (e) => {
  
    e.preventDefault()
    try {
      const {data} = await loginAPI({
        userId,
        password
      })
      setCookie('token',data.token)
      console.log(data.token);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
    
  }
  
  const cssStyle = css`
     margin: 0 auto 20px;
  `
  const styles = {
    width:'350',
    height:'40',
    cssStyle
  }
  return (
    <Containor minWidth='800'>
      <LoginContainor>
        <LogoBox><img alt='logo' src='./img/temp_logo.png'></img></LogoBox>
        <LoginBox>
          <h2>로그인</h2>
          <form onSubmit={onSubmitForm}>
          <BasicInput styles={{...styles, placeholder:'아이디'}} value={userId} onChange={onChangeUserId}></BasicInput>
          <BasicInput styles={{...styles, placeholder:'비밀번호'}} type='password' value={password} onChange={onChangePassword}></BasicInput>
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
