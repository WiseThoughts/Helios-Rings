import styled from "styled-components";

export const FormDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin-top: 80px;
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