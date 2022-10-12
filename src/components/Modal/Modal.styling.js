import styled from "styled-components";


export const ModalBackground = styled.div`
  position: fixed;
  opacity: 0.6;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: 5;
`

export const ModalBox = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  background: white;
  width: 85%;
  height: 85%;
  border: 0.3rem solid black;
  border-radius: 0.5rem;
  top: 10%;
  left: 7.25%;
  z-index: 10;

  @media only screen and (min-device-width: 320px) and (max-device-width: 425px){
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;
    border: 0.3rem solid black;
    border-radius: 0.35rem;
    top: 5%;
    left: 2.75%;
  }

  @media (min-width: 768px){
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 90%;
    border: 0.3rem solid black;
    border-radius: 0.5rem;
    top: 5%;
    left: 2%;
  }

  @media (min-width: 1024px){
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 85%;
    border: 0.3rem solid black;
    border-radius: 0.5rem;
    top: 7.5%;
    left: 2%;
  }

  @media (min-width: 1440px){
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 85%;
    border: 0.3rem solid black;
    border-radius: 0.5rem;
    top: 7.5%;
    left: 5%;
  }

  @media (min-width: 1920px){
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 85%;
    height: 85%;
    border: 0.3rem solid black;
    border-radius: 0.5rem;
    top: 7.5%;
    left: 7.5%;
  }
`

export const ModalButtons = styled.button`
  justify-content: center;
  height: 2rem;
  font-size: 15px;
  display: inline-block;
  background: black;
  border: none;
  color: white;
  font-weight: bold;
  width: 10rem;
  gap: 10px;
  margin: 3px;
  &:hover{
    cursor: pointer;
    color: red;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 424px){

  }

  @media (min-width: 425px){

  }

  @media (min-width: 550px){

  }

  @media (min-width: 650px){

  }

  @media (min-width: 768px){

  }

  @media (min-width: 838px){

  }

  @media (min-width: 950px){

  }

  @media (min-width: 1024px){

  }

  @media (min-width: 1200px){

  }

  @media (min-width: 1350px){

  }

  @media (min-width: 1440px){

  }

  @media (min-width: 1920px){

  }
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-device-width: 320px) and (max-device-width: 424px){

  }

  @media (min-width: 425px){

  }

  @media (min-width: 550px){

  }

  @media (min-width: 650px){

  }

  @media (min-width: 768px){

  }

  @media (min-width: 838px){

  }

  @media (min-width: 950px){

  }

  @media (min-width: 1024px){

  }

  @media (min-width: 1200px){

  }

  @media (min-width: 1350px){

  }

  @media (min-width: 1440px){

  }

  @media (min-width: 1920px){

  }
`