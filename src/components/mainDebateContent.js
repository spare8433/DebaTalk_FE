import {React, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import {Title} from '../styles/commonStyle'

const MainDebate = styled.div`
  width:100%;
  display: grid;
  padding :50px 0px;
  grid-template-columns :repeat(3, 1fr);
  justify-items: center;
`
const DebateContentBox = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
`
// const Title = styled.div`
//     color:${({theme}) => theme.colors.main};  
//     border-bottom:solid 3px ${({theme}) => theme.colors.main};
//     text-align : ${({align})=> align};
//     font-weight: 600;
//     font-size: 18px;
//     margin-bottom: 10px;
// `

const MainContent = styled.div`
  height: 200px;
  border: solid 1px #000;
  text-align : center;
`

const SubContentBox = styled.div`
  height: 50px;
  border-bottom: solid 1px ${({theme}) => theme.colors.gray_3};
`

export const MainDebateContent = () => {
  const [contents,setContents] = useState('');

  const _subContents = useRef('')

  useEffect(()=>{ 
    //axios 데이터 요청 부분

    setContents(_subContents.current =       
        <DebateContentBox>
          <Title align='center'>주제토론</Title>
          {test01.content.map((content,index) =>{
            if(index === 0)
              return (
                <MainContent>
                  {/* 메인콘텐츠 */}
                  <h2>메인콘텐츠 부분 : {content.name}</h2>
                </MainContent>
              )
            else
              return (
                <SubContentBox>
                  {/* 서브콘텐츠 */}
                  <h2>{content.name}</h2>
                </SubContentBox>
              )
          })}                             
        </DebateContentBox>
    )
    
  },[]) 



  var test01 = { // 가상 게시물 
    category:'주제토론',
    content:[
      {name:'1-1'},{name:'1-2'},{name:'1-3'},{name:'1-4'}
    ]
  }

  
  return (
    <MainDebate>
      <DebateContentBox>
        {contents}                
      </DebateContentBox>

      <DebateContentBox>
        {contents}                
      </DebateContentBox>

      <DebateContentBox>
        {contents}                
      </DebateContentBox>

    </MainDebate>
  )
}
