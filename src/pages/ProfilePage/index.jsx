import { Header } from '@components/header';
import { BasicButtonBox, Containor, Line } from '@styles/commonStyle'
import React from 'react'
import styled from 'styled-components';

const ProfileContainor = styled.div`
  padding:8px 16px;
  width: 960px;
  margin: 0 auto;
  box-sizing: border-box;
`
const InformationBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 6fr;
  grid-template-rows: repeat(6,1fr);
  h3{
    font-weight: 500;
  }
`

const ImageUploadBox = styled.div`

`

const ChangeNickNameBox = styled.div`
  
`
const ProfilePage = () => {
  return (
    <Containor>
      <Header></Header>
      <ProfileContainor>
        <h2> 프로필</h2>
        <Line height='2'></Line>
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
        
        <BasicButtonBox></BasicButtonBox>
        
      </ProfileContainor>
  </Containor>
    
  )
}
export default ProfilePage