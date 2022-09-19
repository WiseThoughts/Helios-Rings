import styled from "styled-components";

export const FormDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin-top: 50px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Name = styled.input`
    width: 200%;
    height: 40px;
    font-size: 30px;
    padding: 5px;
    margin: 3px;
    margin-left: 70%;
    margin-bottom: 20px;
`

export const Email = styled.input`
    width: 200%;
    height: 40px;
    font-size: 20px;
    padding: 5px;
    margin: 3px;
    margin-left: 70%;
    margin-bottom: 20px;
`

export const Message = styled.textarea`
    width: 200%;
    height: 400px;
    font-size: 20px;
    padding: 5px;
    margin: 3px;
    margin-left: 70%;
    margin-bottom: 20px;
`

export const Label = styled.label`
    font-size: 30px;
    margin-left: 70%;
`

export const Send = styled.input`
    width: fit-content;
    font-size: 30px;
    margin-left: 70%;
    padding: 5px 10px;
    border: 5px solid black;
    &:hover{
        cursor: pointer;
        border: 5px solid red;
    }
`

export const ContactDiv = styled.div`
    display: flex;
    flex-direction: row;
`

export const ConatctOuter = styled.div`
    position: fixed;
    border: 12px double black;
    width: min-content;
    height: min-content;
    right: 20%;
    top: 40%;
`

export const ContactBox = styled.div`
    background: rgba(0, 0, 0, 0.7);
    font-size: 25px;
    color: white;
    padding: 10px;
    width: 400px;
    height: min-content;
`