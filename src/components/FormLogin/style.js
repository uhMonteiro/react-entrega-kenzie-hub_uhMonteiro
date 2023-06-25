import styled from "styled-components";


export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey-3);
    padding-top: 42px;
    padding-left: 22px;
    padding-right: 22px;
    padding-bottom: 42px;
    gap: 22px;
    margin-top: 40px;
    border-radius: 4px;
`

export const H1StyleLogin = styled.h1`
    color: var(--color-grey-0);
    font-weight: 700;
    font-size: 1.8rem;
    align-self: center;
    line-height: 28px;
`

export const LabelStyle = styled.label`
    font-weight: 400;
    font-size: 1.28rem;
    color: var(--color-grey-0);
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const InputStyle = styled.input`
height: 20px;
border: 1px solid var(--color-grey-0);
border-radius: 4px;
padding-left: 16px;
padding-right: 16px;
display: flex;
align-items: center;
justify-content: center;
background-color: var(--color-grey-2);
color: var(--color-grey-0);

::placeholder{
    font-weight: 400;
    font-size: 1.6rem;
    align-self: center;
    color: var(--color-grey-0);
}
`

export const ButtonEnterStyle = styled.button`
   width: 100%;
   height: 30px;
   background-color: var(--color-color-primary);
   border-radius: 4px;
   border: none;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 500;
   font-size: 1.6rem;
   color: white;

   :hover{
    background-color: var(--color-color-primary-50);
   }
`

export const ButtonRegisterStyle = styled.button`

`