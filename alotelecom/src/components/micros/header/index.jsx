import React from "react";
import { HeaderComponent, HomeButtonComponent, InstitucionalButtonComponent, AboutUsButtonComponent, ContactButtonComponent, ButtonsContainer, LogoContainer, LogoImage,} from "./style";
import imagem1 from '../../../assets/imagem1.png';

const Header = () => {

    return (
        <HeaderComponent>
            <LogoContainer>
                <LogoImage src={imagem1} alt="logo" />
            </LogoContainer>
            <ButtonsContainer>
                <HomeButtonComponent>
                    HOME
                </HomeButtonComponent>

                <InstitucionalButtonComponent>
                    COMO FUNCIONA
                </InstitucionalButtonComponent>

                <AboutUsButtonComponent>
                    SOBRE NÓS
                </AboutUsButtonComponent>

                <ContactButtonComponent>
                    CONTATO
                </ContactButtonComponent>
            </ButtonsContainer>
        </HeaderComponent>
    );
};

export default Header;
