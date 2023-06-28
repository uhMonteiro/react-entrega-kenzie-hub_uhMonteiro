import styled from "styled-components";

export const DivTechStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const H2Style = styled.h2`
   font-weight: 600;
   font-size: 1.6rem;
   color: var(--color-grey-0);
`

export const ImgStyle = styled.figure`
    background-color: var(--color-grey-3);
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover{
        cursor: pointer;
    }
`