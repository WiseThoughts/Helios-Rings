import styled from "styled-components";


export const FormDiv = styled.div`
    display: flex;
    justify-content: center;
    position: absoulute;
    padding: 40px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    transform: translate(120%, 00%);

`

export const Name = styled.input`
    width: 200%;
    height: 40px;
    font-size: 20px;
    padding: 5px;
    margin: 3px;
    margin-bottom: 20px;
    background: white;
`

export const Email = styled.input`
    width: 200%;
    height: 40px;
    font-size: 20px;
    padding: 5px;
    margin: 3px;
    margin-bottom: 20px;
    background: white;
`

export const Message = styled.textarea`
    width: 200%;
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

export const ContactDiv = styled.div`
    display: flex;
    flex-direction: row;

`

export const ConatctOuter = styled.div`
    position: absoulute;
    border: 12px double black;
    width: max-content;
    height: max-content;
    transform: translate(150%, 60%);
`

export const ContactBox = styled.div`
    background: rgba(0, 0, 0, 0.9);
    font-size: 35px;
    color: white;
    padding: 10px;
    width: 450px;
    height: min-content;
`