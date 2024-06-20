import styled from "styled-components";

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

export const HeaderComponent = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  background-color: #FFFFFF;
  box-shadow: 0.3125rem 0.3125rem 0.3125rem rgba(0, 0, 0, 0.35);
  padding: 0 1rem;
  position: fixed;
  z-index: 10;
`;

export const LogoContainer = styled.div`
  width: 7.9vw;
  height: 10vh;
  padding: 0.2rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: 10vw;
    height: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 20vw;
    height: auto;
  }
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
    height: auto;
  }
`;

export const MenuIcon = styled.img`
  display: none;
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 50vw;
  height: 10vh;
  background-color: #FFFFFF;
  padding-bottom: 0.75rem;
  gap: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    position: absolute;
    top: 10vh;
    left: 0;
    width: 100%;
    height: auto;
    background-color: #fff;
    padding: 1rem;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

export const HomeButtonComponent = styled.button`
  width: 15%;
  height: 10vh;
  background-color: #FFFFFF;
  color: #7D0100;
  border: none;
  &:hover {
    border-bottom: #7D0100 solid;
  }
  font-size: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    width: auto;
    font-size: 90%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    font-size: 80%;
  }
`;
