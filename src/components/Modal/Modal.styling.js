import styled from "styled-components";


export const ModalBackground = styled.div`
  position: fixed;
  opacity: 0.6;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  width: 75%;
  min-height: 35vw;
  position: absolute;
  border: 0.3rem solid black;
  border-radius: 0.5rem;
  top: 17.5%;
  left: 10%;
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