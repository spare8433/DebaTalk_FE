import styled from 'styled-components'


export const Containor = styled.div`
  width: 100%;
  height: 100%;
  min-width:800px;
  position: relative;
`
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

export const LoginBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 20px;
  border: 1px solid ${({theme})=> theme.colors.gray_3};
  border-radius: 5px;
  background-color: ${({theme})=> theme.colors.background};
  h2{
    width: 350px;
    font-size: 22px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 30px;
  }
  p{
    color: ${({theme})=> theme.colors.gray_3};
    font-size: 14px;
    font-weight: 400;
    margin:16px 0;
  }
`
export const InputBox = styled.div`
  width: ${({width})=> width + 'px'};
  input{
    width: 100%;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    border-radius:5px;
    padding: 0;
    padding-left: 16px;
    margin-bottom: 20px;
    box-sizing: border-box;
    border: 1px solid ${({theme})=>theme.colors.gray_3};
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  }
`
export const MainButton = styled.button`
  width: ${({width})=> width === '100%' ? '100%' : width + 'px'};
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


export const Line = styled.div`
background-color: ${({theme})=>theme.colors.gray_3};
  height: ${({height})=> height +'px'};
  width: ${({width})=> width === '100%' ? '100%' : width + 'px'};
`

export const SubButton = styled.button`
  width: ${({width})=> width === '100%' ? '100%' : width + 'px'};
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

export const SubBox = styled.div`
  width : 350px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`