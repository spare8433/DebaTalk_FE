import styled from 'styled-components'

export const IndexContainor = styled.div`
  width: 100%;
  display: flex;
`

export const ReplyBox = styled.div`
`

export const TitleLine = styled.div`
  display: flex;
`

export const ContentLine = styled.div`
  padding-bottom: 10px;
  margin: 10px 0;
  border-bottom: solid 1px ${({theme})=>theme.colors.gray_2};
`

export const OtherServiceLine = styled.div`
  
`

export const OtherButtonItems = styled.div`
  span {
    margin-right: 10px;
  }
`