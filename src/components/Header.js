import React from "react";
import { styled } from "styled-components";

import colors from "../constants/colors";
import logo from "../images/Logo.png";

const HeaderContainer = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  margin-top: 10px;
`;

const Logo = styled.img`
  height: 65px;
  width: auto;
`;

const ListContainer = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 0;
  color: white;
  position: relative;
  padding: 6px 0;
  font-size: 18px;
  cursor: pointer;
  /* font-weight: 700; */

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${colors.theme};
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${colors.theme};
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src={logo} />
      <div>
        <ListContainer>
          <ListItem> Home </ListItem>
          <ListItem> About </ListItem>
          <ListItem> Skills </ListItem>
          <ListItem> Education </ListItem>
          <ListItem> Experience </ListItem>
          <ListItem> Contact </ListItem>
        </ListContainer>
      </div>
    </HeaderContainer>
  );
}
