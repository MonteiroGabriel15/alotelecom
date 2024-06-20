import React, {useState} from "react";
import { HeaderComponent, HomeButtonComponent, ButtonsContainer, LogoContainer, LogoImage, MenuIcon } from "./style";
import imagem1 from '../../../assets/imagem1.png';
import menu1 from '../../../assets/menu-aberto.png'

const Header = ({ welcomeRef, howItWorksRef, whoWeAreRef, contactUsRef }) => {

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    }

    return (
        <HeaderComponent>
            <LogoContainer>
                <LogoImage src={imagem1} alt="logo" />
            </LogoContainer>
            <MenuIcon src={menu1} alt="Menu" onClick={toggleMenu} />
            <ButtonsContainer isOpen={isMenuOpen}>
                <HomeButtonComponent onClick={() => scrollToSection(welcomeRef)}>
                    HOME
                </HomeButtonComponent>
                <HomeButtonComponent onClick={() => scrollToSection(howItWorksRef)}>
                    COMO FUNCIONA
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
