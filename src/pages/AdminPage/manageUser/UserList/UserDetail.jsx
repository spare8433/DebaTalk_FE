import { BasicButtonBox, CircleImgBox, Containor, LightGrayButton, MainButton, SubButton } from '@styles/commonStyle'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import RestrictButtonsBox from './RestrictButtonsBox'


const UserDetailContainor = styled.div`
  
`

const BasicBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  margin-bottom:30px;
`

const Title = styled.h2`
  width: 100%;
  padding: 6px 2px;
  margin-bottom: 20px;
  border-bottom: solid 1px black;
`


const UserInfoBox = styled(BasicBox)`

  align-items: center;
`

const ProfileImgBox = styled.div`
  grid-column: 1/3;
  grid-row: 1/6;
  margin: 0 25px;
  min-width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const GridBox = styled.div`

  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  span{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=>theme.colors.background}
  }

  p{
    padding-left:16px;
    display: flex;
    align-items: center;
  }

  span:nth-of-type(1),span:nth-of-type(2),span:nth-of-type(3),span:nth-of-type(4),span:nth-of-type(6){
    grid-column: 3/5
  }

  span:nth-of-type(5),span:nth-of-type(7){
    grid-column: 9/11
  }

  p:nth-of-type(1),p:nth-of-type(2),p:nth-of-type(3){
    grid-column: 5/13
  }

  p:nth-of-type(4),p:nth-of-type(6){
    grid-column: 5/9
  }

  p:nth-of-type(5),p:nth-of-type(7){
    grid-column: 11/13
  }

`

const ChangeInfoButton = styled(LightGrayButton)`
  margin-top:20px;
`

const UserHistoryBox = styled(BasicBox)`
  
`

const CotrollButtonBox = styled(BasicButtonBox)`
  padding-top:20px;
  border-top: solid 1px ${({theme})=>theme.colors.gray_2};
  justify-content: center;
`


const testObj = 
  {
    id: "624bc1796175813107b7ef2f",
    userId : "admin",
    createDate : "2022년 05월 08일",
    point : 0,
    level : 1,
    imgUrl : "http://localhost:8000/media/users/천수관음 SI 개발자_1654070034444.png",
    email :"admin@naver.com",
    nickname :"admin",
    manageLevel:1
  };
  
const UserDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // useEffect(() => {  
  //     dispatch( getUser(location.state.id) )
  // },[])

  return (
    <Containor width='800'>
      <UserDetailContainor>
        <UserInfoBox>
          <Title>▣ 회원 정보</Title>
          <GridBox>
            <ProfileImgBox>
              <CircleImgBox width='150'><img src={testObj.imgUrl} alt="" /></CircleImgBox>
              <MainButton width='150' height='30' fontSize='14'>프로필 사진 초기화</MainButton>
            </ProfileImgBox>
            
            <span>아이디</span>
            <p>{testObj.userId}</p>
            <span>이메일</span>
            <p>{testObj.email}</p>
            <span>닉네임</span>
            <p>{testObj.nickname}</p>

            <span>생성일자</span>
            <p>{testObj.createDate}</p>
            <span>관리등급</span>
            <p>{testObj.manageLevel}</p>
            <span>level</span>
            <p>{testObj.level}</p>
            <span>point</span>
            <p>{testObj.point}</p>
          </GridBox>
          
          <ChangeInfoButton width="120" height='32' fontSize='14'>회원정보 수정</ChangeInfoButton>
        </UserInfoBox>

        <UserHistoryBox>
          <Title>▣ 사이트 이용 내역</Title><br></br>
          {'제재 내역 테이블 들어올 자리'}<br></br>
          {'신고 현황'}
        </UserHistoryBox>

        <RestrictButtonsBox></RestrictButtonsBox>

        <CotrollButtonBox>
          <SubButton width='120' height='40' fontSize='16' onClick={()=> navigate(-1)}>뒤로</SubButton>
        </CotrollButtonBox>

      </UserDetailContainor>
    </Containor>
  )
}
export default UserDetail