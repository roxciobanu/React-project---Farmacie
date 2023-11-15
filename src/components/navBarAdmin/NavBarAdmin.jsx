
import React from "react";


import {

  Logo,

  NavbarContainer,

} from "./NavBarAdmin.style";
import { Link } from "react-router-dom";








function Navbar({ logo}) {
 
  return (

    <NavbarContainer>
      <Logo src={logo} alt="Logo" />

      <Link className="btn btn-success" to="/homepage">Deconectare</Link>

      
    </NavbarContainer>
  );
}

export default Navbar;
