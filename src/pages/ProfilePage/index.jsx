import { uploadUserImageAPI } from '@api/user';
import { Header } from '@components/Header';
import { BasicButtonBox, CircleImgBox, Containor, LightGrayButton, Line } from '@styles/commonStyle'
import React, { useState, useEffect} from 'react'
import styled from 'styled-components';
import { useSelector,useDispatch } from 'react-redux'
import { setUser } from '@store/actions'

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
  const [imageFile,setImageFile] = useState([])
  const [previewImage,setPreviewImage] = useState('/img/default_user.png')
  const [isDisableSubmit,setIsDisableSubmit] = useState(true)

  const user = useSelector(state=> state.user);
  const dispatch = useDispatch()

  console.log(user);

  useEffect(() => {
    console.log(user);
    user.imgUrl === 'default' ? setPreviewImage('/img/default_user.png') : setPreviewImage(user.imgUrl) 
  }, [user])
  

  const onLoadFile = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.currentTarget.files[0]);
    
    fileReader.onload = () =>{
      console.log(fileReader);
      console.log(fileReader.result);
      setPreviewImage(fileReader.result)
    }
    setImageFile(e.currentTarget.files)
    console.log(e.currentTarget.files);
    
    
    setIsDisableSubmit(false);
  }

  // const [imageFile,onChangeImageFile]= useInputFile()

  const onSaveImage = () =>{
    const formdata = new FormData();
    formdata.append('image',imageFile[0])
    dispatch(setUser({...user,imgUrl:previewImage}))
    uploadUserImageAPI(formdata);
    setIsDisableSubmit(true);
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
            <p>{user.nickname}</p>
            
          </ChangeNickNameBox>
          
          <h3>아이디</h3>
          <p>{user.userId}</p>

          <h3>이메일</h3>
          <p>{user.email}</p>

          <h3>생성일자</h3>
          <p>{user.createDate}</p>

          <h3>레벨 | 포인트</h3>
          <p>{user.level +' lv | ' + user.point + ' point'}</p>

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