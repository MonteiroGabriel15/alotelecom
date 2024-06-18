import React from "react";
import { HeaderComponent, HomeButtonComponent, ButtonsContainer, LogoContainer, LogoImage } from "./style";
import imagem1 from '../../../assets/imagem1.png';

const Header = ({ welcomeRef, howItWorksRef, benefitsRef, whoWeAreRef, contactUsRef }) => {

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <HeaderComponent>
            <LogoContainer>
                <LogoImage src={imagem1} alt="logo" />
            </LogoContainer>
            <ButtonsContainer>
                <HomeButtonComponent onClick={() => scrollToSection(welcomeRef)}>
                    HOME
                </HomeButtonComponent>
                <HomeButtonComponent onClick={() => scrollToSection(howItWorksRef)}>
                    COMO FUNCIONA
                </HomeButtonComponent>
                <HomeButtonComponent onClick={() => scrollToSection(benefitsRef)}>
                    VANTAGENS
                </HomeButtonComponent>
                <HomeButtonComponent onClick={() => scrollToSection(whoWeAreRef)}>
                    SOBRE NÓS
                </HomeButtonComponent>
                <HomeButtonComponent onClick={() => scrollToSection(contactUsRef)}>
                    CONTATO
                </HomeButtonComponent>
            </ButtonsContainer>
        </HeaderComponent>
    );
};

export default Header;
