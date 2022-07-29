import { getHotDebateTopicListRequest } from '@store/hotDebateTopicList/hotDebateTopicList.actions'
import {React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {FitImgBox, StyledCategory, Title} from '../../styles/commonStyle'

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

const MainContent = styled.div`
  height: 200px;
  text-align : center;
  position:relative;
  ${FitImgBox} {
    width: 100%;
    height: 100%;
    position:absolute;
    left:0;
    top:0;
    z-index: 1;
  }
`

const ContentLine = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position:absolute;
  left:0;
  top:0;
  background-color: rgba(0,0,0,0.6);
  z-index: 2;
  color: white;

  h2{
    width: 100%;
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
  }

  span{
    font-size: 14px;
    text-align: right;
    padding: 6px;
  }
`

const Category = styled(StyledCategory)`
  width: 80px;
  font-size: 14px;
`

const SubContentBox = styled.div`
  display: flex;
  box-sizing:content-box;
  padding: 8px 0;
  height: 50px;
  border-bottom: solid 1px ${({theme}) => theme.colors.gray_3};
`

const SubjectSubContentBox = styled(SubContentBox)`
  ${FitImgBox}{
    width:50px;
  }
`
const ContentInfoBox = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px 0;
  margin-left: 8px;
  h3{

  }
  p{
    text-align: right;
    font-size: 14px;
    color: ${({theme})=> theme.colors.gray_1}
  }
`
const ProsConsSubContentBox = styled(SubContentBox)`
  flex-direction: column;
  justify-content: space-between;
  p{
    text-align: right;
    font-size: 14px;
    color: ${({theme})=> theme.colors.gray_1}
  }
  
  p:nth-child(1){color:#7291E6}
  p:nth-child(3){color:#E67292}
`

const VoteGauge = styled.div`
  position: relative;
  width:100%;
  height: 4px;
  background-color: #E67292;
  border-radius: 2px;
`
const BlueGauage = styled.div`
  width: ${({width})=>width + '%'};
  border-radius: 2px;
  position: absolute;
  height: 4px;
  left: 0;
  top:0;
  background-color: #7291E6;
`
const VoteInfoLine = styled.div`
  display: flex;
  justify-content: space-between;
`

export const MainDebateContent = () => {
  const dispatch = useDispatch()

  const hotDebateTopicList = useSelector(state=>state.hotDebateTopicList);

  const createMainContent = (data) => {
    return ( 
    <MainContent>
        <ContentLine>
          <Category>{data.category}</Category>
          <h2>{data.title}</h2>
          <span>의견 {'댓글 수'} 조회수 {data.hits} </span>
        </ContentLine>
        
        <FitImgBox><img src={data.imgUrl === 'default' ? '/img/default-thumbnail.png' : data.imgUrl } alt="" /></FitImgBox>
      </MainContent>
    )
  }

  useEffect(()=>{ 

    if(hotDebateTopicList.hotDebateTopicListData !== null) return
    dispatch( getHotDebateTopicListRequest() )
  })
  
  return (
    <MainDebate>
      <DebateContentBox>
        <Title align='center'>이슈토론</Title>
        {hotDebateTopicList.hotDebateTopicListData !== null && hotDebateTopicList.hotDebateTopicListData.subject.map((res,index)=>{
          if(index === 0) 
            return createMainContent(res)
          else return(
            <SubjectSubContentBox>
              <FitImgBox><img src={res.imgUrl === 'default' ? '/img/default-thumbnail.png' : res.imgUrl } alt="" /></FitImgBox>
              <ContentInfoBox>
                <h3>{res.title}</h3>
                <p>의견 수 {'댓글 수'} 추천수 {'추천수'}</p>
              </ContentInfoBox>
            </SubjectSubContentBox>
          )
        })}                
      </DebateContentBox>

      <DebateContentBox>
        <Title align='center'>찬반토론</Title>
        {hotDebateTopicList.hotDebateTopicListData !== null && hotDebateTopicList.hotDebateTopicListData.prosCons.map((res,index)=>{
          if(index === 0) 
            return createMainContent(res)
          else return(
            <ProsConsSubContentBox>
                <h3>{res.title}</h3>
            
                <VoteGauge><BlueGauage width='70'/></VoteGauge>

                <VoteInfoLine>
                  <p>찬성 {'찬성퍼센트'}</p>
                  <p>{'전체인원 수'} 참여</p>
                  <p>반대 {'반대퍼센트'}</p>
                </VoteInfoLine>
              
            </ProsConsSubContentBox>
          )
          
        })}                
      </DebateContentBox>

      <DebateContentBox>
        <Title align='center'>밸런스토론</Title>
        {hotDebateTopicList.hotDebateTopicListData !== null && hotDebateTopicList.hotDebateTopicListData.balance.map((res,index)=>{
          if(index === 0) 
            return createMainContent(res)
          else return(
            <ProsConsSubContentBox>
                <h3>{res.title}</h3>
            
                <VoteGauge><BlueGauage width='70'/></VoteGauge>

                <VoteInfoLine>
                  <p>1. {'1번 인원'}</p>
                  <p>{'전체인원 수'} 참여</p>
                  <p>2. {'2번 인원'}</p>
                </VoteInfoLine>
              
            </ProsConsSubContentBox>
          )
        })}                
      </DebateContentBox>

    </MainDebate>
  )
}
