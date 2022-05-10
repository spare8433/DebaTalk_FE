import styled from 'styled-components'

export const LoginContainor = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* border: 8px solid ${({theme})=> theme.colors.gray_2}; */
  border-left: 0;
  border-right: 0;
  padding: 16px 20px;
`

export const LogoBox = styled.div`
  text-align: center;
`

export const SubBox = styled.div`
  width : 350px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`