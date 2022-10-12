import styled from "styled-components";

export const Pad =styled.div`
    margin:auto;
`

export const ReviewImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    margin: 5px;
    border: 15px double black; 
    background: white;
    object-fit: cover;

    @media only screen and (min-device-width: 320px) and (max-device-width: 424px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-width: 425px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-width: 550px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-width: 650px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-width: 768px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-width: 838px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-width: 950px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-width: 1024px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-width: 1200px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-width: 1350px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-width: 1440px){
        max-width: 80%;
        max-height: 80%;
        border: 5px solid black; 
        padding: 3px;
    }

    @media (min-width: 1920px){
        max-width: 90%;
        max-height: 90%;
        border: 5px solid black; 
        padding: 3px;
    }
`

export const Forward = styled.div`
    font-size: 80px;
    width: 80px;
    height: 80px;
    color: black;
    background: rgba(255,255,255,0.5);
    outline: 3px rgba(0,0,0,0.8) solid;
    postion: absolute;
    transform: translate(1175%, -650%);
    &:hover {
        cursor: pointer;
        color: white;
        outline: 3px rgba(255,255,255,0.8) solid;
        background: rgba(0,0,0,0.5);
    }

    @media (min-width: 320px){
        postion: absolute;
        transform: translate(240%, -225%);
    }

    @media (min-width: 375px){
        postion: absolute;
        transform: translate(293%, -225%);
    }

    @media (min-width: 425px){
        postion: absolute;
        transform: translate(0%, 0%);
    }

    @media (min-width: 550px){
        postion: absolute;
        transform: translate(0%, 0%);
    }

    @media (min-width: 650px){
        postion: absolute;
        transform: translate(0%, 0%);
    }

    @media (min-width: 768px){
        postion: absolute;
        transform: translate(0%, 0%);
    }

    @media (min-width: 838px){
        postion: absolute;
        transform: translate(0%, 0%);
    }

    @media (min-width: 950px){
        postion: absolute;
        transform: translate(0%, 0%);
    }

    @media (min-width: 1024px){
        postion: absolute;
        transform: translate(0%, 0%);
    }

    @media (min-width: 1200px){
        postion: absolute;
        transform: translate(0%, 0%);
    }

    @media (min-width: 1350px){
        postion: absolute;
        transform: translate(0%, 0%);
    }

    @media (min-width: 1440px){
        postion: absolute;
        transform: translate(1000%, -500%);
    }

    @media (min-width: 1920px){
        postion: absolute;
        transform: translate(0%, 0%);
    }
`

export const Backward = styled.div`
    font-size: 80px;
    width: 80px;
    height: 80px;
    color: black;
    background: rgba(255,255,255,0.5);
    outline: 3px rgba(0,0,0,0.8) solid;
    postion: fixed;
    transform: translate(50%, -550%);
    &:hover {
        cursor: pointer;
        color: white;
        outline: 3px rgba(255,255,255,0.8) solid;
        background: rgba(0,0,0,0.5);
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 424px){
        postion: absolute;
        transform: translate(20%, -125%);
    }

    @media (min-width: 425px){
        postion: absolute;
        transform: translate(20%, -125%);
    }

    @media (min-width: 550px){
        postion: absolute;
        transform: translate(0%, 0%);
    }

    @media (min-width: 650px){
        postion: absolute;
        transform: translate(0%, 0%);
    }

    @media (min-width: 768px){
        postion: absolute;
        transform: translate(0%, 0%);
    }

    @media (min-width: 838px){
        postion: absolute;
        transform: translate(0%, 0%);
    }

    @media (min-width: 950px){
        postion: absolute;
        transform: translate(0%, 0%);
    }

    @media (min-width: 1024px){
        postion: absolute;
        transform: translate(0%, 0%);
    }

    @media (min-width: 1200px){
        postion: absolute;
        transform: translate(0%, 0%);
    }

    @media (min-width: 1350px){
        postion: absolute;
        transform: translate(0%, 0%);
    }

    @media (min-width: 1440px){
        postion: absolute;
        transform: translate(100%, -400%);
    }

    @media (min-width: 1920px){
        postion: absolute;
        transform: translate(0%, 0%);
    }
`
