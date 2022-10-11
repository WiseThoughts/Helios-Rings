import styled from "styled-components";

export const ReviewBackground = styled.div`
    background: rgba(0, 0, 0, 0.5);
    postion: relative;
    height: 700px;
    border: 3px solid black;

    @media (max-width: 320px){
    height: 775px;
    }

    @media (max-width: 450px){
    height: 900px;
    }
`

export const ReviewImage = styled.img`
    width: 40%;
    margin: 5px;
    border: 15px double black; 
    postion: relative;
    transform: translate(20%, 0%);
    background: white;

    @media (max-width: 320px){
        width: 80%;
        margin: 0;
        transform: translate(5%, 215%);
    }

    @media (max-width: 450px){
        width: 90%;
        margin: 0;
        transform: translate(1.5%, 157%);
    }
`

export const ReviewContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 750px;
    height: 430px;
    border: 15px double black; 
    postion: relative;
    transform: translate(125%, -115%);
    align-items: center;
    text-align: center;
    background: white;

    @media (max-width: 320px){
        width:251px;
        transform: translate(5%, -48%);
    }

    @media (max-width: 450px){
        width:350px;
        transform: translate(5%, -65%);
    }
`

export const Forward = styled.div`
    font-size: 100px;
    width: 50px;
    postion: relative;
    transform: translate(3500%, -650%);
    &:hover {
        cursor: pointer;
    }

    @media (max-width: 320px){
        transform: translate(390%, -485%);
        width: min-content;
        font-size: 60px;
    }

    @media (max-width: 450px){
        transform: translate(470%, -535%);
        width: min-content;
        font-size: 70px;
    }
`

export const Backward = styled.div`
    font-size: 100px;
    width: 50px;
    postion: relative;
    transform: translate(120%, -550%);
    &:hover {
        cursor: pointer;
    }

    @media (max-width: 320px){
        transform: translate(25%, -385%);
        width: min-content;
        font-size: 60px;
    }

    @media (max-width: 450px){
        transform: translate(25%, -435%);
        width: min-content;
        font-size: 70px;
    }
`

export const ReviewHeader = styled.h2`
    display: felx;
    font-size: 45px;
    justify-content: center;
    padding: 15px 0px 0px 0px;

    @media (max-width: 320px){
        display: flex;
        text-align: center;
        font-size: 30px;
        outline: 1px solid white;
        margin: 5px;
        padding: 0px;
    }

    @media (max-width: 450px){
        display: flex;
        text-align: center;
        font-size: 30px;
        outline: 1px solid white;
        margin: 5px;
        padding: 0px;
    }
`

export const ReviewText = styled.h3`
    padding: 30px 20px 5px 20px;
    font-size: 45px;

    @media (max-width: 320px){
        font-size: 25px;
    }

    @media (max-width: 450px){
        font-size: 25px;
    }
`

export const ReviewName = styled.h5`
    font-size: 25px;
    padding: 0px 0px 25px 0px;

    @media (max-width: 320px){
        font-size: 20px;
    }

    @media (max-width: 450px){
        font-size: 20px;
    }
`

export const ReviewDirect = styled.h5`
    text-align: center;
    padding: 5px 0px 5px 0px;
    font-size: 20px;

    @media (max-width: 320px){
        font-size: 15px;
    }

    @media (max-width: 450px){
        font-size: 15px;
    }
`

export const ReviewButtons = styled.button`
    text-align: center;
    padding: 10px;
    font-size: 15px;
    background-color: black;
    color: white;
    border: 8px double white;
    margin: 5px;
`
