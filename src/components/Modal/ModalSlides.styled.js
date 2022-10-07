import styled from "styled-components";

export const ReviewImage = styled.img`
    width: 71.75%;
    margin: 5px;
    border: 15px double black; 
    background: white;
`

export const Forward = styled.div`
    font-size: 80px;
    width: 80px;
    height: 80px;
    color: black;
    background: rgba(255,255,255,0.5);
    outline: 3px rgba(0,0,0,0.8) solid;
    postion: relative;
    transform: translate(1175%, -650%);
    &:hover {
        cursor: pointer;
        color: white;
        outline: 3px rgba(255,255,255,0.8) solid;
        background: rgba(0,0,0,0.5);
    }
`

export const Backward = styled.div`
font-size: 80px;
width: 80px;
height: 80px;
color: black;
background: rgba(255,255,255,0.5);
outline: 3px rgba(0,0,0,0.8) solid;
postion: relative;
transform: translate(50%, -550%);
&:hover {
    cursor: pointer;
    color: white;
    outline: 3px rgba(255,255,255,0.8) solid;
    background: rgba(0,0,0,0.5);
}
`
