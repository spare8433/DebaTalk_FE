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
`

export const ImgBox = styled.div`
  width: ${({width})=>checkWidth(width)};
  height: auto;    
  img{
    width: 100%;
      ${({shadow})=> shadow ? `filter: drop-shadow(0px 2px 8px rgb(99 99 99 / 30%))` : ''}
  }
`

export const CircleImgBox = styled(ImgBox)`
  width:${({width})=>checkWidth(width)};
  height:${({width})=>checkWidth(width)};
  border-radius: 70%;
  overflow:hidden;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  img{
    width: 100%;
    height: 100%;
    object-fit:cover;
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
  cursor: pointer;
`

export const MainButton = styled(BasicButton)`
  background-color: ${({theme})=>theme.colors.main};
  color: white;
  border: 0;
  font-weight: 600;
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