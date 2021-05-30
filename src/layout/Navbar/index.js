import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import razzoLogo from '../../assets/razzoLogo.svg';
import {
  NavContainer,
  IconBg,
  PageIndicator,
  LineIndicator,
  UserPhoto,
  NavSeparetor,
} from './styles';

const Navbar = () => (
  <NavContainer>
    <NavSeparetor>
      <img src={razzoLogo} alt='Logo' />
      <PageIndicator>
        Dashboard
        <LineIndicator />
      </PageIndicator>
    </NavSeparetor>
    <NavSeparetor>
      <IconBg>
        <BiShoppingBag />
      </IconBg>
      <UserPhoto />
      <MdKeyboardArrowDown />
    </NavSeparetor>
  </NavContainer>
);

export default Navbar;
