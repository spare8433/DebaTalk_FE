import styled from 'styled-components'

export const IndexContainor = styled.div`
  width: 100%;
  display: flex;
`

export const WriteReplyBox = styled.div`
`

export const TitleLine = styled.div`
  display: flex;
`

export const ContentLine = styled.div`
  padding-bottom: 10px;
  margin: 10px 0;
`
export const ReplyInputBox = styled.div`
  margin-left: 8px;
  padding-bottom:4px;
  border-bottom: solid 1px ${({theme})=> theme.colors.gray_2};
  input[text]{

  }
`
