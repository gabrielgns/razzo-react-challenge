import styled from 'styled-components';

export const BusinessContainer = styled.div`
  border: 1px solid #e5e4e6;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 1rem;
  width: 290px;
  height: 99px;
`;

export const BusinessText = styled.p`
  font-size: 12px;
`;

export const BusinessLogo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 1rem;
  margin-left: 1rem;
`;

export const BusinessName = styled.div`
  align-self: flex-start;
  color: #6d5d7a;
  display: flex;
  width: 100%;
`;

export const BusinessAddress = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: flex-start;
  color: #979797;
`;
