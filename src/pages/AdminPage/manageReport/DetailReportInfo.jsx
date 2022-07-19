import RestrictUserModal from '@components/RestrictUserModal'
import { TestLongText } from '@data/staticData'
import { BasicButtonBox, MainButton, SubButton } from '@styles/commonStyle'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const IndexContainor = styled.div`
  
`

const DetailReportInfoContanior = styled.div`
  display: flex;
  flex-direction: column;
`

const InfoBox = styled.div`
  padding: 8px 16px 16px;
  border-bottom: solid 1px ${({theme})=>theme.colors.gray_2};
  display: flex;
  flex-direction: column;
`

const ReportInfoBox = styled(InfoBox)`
  
`

const PostInfoBox = styled(InfoBox)`
  
`
const PostContentBox = styled.div`
  h3{
    padding: 8px 0;
    margin: 8px 0;
  }
`
const PostContent = styled.p`
  height: 200px;
  max-height: 300px;
  overflow-y: scroll;
  line-height: 1.6;
`

const InfoGridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr;
  grid-column:2/3;
  p:nth-child(2){
    grid-column:2/5;
    font-weight: 500;
  }
  p,h3{
    padding: 8px 0;
    margin: 8px 0;
  }
`
const ReportInfoGridBox = styled(InfoGridBox)`
  
`

const PostInfoGridBox = styled(InfoGridBox)`
  
`

const ButtonBox = styled(BasicButtonBox)`
  margin:24px 0;
`

const DetailReportInfo = ({data}) => {
  const navigate = useNavigate()
  const [isOnRestritModal,setIsOnREstrutModal] = useState(false);

  return (
    <IndexContainor>

      {/* 사용자 제재 기능 모달창 */}
      {isOnRestritModal ? <RestrictUserModal setter={setIsOnREstrutModal} /> : ''}
      
      <DetailReportInfoContanior>
        <ReportInfoBox>
          <ReportInfoGridBox>
            <h3>신고내용 :</h3>
            <p>{'성적인 내용'}</p>
            <h3>신고자 :</h3>
            <p>{'declarer123'}</p>
            <h3>신고일자 :</h3>
            <p>{'2022년 4월 5일'}</p>
    
          </ReportInfoGridBox>
        </ReportInfoBox>

        <PostInfoBox>
          <PostInfoGridBox>
            <h3>콘텐츠 제목 :</h3>
            <p>{'콘텐츠 제목'}</p>
            <h3>작성자 :</h3>
            <p>{'writer123'}</p>
            <h3>분류 :</h3>
            <p>{'커뮤니티 댓글'}</p>

          </PostInfoGridBox>

          <PostContentBox>
            <h3>내용 : </h3>
            <PostContent>{TestLongText}</PostContent>
          </PostContentBox>
          
        </PostInfoBox>
      </DetailReportInfoContanior>

      <ButtonBox>
        <SubButton width="120" height='36' fontSize="16" onClick={() => navigate(-1)}>뒤로</SubButton>
        <MainButton width="120" height='36' fontSize="16" onClick={()=>setIsOnREstrutModal(true)}>제제</MainButton>
        
      </ButtonBox>
    </IndexContainor>
  )
}
export default DetailReportInfo