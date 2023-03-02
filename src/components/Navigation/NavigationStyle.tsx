import styled, { css } from 'styled-components';

export const NavigationContainer = styled.nav`
  position: fixed;
  width: 100vw;

  z-index: 4;

  display: flex;

  padding: 20px 15px;

`;

export const NavigationSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 100%;

  &:first-child {
    display: none;
  }

  &:nth-child(2) {
    justify-content: flex-start;
  }

  &:last-child {
    justify-content: flex-end;
  }
`;

export const NavigationLogo = styled.div`
  position: relative;
  width: 238px;
  height: 39px;
`;

export const NavigationBurgerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 8px;
`;

export const NavigationBurgerLine = styled.i<{ expanded: boolean }>`
  background-color: ${({ theme }) => theme.white};
  width: 23px;
  height: 2px;
  margin: 2px;
  border-radius: 2px;
  transition: all ease 0.5s;

  ${({ expanded }) =>
    expanded &&
    css`
      &:first-child {
        transform: rotate(45deg) translateY(4.5px);
      }

      &:last-child {
        transform: rotate(-45deg) translateY(-4.5px);
      }
    `}
`;

export const NavigationExpandedScreen = styled.div<{ expanded: boolean }>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 3;
  background-color: ${({ theme }) => theme.white}

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NavigationExpandedScreenContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 100%;
`;
