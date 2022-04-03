import styled from 'styled-components'

export const Title = styled.div`
    color:${({theme}) => theme.colors.main};  
    border-bottom:solid 3px ${({theme}) => theme.colors.main};
    text-align : ${({align})=> align};
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
`