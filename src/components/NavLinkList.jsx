import { Containor } from '@styles/commonStyle'
import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

const NavContainor = styled(Containor)`
  display: flex;
  padding: 0 10px;
`
const Itmes = styled.div`
  a{
    cursor: pointer;
    &:hover,&:visited{
      color: ${({theme})=> theme.colors.main};
      font-weight: 600;
    }

    ${props => props.current ? css`
        color: ${({theme})=> theme.colors.main};
        font-weight: 600;` 
      : ''
    }
  }
  
`


export const NavLinkList = ({width,onClick,children,value,category}) => {

  console.log(children);
  
  return (
    <NavContainor width={width}>
      {children.map((res,index)=>{ 
        console.log(res.props.children === value);
        return <Itmes key={category + 'Items' + index} current={value===res.props.children} onClick={()=>{
          onClick(res.props.children);

        }}>
          {res}
        </Itmes>
      })}
    </NavContainor>
  )
}
