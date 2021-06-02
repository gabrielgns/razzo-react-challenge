import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 25%;
  height: 4vh;
  border: 1px solid #e5e4e6;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const SearchName = styled.p`
  color: #d0c9d6;
`;
