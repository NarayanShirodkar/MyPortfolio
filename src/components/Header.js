import React from "react";
import { styled } from "styled-components";

import logo from "../images/Logo.png";

const HeaderContainer = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  margin: 10px 30px;
`;

const Logo = styled.img`
  height: 100px;
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
  font-weight: 700;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: white;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.4s ease;
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
