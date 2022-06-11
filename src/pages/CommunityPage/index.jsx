import { Header } from '@components/Header'
import { CommunityCategoryMenus } from '@data/staticData'
import { BasicSearchBox, HeaderInfoBox, ImgBox } from '@styles/commonStyle';

import React, { useState } from 'react'

import { Routes, Route } from  'react-router-dom'; 
import CommunityCotentBox from './CommunityCotentBox'
import DetailCommunityPost from './DetailCommunityPost'
import { CommunityCategoryItem, CommunityPageContainor, ContentsContainor, HeaderBox, IndexContainor, InputItmes, MainBox, NavBox, PrColorLine, SelectBox, SelectLine, SubCategoryItem, SubCategoryList } from './style';

const CommunityPage = () => {

  const [communityCategory,setCommunityCategory] = useState('전체')
  const [subCategory,setSubCategory] = useState('createDate')
  return (
    <IndexContainor>
      <Header />  
      <CommunityPageContainor>
        <HeaderInfoBox>
          <p>
            토론보다는 가벼운 이야기들을 나눌 수 있는 <span>커뮤니티</span> 입니다 서로  에티켓을 지키며 이용해주세요<br></br>
            거래글, 광고글, 음란물, 비방, 욕설,  정치관련, 분쟁을 유발하는 게시물 등등 기타 부적절한 행동은 제제 대상이며 신고 부탁드립니다. <br></br></p>
            <PrColorLine height='2' width='250'></PrColorLine>
        </HeaderInfoBox>

        <ContentsContainor>
          <NavBox>
               
            <h3>카테고리</h3>
              <ul>
                {CommunityCategoryMenus.map(res => <CommunityCategoryItem 
                data-value={res} current={communityCategory === res} 
                onClick={(e)=>{setCommunityCategory(e.currentTarget.dataset.value);}}
                >{res}</CommunityCategoryItem>)}
              </ul>

            <h3>정보</h3>
              <ul>
                <CommunityCategoryItem
                  data-value='공지사항'
                  current={communityCategory === '공지사항'}
                  onClick={(e)=>{setCommunityCategory(e.currentTarget.dataset.value);}}
                >공지사항</CommunityCategoryItem>
              </ul>

            {/* CommunityCategoryMenus */}
          </NavBox>

          <MainBox>
            <Routes>    
            
              {/* 커뮤니티 루트 페이지 이자 게시물 리스트 부분 */}
              <Route path="/" element={<>
                <HeaderBox>
                  <h2>{communityCategory}</h2>

                  <SelectLine>
                    <SubCategoryList>
                      <SubCategoryItem current={subCategory === 'createDate'} onClick={()=>setSubCategory('createDate')} imgUrl='/img/clock'>
                        <span></span> {/* background 로 이미지 들어오는 부분 */}
                        <p>최신</p>
                      </SubCategoryItem>

                      <SubCategoryItem current={subCategory === 'likeList'} onClick={()=>setSubCategory('likeList')} imgUrl='/img/thumbs-up'>                        
                        <span></span> {/* background 로 이미지 들어오는 부분 */}
                        <p>추천</p>
                      </SubCategoryItem>

                      <SubCategoryItem current={subCategory === 'hits'} onClick={()=>setSubCategory('hits')} imgUrl='/img/fire'>                        
                        <span></span> {/* background 로 이미지 들어오는 부분 */}
                        <p>인기</p>
                      </SubCategoryItem>
                    </SubCategoryList>

                    <InputItmes>

                      <SelectBox>
                        <select>
                          <option value="제목">제목</option>
                          <option value="내용">내용</option>
                          <option value="제목 + 내용">제목 + 내용</option>
                        </select>
                      </SelectBox>

                      <BasicSearchBox>
                        <ImgBox><img alt='돋보기' src='./img/search.png'></img></ImgBox>
                        <input placeholder='검색'></input>
                      </BasicSearchBox>

                    </InputItmes>
                  </SelectLine>
                  
                </HeaderBox>

                {/* 실제 리스트 내용  */}
                <CommunityCotentBox category={communityCategory} subCategory={subCategory} />

              </> }></Route>

              {/* 커뮤니티 게시물 디테일 부분 */}
              <Route path="detail-communitypost" element={<DetailCommunityPost />} />
              
            </Routes>
          </MainBox>
          
        </ContentsContainor>

      </CommunityPageContainor>
    </IndexContainor>
  )
}

export default CommunityPage