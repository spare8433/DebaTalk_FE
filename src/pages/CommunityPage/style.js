import styled from 'styled-components'
import { ImgBox, BasicSelectBox, Line } from '@styles/commonStyle'
import { css } from 'styled-components'

export const IndexContainor = styled.div`
  width: 100%;
`
export const CommunityPageContainor = styled.div`
  width:1160px;
  margin: 0 auto;
`
export const ContentsContainor = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const NavBox = styled.div`
  border-radius: 8px;
  background-color:white;
  width: 280px;
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  h3{
    font-size: 18px;
    font-weight: 500;
    border-bottom: 2px solid ${({theme})=> theme.colors.gray_3};
    padding: 0 10px 8px;
    padding-bottom: 8px;
  }
  li{
   
  }
`

export const CommunityCategoryItem = styled.li`
   box-sizing: border-box;
  font-size:16px;
  font-weight: 400;
  border-radius: 5px;
  width: 90%;
  padding: 8px 16px;
  margin: 5px auto 14px;
  cursor: pointer;
  &:hover{
    background-color: ${({theme})=> theme.colors.background};
    color: ${({theme})=> theme.colors.main};
    font-weight: 600;
  }
  
  ${ props => props.current ? css`
    background-color: ${({theme})=> theme.colors.background};
    color: ${({theme})=> theme.colors.main};
    font-weight: 600; ` : ''
  }
`

export const PrColorLine = styled(Line)`
  background-color: ${({theme})=> theme.colors.main};
`


export const MainBox = styled.div`
  width: 860px;
`
export const HeaderBox = styled.div`
  width: 100%;
  background-color: white;
  padding:20px 20px 16px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  border-radius: 8px;
  margin-bottom: 10px;
  h2{
    font-size: 22px;
    font-weight:500;
  }

`
  export const SelectLine = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 16px;
  `
    export const SubCategoryList = styled.ul`
      display:flex;
      font-size: 18px;
      li{
        
      }
    `
      export const SubCategoryItem = styled.li`
        display: flex;
        align-items: fle;
        margin: 0 16px;

        &:hover{
          p {
            color: ${({theme})=> theme.colors.main};
            font-weight: 600;
          }
          span{
            background-image: url(${props => props.imgUrl + '_main-color.png'})
          }
        }
        
        p{
          color : ${({theme})=>theme.colors.gray_1};
          padding: 0 10px;

          ${ props => props.current ? css`
            color: ${({theme})=> theme.colors.main};
            font-weight: 600; ` : ''
          }
        }
        span{
          background-size:cover;
          width: 24px;
          height: 24px;
          ${ props => props.current ? css`
            background-image: url(${props.imgUrl + '_main-color.png'})
            ` : css`
            background-image: url(${props.imgUrl + '_gray.png'})
            `
          }
        }
      `
    

    export const InputItmes = styled.div`
      display: flex;
    `

      export const SelectBox = styled(BasicSelectBox)`
        margin-right:10px;
      `