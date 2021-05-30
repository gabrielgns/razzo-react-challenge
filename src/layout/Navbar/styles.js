import styled from 'styled-components';
import ProfilePicture from '../../assets/profilePicture.jpg';

export const NavContainer = styled.nav`
  background: #f7f9fc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const IconBg = styled.div`
  background: #fff;
  border-radius: 50%;
  height: 6vh;
  width: 2vw;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageIndicator = styled.div`
  color: #249cf2;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  margin-left: 10rem;
`;

export const LineIndicator = styled.div`
  width: 100%;
  height: 10%;
  background: #249cf2;
  position: absolute;
  margin-top: 1.2rem;
`;

export const UserPhoto = styled.div`
  background: url(${ProfilePicture}) no-repeat center;
  border-radius: 50%;
  height: 6vh;
  width: 2vw;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  margin-left: 1rem;
`;

export const NavSeparetor = styled.div`
  display: flex;
  align-items: center;
`;
