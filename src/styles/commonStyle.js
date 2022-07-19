import styled from 'styled-components'

const checkWidth = (width) => {
  if(width === '' || width === undefined) 
    return 'auto';
  if(String(width).indexOf('%') > 0)
    return width;
  else
    return width + 'px';
}

export const Containor = styled.div`
  width: 100%;
  height: 100%;
  min-width:${({width})=>checkWidth(width)};
  position: relative;
  box-sizing: border-box;
`

export const Title = styled.div`
  color:${({theme}) => theme.colors.main};  
  border-bottom:solid 3px ${({theme}) => theme.colors.main};
  text-align : ${({align})=> align};
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
`

export const TitleBox=styled.div`
  color: black;
  font-size:32px;
  width: fit-content ;
  padding: 0 50px 10px;
  font-weight: 500;
  margin: 20px auto ;
  border-bottom: 4px solid ${({theme})=>theme.colors.main};
`

export const ImgBox = styled.div`
  width: ${({width})=>checkWidth(width)};
  height: auto;    
  img{
    width: 100%;
    ${({shadow})=> {return shadow ? 'filter: drop-shadow(0px 2px 8px rgb(99 99 99 / 30%))' : ''}}
  }
`

export const FitImgBox = styled(ImgBox)`
  height:${({height})=>checkWidth(height)};
  img{
    width: 100%;
    height: 100%;
    object-fit:cover;
  }
`

export const HeaderInfoBox=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  font-size: 16px;
  text-align: center;
  margin: 10px 0;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  p{
    font-weight: 400;
    line-height: 1.8;
    padding: 10px 0 20px;
    span{
      margin: 0 5px;
      font-size: 22px;
      color:${({theme})=> theme.colors.main};
      font-weight: 600;
    }
  }
`

export const ThumbnailImgBox = styled(ImgBox)`
  height:${({height})=>checkWidth(height)};
  overflow:hidden;
  img{
    width: 100%;
    height: 100%;
    object-fit:cover;
  }
`

export const CircleImgBox = styled(ThumbnailImgBox)`
  height:${({width})=>checkWidth(width)};
  border-radius: 70%;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
`

export const StyledCategory = styled.div`
  background-color: ${({theme})=> theme.colors.main};
  color:white;
  padding: 8px;
  margin-right: 16px;
`

export const BasicSearchBox = styled.div`
  background-color: white;
  width: 280px;
  box-sizing: border-box;
  border: ${({theme})=> theme.colors.gray_2} 1px solid;
  border-radius:5px;
  display: flex;
  align-items: center;
  height: 32px;
  ${ImgBox} {
    /* margin: 0 8px; */
    margin-left: 10px;
  }
  input{
    color: ${({theme})=> theme.colors.gray_1};
    width: 100%;
    border: 0;
    padding: 0;
    margin: 0 12px;
    outline: none;
    height: 100%;
    background: none;
    font-size: 16px;
    font-weight: 400;
  }
`

export const BasicSelectBox = styled.div`
  display: flex;
  align-items: center;
  select{
    border: ${({theme})=> theme.colors.gray_2} 1px solid;
    border-radius: 3px;
    padding: 4px 8px;
    color:${({theme})=> theme.colors.gray_1};
    font-weight: 400;
    outline: none;
  } 
`

export const CarouselButton = styled.div`
  position: absolute;
  top:50%;
  transform: translate(0, -50%);
  z-index: 2;
  width: auto;
  height: auto;
  &.prev{
    left: 0;
  }
  &.next{
    right: 0;
  }
`

export const BasicButton = styled.button`
  width: ${({width})=>checkWidth(width)};
  height: ${({height})=> height +'px'};
  font-size: ${({fontSize})=> fontSize +'px'};
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  border-radius:5px;
  font-weight: 600;
  cursor: pointer;
`

export const MainButton = styled(BasicButton)`
  background-color: ${({theme})=>theme.colors.main};
  color: white;
  border: 0;
`

export const SubButton = styled(BasicButton)`
  background-color: white;
  color: ${({theme})=>theme.colors.main};
  border: 1px solid ${({theme})=>theme.colors.gray_3};
`
export const LightGrayButton = styled(BasicButton)`
  background-color: white;
  color: ${({theme})=> theme.colors.gray_1};
  border: 1px solid ${({theme})=> theme.colors.gray_1};
`

export const BasicButtonBox = styled.div`
  width: ${({width})=>checkWidth(width)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${MainButton},${SubButton}{
    margin-left: 10px;
  }
`

export const Line = styled.div`
  background-color: ${({theme})=>theme.colors.gray_3};
  height: ${({height})=> height +'px'};
  width: ${({width})=>checkWidth(width)};
`

export const InputBox = styled.div`
  box-sizing: border-box;
  width: ${({width})=>checkWidth(width)};
  
  ${({cssStyle})=> cssStyle}

  input,select{
    width: 100%;
    height: ${({height})=> height === '' ? 'inherit' : height +'px'};
    font-size: 16px;
    font-weight: 500;
    outline: none;
    border-radius:5px;
    padding: 0;
    padding-left: 16px;
    margin: 0 0 5px;
    box-sizing: border-box;
    border: 1px solid ${({theme})=>theme.colors.gray_3};
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  }
  span{
    color: ${({theme})=>theme.colors.gray_3};
    margin-left :10px;
    font-size: 13px;
    font-weight:300;
  }
`
