import { ReportCategory } from '@data/staticData'
import { BasicButtonBox, MainButton, SubButton } from '@styles/commonStyle'
import React, { useState } from 'react'
import styled from 'styled-components'

const IndexContainor = styled.div`
  width: 100%;
`
const ReportModalBox = styled.div`

`
const BackBord = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 50%;
  z-index: 2000;
`
const ReportForm = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 450px;
  height: 450px;
  padding: 20px 0;
  z-index: 2001;
`

const CategoryTitleBox = styled.div`
  font-size: 18px;
  padding:0 16px 16px;
  border-bottom: #b2bec3 2px solid;
`

const CategoryListBox = styled.div`
  display: flex;
  flex-direction: column;
  margin:0 24px;
`

  const CategoryItem = styled.label`
  font-weight: 400;
  cursor: pointer;
  padding: 8px 0;
  margin: 8px 0;
    input {
      margin-right : 10px;
    }
  `
const ButtonBox = styled(BasicButtonBox)`
  margin:0 24px;
`
const ReportModal = ({setter,option}) => {
  const [reportCategory,setReportCategory] = useState('')

  return (
    <IndexContainor>
      
      <ReportModalBox>

        <BackBord></BackBord>
        <ReportForm>
          <CategoryTitleBox>
            {option.contentType + ' 신고하기'}
          </CategoryTitleBox>

          <CategoryListBox>
            {ReportCategory.map((res,index) => {
              return <CategoryItem key={'reportCategoryItem'+index}>
                <input type='radio' name={'reportCategory'+index} value={res} checked={reportCategory === res} onClick={(e)=>{console.log(e.currentTarget);setReportCategory(e.currentTarget.value)}}></input>
                {res}
              </CategoryItem>
            })}
          </CategoryListBox>
          

          <ButtonBox>
            <SubButton width='100' height='30' fontsize='16' onClick={()=>setter({turnOn:false, contentType:''})}>취소</SubButton>
            <MainButton width='100' height='30' fontsize='16'>확인</MainButton>
          </ButtonBox>
          
        </ReportForm>

      </ReportModalBox>
      
    </IndexContainor>
  )
}
export default ReportModal