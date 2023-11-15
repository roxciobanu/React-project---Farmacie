import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
  background: "#fffffff";
  font-size: 24px;
  font-weight: 500;
  position: relative;
  height: 60px;
  padding: 4px 24px;
`;

export const Logo = styled.img`
  height: 100%;
  border-radius: 50%;
  margin-left: 24px;
`;

export const MenuIcons = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: green;
`;

export const Badge = styled.div``;

export const MenuIcon = styled.div`
  font-size: 25px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color: inherit;
`;

export const Title = styled.h1`
  font-size: 1.2em;
  text-align: center;
  color: #005a00;
  margin-right: 56px;
`;

export const NavContainerRuteDesktop = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
`;

export const RuteMobile = styled.div`
  font-size: large;
  position: absolute;
  top: 60px;
  right: 0;
  background: #a19f9f;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;

  @media only screen and (min-width: 900px) {
    display: none;
  }
`;

export const LogoDrop = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: 50px auto auto auto;
  bottom: 0;
`;

export const LinkCostumMobile = styled(Link)`
  padding: 8px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  color: white;
  text-decoration: none;
`;

export const LinkCostumDesktop = styled(Link)`
  margin-left: 16px;
  color: #005a00;
  text-decoration: none;
  &:hover {
    background: rgb(187, 186, 185);
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const DropdownBurger = styled.button`
  width: 100px;
  height: 40px;
  color: rgb(0, 0, 0);
  background: transparent;
  padding: 8px;
  cursor: pointer;
  border: none;

  @media only screen and (min-width: 900px) {
    display: none;
  }
`;


