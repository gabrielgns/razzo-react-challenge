import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { NavContainer, Logo } from './styles';

const Navbar = () => (
  <NavContainer>
    <Logo>
      <BiShoppingBag />
    </Logo>
  </NavContainer>
);

export default Navbar;
