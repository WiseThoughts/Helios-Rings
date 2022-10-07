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
`

export const ModalImage = styled.img`
  width: 60%;
  object-fit: cover;
  border: 5px solid black;
  margin: 5px;
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`