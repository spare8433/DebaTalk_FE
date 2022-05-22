import { getPostAPI } from '@api/post'
import { ImgBox } from '@styles/commonStyle'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import dompurify from 'dompurify'

const InexContainor = styled.div`
  border-radius: 10px;
  background-color: white;
  border: ${({theme})=> theme.colors.gray_1};
  padding:20px 30px;
  border: ${({theme})=> theme.colors.gray_1} 1px solid;
`
const PostBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding:  16px 0;
  border-bottom: ${({theme})=> theme.colors.gray_3} 1px solid ;
`
  const InfoBox = styled.div`
    width: 980px;
    display: flex;
    flex-direction: column;
  `
    const TitleLine = styled.h3`
      font-size: 18px;
    `  
    const TextLine = styled.div`
      flex: 1;
      font-size: 14px;
      margin: 5px 0;
      p{
        height: 50px;
        line-height: 1.6;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        word-wrap: break-word;
        text-align: left;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    `
    const OtherInfoLine = styled.div`
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    `
      const ProfileItems = styled.div`
        display:flex;
        span{

        }
      `
      const RecentInfoItems = styled.div`
        display:flex;
        p, span{
          margin-right: 20px;
        }
        p {

        }
        span{

        }
      `

// Post 박스 끝


export const DebateTopicContentBox = () => {

  const [postContent,setPostContent] = useState(null);

  useEffect(() => {
    const sanitizer = dompurify.sanitize;

    const fetchContent = async () => {
      const querry = {
        limit:12,
        skip:12
      }
      
      //  검색 내용 반영해서 데이터 가져와야함 
      const { data } = await getPostAPI(querry);

      setPostContent(data.map((res,index)=>{
        return <PostBox>
          <InfoBox>
            <TitleLine>{res.title}</TitleLine>
            <TextLine dangerouslySetInnerHTML={ {__html: sanitizer(res.content)} }></TextLine>
            <OtherInfoLine>
              <ProfileItems>
                <span>{'level writer'}</span>
              </ProfileItems>

              <RecentInfoItems>
                <p>{res.createDate}</p>
                <span>{'추천수 '+res.likeList.length}</span>
                <span>{'조회수 '+res.hits}</span>
              </RecentInfoItems>
            </OtherInfoLine>

            
          </InfoBox>

          <ImgBox width='100'><img src={res.imgUrl === 'default' ? '/img/default-thumbnail.png' : res.imgUrl} alt='' /></ImgBox>
        </PostBox>
      }))
    }
    fetchContent()
  }, [])
  
  return (
    <InexContainor>
      {postContent !== null && postContent}
    </InexContainor>
  )
}
