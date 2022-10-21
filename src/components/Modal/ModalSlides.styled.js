import styled from "styled-components";

export const Pad =styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ModalImage = styled.img`
    max-width: 80%;
    max-height: 80%;
    margin: 5px;
    border: 15px double black; 
    background: white;
    object-fit: cover;

    @media only screen and (min-device-width: 1366px) and (max-device-height: 1024px) and (-webkit-min-device-pixel-ratio: 2)  and (orientation: landscape){
        max-width: 80%;
        max-height: 80%;
        border: 10px double black;
        margin: 0px;
    }


    @media only screen and (min-device-width: 320px) and (max-device-width: 424px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-device-width: 425px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-device-width: 550px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-device-width: 650px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-device-width: 768px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-device-width: 838px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-device-width: 950px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-device-width: 1024px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-device-width: 1200px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-device-width: 1350px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-device-width: 1440px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-device-width: 1920px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }
`

export const FBArrows = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    height: fit-content;
    justify-content: space-between;
`

export const Forward = styled.div`
    display: flex;
    text-align: right;
    font-size: 80px;
    width: min-content;
    height: min-content;
    align-content: center;
    color: black;
    background: rgba(255,255,255,0.5);
    border: 3px rgba(0,0,0,1) solid;
    &:hover {
        cursor: pointer;
        color: white;
        background: rgba(0,0,0,0.5);
    }
`

export const Backward = styled.div`
    display: flex;
    text-align: left;
    font-size: 80px;
    width: min-content;
    height: min-content;
    align-content: center;
    color: black;
    background: rgba(255,255,255,0.5);
    border: 3px rgba(0,0,0,1) solid;
    &:hover {
        cursor: pointer;
        color: white;
        background: rgba(0,0,0,0.5);
    }
`
