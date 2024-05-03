import React from "react";
import { HeaderComponent, HomeButtonComponent, IntitucionalButtonComponent, AboutUsButtonComponent, ContactButtonComponent,ButtonsContainer, LogoContainer, LogoImage } from "./style";
import imagem1 from '../../../assets/imagem1.png'
const Header = () => {
    return(
        <HeaderComponent>
            <LogoContainer>
                <LogoImage src = {imagem1} alt="logo" />
            </LogoContainer>
            <ButtonsContainer>
                <HomeButtonComponent>
                    Home
                </HomeButtonComponent>

                <IntitucionalButtonComponent>
                    Institucional
                </IntitucionalButtonComponent>

                <AboutUsButtonComponent>
                    Sobre Nós
                </AboutUsButtonComponent>

                <ContactButtonComponent>
                    Contato
                </ContactButtonComponent>
            </ButtonsContainer>
        </HeaderComponent>


    )
};
export default Header;