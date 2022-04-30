import React, { useState } from 'react'
import styled from 'styled-components'
import { ImgBox } from '../styles/commonStyle'

const SlideMenuBox = styled.div`
  h3{
    font-size: 18px;
  }
  
`

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding:14px 30px;
`

const MenuListBox = styled.div`
  transition: 0.3s all linear;
`

const SlideButton = styled.div`

`

export const SlideMenu = ({title,width,children}) => {

  const [visible,setVisible] = useState(false);

  return(
    <SlideMenuBox>
      <TitleBox onClick={() => setVisible(!visible)}>
        {title}
        <SlideButton><ImgBox width='24'><img alt='slide-icon' src={visible ? '/img/slideUp_white.png' : '/img/slideDown_white.png'}></img></ImgBox></SlideButton>
      </TitleBox>
      
      {/* <SlideButton type='image' src={visible ? './img/slideDown.png' : './img/slideUp.png'}></SlideButton> */}
      {/* <h3 onClick={() => setVisible(!visible)}>{title}</h3> */}

      <MenuListBox>
        {visible ? children : ''}
      </MenuListBox>
      
    </SlideMenuBox>
  )
}
