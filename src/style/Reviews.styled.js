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
    transform: translate(40%, 5%);
    background: white;
`
export const ReviewContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 750px;
    border: 15px double black; 
    postion: relative;
    transform: translate(115%, -102%);
    align-items: center;
    text-align: center;
    background: white;
`

export const Forward = styled.div`
    font-size: 100px;
    width: 50px;
    postion: relative;
    transform: translate(3500%, -650%);
    &:hover {
        cursor: pointer;
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
`

export const ReviewHeader = styled.h2`
    display: felx;
    font-size: 45px;
    justify-content: center;
    padding: 15px 0px 0px 0px;
`

export const ReviewText = styled.h3`
    padding: 30px 20px 5px 20px;
    font-size: 45px;
`

export const ReviewName = styled.h5`
    font-size: 25px;
    padding: 0px 0px 25px 0px;
`

export const ReviewDirect = styled.h5`
    text-align: center;
    padding: 5px 0px 5px 0px;
    font-size: 20px;
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
