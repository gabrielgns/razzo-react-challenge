import React, { useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

import RazzoLogo from '../../assets/RazzoLogo.svg';
import {
  NavContainer,
  LogoContainer,
  LogoSvg,
  CurrentPage,
  NavText,
  SelectedPage,
  IconWrapper,
  UserPhoto,
  NavSeparetor,
} from './styles';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <NavContainer>
      <NavSeparetor>
        <LogoContainer href='/'>
          <LogoSvg src={RazzoLogo} />
        </LogoContainer>
        <GiHamburgerMenu onClick={handleClick} />
        <CurrentPage>
          <NavText onClick={closeMobileMenu}>Dashboard</NavText>
          <SelectedPage />
        </CurrentPage>
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
};

export default Navbar;
