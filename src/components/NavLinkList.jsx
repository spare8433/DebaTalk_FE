import { Containor } from '@styles/commonStyle'
import React, { memo } from 'react'
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
      font-weight: 500;
    }

    ${props => props.current ? css`
        color: ${({theme})=> theme.colors.main};
        font-weight: 500;` 
      : ''
    }
  }
  
`


const NavLinkList = ({width,onClick,children,value,category}) => {
  return (
    <NavContainor width={width}>
      {children.map((res,index)=>{ 
        return <Itmes key={category + 'Items' + index} current={value===res.props.value} onClick={()=>{
          onClick(res.props.value);
        }}>
          {res}
        </Itmes>
      })}
    </NavContainor>
  )
}
export default memo(NavLinkList)