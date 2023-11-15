import React from "react";
import { useState } from "react";
import {
  DropdownBurger,
  LinkCostumDesktop,
  Logo,
  MenuIcon,
  MenuIcons,
  NavContainerRuteDesktop,
  NavbarContainer,
  Title,
} from "./Navbar.style";

import Rute from "./RuteMobile";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import CustomShoppingCartIcon from "../navBarIcons/shoppingCartIcon";
import CustomAccountCircleIcon from "../navBarIcons/profileIcon";



function Navbar({ logo, rute}) {
  const quantity = useSelector(state=>state.cart.quantity)

  const [showDropdown, setShowDropdown] = useState(false);

  return (

    <NavbarContainer>
      <Logo src={logo} alt="Logo" />

      <Title>PharmaPlant</Title>

      {showDropdown && <Rute rute={rute} logo={logo} />}
    

      <NavContainerRuteDesktop>
        {rute?.map((ruta, index) => (
          
          <LinkCostumDesktop to={ruta.ruta} key={ruta + index}>
            {ruta.name}
          </LinkCostumDesktop>
        ))}
      </NavContainerRuteDesktop>
    <MenuIcons>
      <MenuIcon>
      <Link to='/logare'>
      <CustomAccountCircleIcon></CustomAccountCircleIcon>
      </Link>
      </MenuIcon>
     
      <MenuIcon>
      <Link to='/cart'>
        <Badge badgeContent={quantity} color="primary">
          <CustomShoppingCartIcon></CustomShoppingCartIcon>
   
      </Badge>
      </Link>
      </MenuIcon>
      </MenuIcons>
      <DropdownBurger onClick={() => setShowDropdown(!showDropdown)}>
        &#9776;
      </DropdownBurger>
    </NavbarContainer>
  );
}

export default Navbar;
