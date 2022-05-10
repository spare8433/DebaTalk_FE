import { Header } from '@components/header';
import { BasicButtonBox, Containor, LightGrayButton, Line } from '@styles/commonStyle'
import React from 'react'
import styled from 'styled-components';

const ProfileContainor = styled.div`
  padding:16px 16px;
  width: 960px;
  margin: 30px auto;
  box-sizing: border-box;
  border: 2px solid ${({theme})=> theme.colors.gray_2};
  border-radius: 5px;
  h2{
    font-weight: 500;
    font-size: 24px;
    margin:8px 0 8px;
  }
`

const InformationBox = styled.div`
  width: 80%;
  margin: 30px auto;
  display: grid;
  grid-template-columns: 2fr 6fr;
  grid-template-rows: repeat(6,1fr);
  row-gap: 30px;
  h3{
    font-size:18px;
    font-weight: 500;
  }
`

const ImageUploadBox = styled.div`

`

const ChangeNickNameBox = styled.div`
  
`

const WithdrawButtonBox = styled(BasicButtonBox)`
  p{
    color: ${({theme})=> theme.colors.gray_2};
    margin-right: 10px;
  }
  button{
    
  }
`

const ProfilePage = () => {
  return (
    <Containor>
      <Header></Header>
      <ProfileContainor>
        <h2>프로필</h2>
        <Line height='1'></Line>
        <InformationBox>
          <h3>사진</h3>
          <ImageUploadBox>이미지 업로드</ImageUploadBox>

          <h3>닉네임</h3>
          <ChangeNickNameBox></ChangeNickNameBox>
          
          <h3>아이디</h3>
          <p>{}</p>

          <h3>이메일</h3>
          <p>{}</p>

          <h3>생성일자</h3>
          <p>{}</p>

        </InformationBox>
        
        <WithdrawButtonBox>
          <p>탈퇴를 원하시면 회원탈퇴 버튼을 눌러주세요</p>
          <LightGrayButton width='80' height='30'>회원탈퇴</LightGrayButton>
        </WithdrawButtonBox>
        
      </ProfileContainor>
  </Containor>
    
  )
}
export default ProfilePage