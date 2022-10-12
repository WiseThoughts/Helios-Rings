import styled from "styled-components";

export const Images = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
    max-width: 100%;
    justify-content: center;

    
    @media only screen and (min-device-width: 320px) and (max-device-width: 768px){
        width: auto;
    }

    @media (min-width: 769px){

    }

    @media (min-width: 1440px){

    }

    @media (min-width: 1920px){

    }
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

    @media only screen and (min-device-width: 320px) and (max-device-width: 424px){
        width: 300px;
    }

    @media (min-width: 425px){
        width: 370px;
    }

    @media (min-width: 550px){
        width: 440px;
    }

    @media (min-width: 650px){
        width: 285px;
    }

    @media (min-width: 768px){
        width: 345px;
    }

    @media (min-width: 838px){
        width: 250px;
    }

    @media (min-width: 950px){
        width: 290px;
    }

    @media (min-width: 1024px){
        width: 310px;
    }

    @media (min-width: 1200px){
        width: 370px;
    }

    @media (min-width: 1350px){
        width: 420px;
    }

    @media (min-width: 1440px){
        width: 325px;
    }

    @media (min-width: 1920px){
        width: 440px;
    }
`
