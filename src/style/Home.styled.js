import styled from "styled-components";


export const Splitimg = styled.img`
    height: 800px;
    width: 90%;
    margin: 5px;
    border: 15px double black; 
    object-fit: cover;

    @media (max-width: 320px){
        height: fit-content;
        margin: 0px;
        border: 8px double black;
    }
`

export const SplitPage = styled.div`
    display: flex;

    @media (max-width: 320px){
        display: block;
        display: flex;
        flex-direction: column-reverse;
    }
`

export const LeftSide = styled.div`
    width: 50%;

    @media (max-width: 320px){
        width: 100%;
        text-align: center;
        padding-bottom: 20px;
    }
`

export const RightSide = styled.div`
    width: 50%;
    text-align: center;
    padding-top: 270px;

    @media (max-width: 320px){
        width: 100%;
        margin: 0px;
        padding-top: 10px;
        padding-bottom: 20px;
    }
`

export const HomeHeader = styled.h1`
    text-align: center;
    padding: 0px 0px 25px 0px;
    font-size: 65px;

    @media (max-width: 320px){
        font-size: 45px;
        padding: 0px 0px 10px 0px;
    }
`

export const HomeSubHeader = styled.h2`
    text-align: center;
    padding: 0px 0px 25px 0px;
    font-size: 35px;
    text-decoration: underline;

    @media (max-width: 320px){
        font-size: 25px;
        margin: 0px 20px;
        padding: 0px 0px 10px 0px;
    }
`

export const HomeDirect = styled.h5`
    text-align: center;
    padding: 10px 0px 10px 0px;
    font-size: 25px;

    @media (max-width: 320px){
        font-size: 20px;
        padding: 10px 10px 10px 10px;
    }
`

export const HomeButtons = styled.button`
    text-align: center;
    padding: 10px;
    font-size: 24px;
    background-color: black;
    color: white;
    border: 8px double white;

    @media (max-width: 320px){
        font-size: 20px;
        padding: 5px;
        border: 5px double white;
    }
`
