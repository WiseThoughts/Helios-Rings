import styled from "styled-components";

export const ContactDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media only screen and (min-device-width: 320px) and (max-device-width: 424px){
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 425px){
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 768px){
        display: flex;
        flex-direction: row;
    }

    @media (min-width: 1440px){
        display: flex;
        flex-direction: row;
    }
`

export const FormDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 50%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 20%;
`

export const Name = styled.input`
    width: max-content;
    height: 40px;
    font-size: 20px;
    padding: 5px;
    margin: 3px;
    margin-bottom: 20px;
    background: white;
`

export const Email = styled.input`
    width: max-content;
    height: 40px;
    font-size: 20px;
    padding: 5px;
    margin: 3px;
    margin-bottom: 20px;
    background: white;
`

export const Message = styled.textarea`
    width: 100%;
    height: 400px;
    font-size: 20px;
    padding: 5px;
    margin: 3px;
    margin-bottom: 20px;
    background: white;
`

export const Label = styled.label`
    font-size: 30px;
    color: white;
`

export const Send = styled.input`
    width: fit-content;
    font-size: 35px;
    padding: 10px 15px;
    border: 5px solid black;
    &:hover{
        cursor: pointer;
        border: 5px solid white;
        color: white;
        background-color: black;
    }
`



export const ConatctOuter = styled.div`
    display: flex;
    justify-content: center;
    align-contact: center;
    width: 50%;
`

export const ContactBox = styled.div`
    background: rgba(0, 0, 0, 0.9);
    font-size: 35px;
    color: white;
    padding: 10px;
    width: 450px;
    height: min-content;
    border: 12px double white;
`