import { Link } from "react-router-dom";
import { Wrapper, NavbarItems, Logo, } from "../style/nav.styled";
import React from "react";
import "../style/nav.css";
import logo from "../images/wisethoughtslogo.png";


const Nav = () => {


    return (

    <Wrapper className="sizing">
        <Logo src={logo} />
        <Link className="navBarLinks" to="/"><NavbarItems>Home</NavbarItems></Link>
        <Link className="navBarLinks" to="/Collection"><NavbarItems>Collection</NavbarItems></Link>
        <Link className="navBarLinks" to="/Contact"><NavbarItems>Contact</NavbarItems></Link>
    </Wrapper>
);
};

export default Nav;

