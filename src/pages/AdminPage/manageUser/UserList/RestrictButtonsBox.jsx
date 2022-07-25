import { ImgBox } from '@styles/commonStyle'
import React from 'react'
import styled from 'styled-components'

const IndexContainor = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`

const IconBox = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  img {
    width: ${({imgWidth})=>imgWidth + 'px'};
  }
`

const BaseButton = styled.div`
  width: 180px;
  height: 50px;
  display:flex;
  justify-content: space-between;
  border-radius: 20px;
  margin-right: 40px;
  span {
    color:white;
    flex:1;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  ${IconBox} {
    border-radius: 20px;
  }
`

const SendMsgBtn = styled(BaseButton)`
  background-color:#2A81B9;
  ${IconBox} {
    background-color:#206591;
  }
`

const RestrictBtn = styled(BaseButton)`
  background-color:#FD6400;
  ${IconBox} {
    background-color:#C55003;
  }
`

const BanBtn = styled(BaseButton)`
  background-color:#DB182C;
  ${IconBox} {
    background-color:#B61626;
  }
`
const RestrictButtonsBox = () => {
  return (
    <IndexContainor>
      <SendMsgBtn>
        <IconBox imgWidth='28'><img src="/img/messge_white.png" alt="message" /></IconBox>
        <span>알림 발송</span>
      </SendMsgBtn>

      <RestrictBtn>
        <IconBox imgWidth='40'><img src="/img/restrict-user_white.png" alt="message" /></IconBox>
        <span>이용 제재</span>
      </RestrictBtn>

      <BanBtn>
        <IconBox imgWidth='24'><img src="/img/cancle_white.png" alt="message" /></IconBox>
        <span>탈퇴 처리</span>
      </BanBtn>
      
    </IndexContainor>
  )
}
export default RestrictButtonsBox