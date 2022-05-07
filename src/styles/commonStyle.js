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
    width: auto;
    height: auto;    
    img{
        width: ${({width})=>checkWidth(width)};
        ${({shadow})=> shadow ? `filter: drop-shadow(0px 2px 8px rgb(99 99 99 / 30%))` : ''}
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


export const MainButton = styled.button`
  width: ${({width})=>checkWidth(width)};
  height: ${({height})=> height +'px'};
  background-color: ${({theme})=>theme.colors.main};
  color: white;
  border: 0;
  border-radius:5px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  font-size: ${({fontSize})=> fontSize +'px'};
  font-weight: 600;
  cursor: pointer;
`

export const SubButton = styled.button`
  width: ${({width})=>checkWidth(width)};
  height: ${({height})=> height +'px'};
  background-color: white;
  color: ${({theme})=>theme.colors.main};
  border: 1px solid ${({theme})=>theme.colors.gray_3};
  border-radius:5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  font-size: ${({fontSize})=> fontSize +'px'};
  font-weight: 600;
  cursor: pointer;
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