import { uploadUserImageAPI } from '@api/user';
import { Header } from '@components/Header';
import { BasicButtonBox, CircleImgBox, Containor, LightGrayButton, Line } from '@styles/commonStyle'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useSelector,useDispatch } from 'react-redux'

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
    margin:8px 16px 8px;
  }
`

const InformationBox = styled.div`
  width: 80%;
  margin: 30px auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  /* grid-template-rows: repeat(6,1fr); */
  row-gap: 30px;
  h3{
    font-size:18px;
    font-weight: 500;
  }
`

const ImageUploadBox = styled.div`
  display: block;
  input[type=file]{
    display: none;
  }
  label{
    cursor: pointer;
    
  }
`

const ImgLine = styled.div`
  
`

const InputLine = styled.div`
  margin-top: 10px;
  display: flex;
  font-size: 14px;
  label{
    display: flex;
    align-items:center;
    font-weight: 300;
    color: ${({theme})=>theme.colors.gray_1};
    margin-right:10px;
  }
`

const ChangeNickNameBox = styled.div`
  
`

const WithdrawButtonBox = styled(BasicButtonBox)`
  font-size: 12px;
  p{
    color: ${({theme})=> theme.colors.gray_2};
    margin-right: 10px;
  }
`

const ProfilePage = () => {
  const [imageFile, setImageFile] = useState([])
  // const imageFile = useRef()

  // 사가로 가야되고
  // 1
  const [previewImage,setPreviewImage] = useState('/img/default_user.png')
  // 2
  const [isDisableSubmit,setIsDisableSubmit] = useState(true)

  const { myData } = useSelector(state=> state.user);
  const dispatch = useDispatch()

  // console.log('이런식이면 사이트가 두번 도는 거지요?');

  // useEffect(() => {
  //   console.log('useeffect',user);
  //   user.imgUrl === 'default' ? setPreviewImage('/img/default_user.png') : setPreviewImage(user.imgUrl)
  // }, [user])
  

  const onLoadFile = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.currentTarget.files[0]);
    
    fileReader.onload = () =>{
      // imageFile.current = fileReader.result
      setPreviewImage(fileReader.result)
    }
    // imageFile.current = e.currentTarget.files
    setImageFile(e.currentTarget.files)
    
    setIsDisableSubmit(false);
  }

  // const [imageFile,onChangeImageFile]= useInputFile()

  // 유저 이미지 업로드
  const onSaveImage = () =>{
    const formdata = new FormData();
    formdata.append('image',imageFile[0])
    // dispatch(setUser({...myData, imgUrl: previewImage}))
    uploadUserImageAPI(formdata);
    // setIsDisableSubmit(true);
  }

  return (
    <Containor>
      <Header></Header>
      <ProfileContainor>
        <h2>프로필</h2>
        <Line height='1'></Line>
        <InformationBox>
          <h3>사진</h3>
          <ImageUploadBox>

            <input type='file' id='fileElem' onChange={onLoadFile} accept='image/*'></input>

            <ImgLine>
              <label htmlFor="fileElem"><CircleImgBox width='100'><img src={previewImage} alt=''></img></CircleImgBox></label>
            </ImgLine>

            <InputLine>
              <label htmlFor="fileElem">이미지 업로드</label>
              <button onClick={onSaveImage} disabled={isDisableSubmit}>저장</button>
            </InputLine>
          
          </ImageUploadBox>

          <h3>닉네임</h3>
          <ChangeNickNameBox>
            <p>{myData.nickname}</p>
            
          </ChangeNickNameBox>
          
          <h3>아이디</h3>
          <p>{myData.userId}</p>

          <h3>이메일</h3>
          <p>{myData.email}</p>

          <h3>생성일자</h3>
          <p>{myData.createDate}</p>

          <h3>레벨 | 포인트</h3>
          <p>{myData.level +' lv | ' + myData.point + ' point'}</p>

        </InformationBox>
        
        <WithdrawButtonBox>
          <p>탈퇴를 원하시면 회원탈퇴 버튼을 눌러주세요</p>
          <LightGrayButton width='70' height='24' fontSize='12'>회원탈퇴</LightGrayButton>
        </WithdrawButtonBox>
        
      </ProfileContainor>
  </Containor>
    
  )
}
export default ProfilePage