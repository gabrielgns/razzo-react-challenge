import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import ProfilePicture from '../../assets/ProfilePicture.jpg';

export const NavContainer = styled.nav`
  background: #f7f9fc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding-left: 2rem;
  padding-right: 2rem;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LogoContainer = styled.a`
  cursor: pointer;
  display: flex;
`;

export const LogoSvg = styled.img`
  width: 100px;
`;

export const HamburguerMenu = styled(GiHamburgerMenu)`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const CurrentPage = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: #249cf2;
  font-weight: bold;
  position: relative;
  margin-left: 10rem;
  cursor: pointer;
`;

export const NavText = styled.p`
  padding-top: 20%;
  font-size: 12px;
`;

export const SelectedPage = styled.div`
  width: 100%;
  height: 3%;
  background: #249cf2;
`;

export const IconWrapper = styled.div`
  background: #fff;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserPhoto = styled.div`
  background: url(${ProfilePicture}) no-repeat center;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  margin-left: 1rem;
`;

export const NavSeparetor = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
