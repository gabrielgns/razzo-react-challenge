import styled from 'styled-components';

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 266px;
  height: 274px;
  background: #ffffff;
  border: 1px solid #e5e4e6;
`;

export const GridContainer = styled.div`
  width: 70vw;
  padding-top: 50px;
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ContinueButton = styled.button`
  color: #73657e;
  width: 100%;
  height: 25px;
  padding: 2px;
  margin: 3px;
  border-radius: 1rem;
  background: #f2f5fa;
  border: none;
  border-radius: 7px;
`;

export const ConfirmButton = styled.button`
  color: #ffffff;
  width: 100%;
  height: 25px;
  padding: 2px;
  margin: 3px;
  border-radius: 1rem;
  background: #249cf2;
  border: none;
  border-radius: 7px;
`;

export const ShoppingCarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PagesLocation = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10px;
  margin-bottom: 20px;
`;

export const HomeText = styled.p`
  color: #8a8a8c;
`;

export const CurrentPageText = styled.p`
  color: #249cf2;
`;
