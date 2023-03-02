import styled from 'styled-components';

export const NavigationButtonContainer = styled.button`
  background-color: none;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.white};
  height: 26.62px;

  padding: 5px 15px;
  margin: 0 4.5px;
  letter-spacing: 0.1em;

  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.3) 7.09%,
    rgba(255, 255, 255, 0.2) 100%
  );
  border-radius: 10px;

  &:focus {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.3) 7.09%,
      rgba(255, 255, 255, 0.2) 100%
    );
  }

  &:active {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.3) 7.09%,
      rgba(255, 255, 255, 0.2) 100%
    );
  }

  cursor: pointer;

  &:hover {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.6) 7.09%,
      rgba(255, 255, 255, 0.4) 100%
    );
  }
`;

export const NavigationIcons = styled.div`
  position: relative;
  width: 15px;
  height: 15px;
`;
