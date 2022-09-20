import styled from "styled-components";

export const ReviewBackground = styled.div`
    background: rgba(0, 0, 0, 0.5);
    postion: relative;
    height: 600px;
    border: 5px solid black;
`

export const ReviewImage = styled.img`
    width: 30%;
    margin: 5px;
    border: 15px double black; 
    postion: relative;
    transform: translate(50%, 15%);
`
export const ReviewContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 750px;
    border: 15px double black; 
    postion: relative;
    transform: translate(120%, -150%);
    align-items: center;
`

export const Forward = styled.div`
    font-size: 100px;
    width: 50px;
    postion: relative;
    transform: translate(3500%, -450%);
    &:hover {
        cursor: pointer;
    }
`

export const Backward = styled.div`
    font-size: 100px;
    width: 50px;
    postion: relative;
    transform: translate(120%, -350%);
    &:hover {
        cursor: pointer;
    }
`

export const ReviewText = styled.h3`
    padding-top: 30px;
    font-size: 30px;
`

export const ReviewName = styled.h5`
    font-size: 20px;
`