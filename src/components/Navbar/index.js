import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';

import RazzoLogo from '../../assets/RazzoLogo.svg';
import {
  NavContainer,
  LogoContainer,
  LogoSvg,
  PagesList,
  PageLink,
  NavText,
  SelectedPage,
  IconWrapper,
  UserPhoto,
  NavSeparetor
} from './styles';

const Navbar = () => (
  <NavContainer>
    <NavSeparetor>
      <LogoContainer href='/'>
        <LogoSvg src={RazzoLogo} />
      </LogoContainer>
      <PagesList>
        <PageLink>
          <NavText>Dashboard</NavText>
          <SelectedPage />
        </PageLink>
      </PagesList>
    </NavSeparetor>
    <NavSeparetor>
      <IconWrapper>
        <BiShoppingBag />
      </IconWrapper>
      <UserPhoto />
      <MdKeyboardArrowDown />
    </NavSeparetor>
  </NavContainer>
);
export default Navbar;
