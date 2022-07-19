import { Containor } from '@styles/commonStyle'
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import DetailReportInfo from './DetailReportInfo'

const Title = styled.h1`
  font-size: 22px;
  padding: 8px;
  margin: 8px 0;
  border-bottom: 2px solid ${({theme}) => theme.colors.gray_3};
`

const ReportTable = styled.table`
  width: 100%;
  border-collapse: separate;
  margin: 16px 0;
  th,td {
    padding: 8px 0;
    border-spacing:1px;
  }

  th{
    background-color: ${({theme}) => theme.colors.main};
    color:white;
    border-bottom: 1px solid black;
    
  }
  tr{
    width: 100%;
  }
  td{
    box-sizing: border-box;
    text-align:center;
    border: 1px solid ${({theme}) => theme.colors.gray_3};
    p{
      padding-left: 8px;
      width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap
    }
    
  }
`

const ReportList = () => {
  const navigate = useNavigate()

  const testObj = [
    {
      contentType: "커뮤니티 댓글",      // 신고한 내용이 게시물인지 댓글, 답글 인지 ex) comment, reply, community-post, topic-post
      contentId : "624bc1796175813107b7ef2f",
      writer: "writer123",
      declarer: "declarer123",
      content: "부적절한 내용부적절한 내용부적절한 내용부적절한 내용부적절한 내용부적절한 내용부적절한 내용부적절한 내용",
      reportTypes: "성적인 내용",
      createDate: "2022년 4월 5일",
      id: "624c480198bd174b28ef930b"
    }
  ]

  return (
    <Containor width='800'>
      <Routes>
        <Route path="/" element={<>

          <Title>신고관리</Title>
          <ReportTable>
            <thead>
              <tr>
                <th width='100px'>콘텐츠 분류</th>
                <th width='200px'>콘텐츠 내용</th>
                <th width='100px'>작성자</th>
                <th width='100px'>신고자</th>
                <th width='180px'>신고 내용</th>
                <th width='120px'>신고 일자</th>
              </tr>
            </thead>
            
            <tbody>
              {/* 테이블내용 */}
              {testObj.map((res,index)=>{
                return <tr key={'reportRecord' + index} onClick={()=>navigate('./detail-report',{ state: { id:res.id}})}>
                  <td>{res.contentType}</td>
                  <td><p>{res.content}</p></td>
                  <td>{res.writer}</td>
                  <td>{res.declarer}</td>
                  <td>{res.reportTypes}</td>
                  <td>{res.createDate}</td>
                </tr>
              })}
            </tbody>
          </ReportTable>
        </>}></Route>

        <Route path="detail-report" element={<DetailReportInfo />} />
      </Routes>


    </Containor>
  )
}
export default ReportList