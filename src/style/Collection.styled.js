import styled from "styled-components";

export const Images = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
    max-width: 100%;
    justify-content: center;
`

export const MappedItems = styled.div`
    display: flex;
    flex-direction: column;
`

export const RImage = styled.img`
    width: 400px;
    object-fit: cover;
    border: 5px solid black;
    margin: 3px;
    &:hover{
        cursor: pointer;
        border: 5px solid red;
    }
`
