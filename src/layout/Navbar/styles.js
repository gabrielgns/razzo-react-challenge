import styled from 'styled-components';
import { BiShoppingBag } from 'react-icons/bi';

export const NavContainer = styled.nav`
  background: #f7f9fc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
`;

export const Logo = styled(BiShoppingBag)`
  width: 5vw;
  height: 5vh;
`;
