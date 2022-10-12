import styled from "styled-components";
import {Link} from 'react-router-dom';


export const FooterContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: black;
    padding: 30px;
    width: max-fit;
    position: absolute;
    z-index: 1;
    border-top: 3px solid white;

    @media (min-width: 320px){
        width: auto;
    }

    @media (min-width: 375px){
        width: auto;
    }

    @media (min-width: 450px){
        width: auto;
    }

    @media (min-width: 768px){
        width: 92%;
    }

    @media (min-width: 1024px){
        width: 94%;
    }

    @media (min-width: 1440px){
        width: 95.8%;
    }

    @media (min-width: 1920px){
        width: 96.87%;
    }
`

export const FooterLinksItems = styled.a`
    font-size: 25px;
    margin-right: 15px;
    color: white;
    padding: 0px 17px;

    @media (min-width: 320px){
        font-size: 20px;
    }

    @media (min-width: 450px){
        font-size: 20px;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 20px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color: white;
    text-decoration: none;
    padding-right: 10px; 
    margin-bottom: 0.5rem;
    font-size: 18px;
    &:hover {
        cursor: pointer;
    }
`

