import styled from 'styled-components'

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
        width: ${({width})=> width === '100%' ? '100%' : width +'px'};
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