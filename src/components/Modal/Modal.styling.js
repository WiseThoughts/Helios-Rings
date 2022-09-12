import styled from "styled-components";


export const ModalBackground = styled.div`
  position: absolute;
  opacity: 0.6;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
`;

export const ModalBox = styled.div`
  background: white;
  width: 75%;
  min-height: 35vw;
  position: absolute;
  border: 0.3rem solid black;
  border-radius: 0.5rem;
  top: 17.5%;
  left: 10%;
`;

export const CloseButton = styled.button`
  height: 2rem;
  display: inline-block;
  background: black;
  border: none;
  color: white;
  font-weight: bold;
  width: 10rem;
  gap: 10px;
  &:hover{
    cursor: pointer;
  }
`

export const ModalImage = styled.img`
  width: 400px;
  object-fit: cover;
  border: 5px solid black;
  margin: 3px;
  &:hover{
    border: 5px solid red;
  }
`
