import styled from "styled-components";

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Adiciona alinhamento vertical centralizado */
  width: 100%;
  height: 50vh;
  background-color: #232323;
  gap: 5rem;
  padding: 1rem; /* Adiciona padding para evitar que o conteúdo encoste nas bordas */

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    height: auto;
    gap: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 18.5%;
  height: 100%;
  gap: 0.5rem;
  text-align: justify;

  h3 {
    color: #fff;
  }

  p {
    color: #fff;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const Title = styled.div`
  width: 40%;
  height: 20%;
  color: #fff;
  font-size: 20px;
  margin-top: 5rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    text-align: center;
    margin-top: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export const IconWpp = styled.img`
  width: 5.7%;
  margin-left: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 7%;
    margin-left: 4px ;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 10%;
    margin-left: 4px;  
  }
`;
