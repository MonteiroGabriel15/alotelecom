import styled from "styled-components";

export const HeaderComponent = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 10vh;
    background-color: #FFFFFF;
    z-index: 10;
    box-shadow: 0.3125rem 0.3125rem 0.3125rem rgba(0, 0, 0, 0.35);
    padding: 0 1rem;
    position: fixed;
        padding: 0;
    }
`;


export const ButtonsContainer = styled.div`
    gap: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 40vw;
    height: 10vh;
    background-color: #FFFFFF;
    padding-bottom: 0.75rem;

`;

export const HomeButtonComponent = styled.button`
    width: 22%;
    height: 10vh;
    background-color: #FFFFFF;
    color: #7D0100;
    border: none;
    &:hover {
        border-bottom: #7D0100 solid;
    }
    font-size: 100%;
`;


export const LogoContainer = styled.div`
    width: 7.9vw;
    height: 10vh;
    padding: 0.2rem;

`;

export const LogoImage = styled.img`
    width: 100%;
    height: 100%;
`;
