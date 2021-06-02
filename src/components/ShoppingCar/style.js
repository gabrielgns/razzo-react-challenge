import styled from 'styled-components';

export const ShoppingCarBg = styled.div`
  background: #f2f5fa;
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 20vw;

  @media only screen and (max-width: 1024px) {
    width: 90%;
    margin: 20px;
  }
`;
