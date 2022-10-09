import styled from "styled-components";


export const Splitimg = styled.img`
    height: 800px;
    width: 90%;
    margin: 5px;
    border: 15px double black; 
    object-fit: cover;

    @media (max-width: 320px){

    }
`

export const SplitPage = styled.div`
    display: flex;

    @media (max-width: 320px){
        display: block;
    }
`

export const LeftSide = styled.div`
    width: 50%;

    @media (max-width: 320px){

    }
`

export const RightSide = styled.div`
    width: 50%;
    text-align: center;
    padding-top: 270px;
`

export const HomeHeader = styled.h1`
    text-align: center;
    padding: 0px 0px 25px 0px;
    font-size: 65px;
`

export const HomeSubHeader = styled.h2`
    text-align: center;
    padding: 0px 0px 25px 0px;
    font-size: 35px;
    text-decoration: underline;


`

export const HomeDirect = styled.h5`
    text-align: center;
    padding: 10px 0px 10px 0px;
    font-size: 25px;
`

export const HomeButtons = styled.button`
    text-align: center;
    padding: 10px;
    font-size: 24px;
    background-color: black;
    color: white;
    border: 8px double white;
`
