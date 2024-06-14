import React from "react";
import { HeaderComponent, HomeButtonComponent, ButtonsContainer, LogoContainer, LogoImage,} from "./style";
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

                <HomeButtonComponent>
                    COMO FUNCIONA
                </HomeButtonComponent>

                <HomeButtonComponent>
                    SOBRE NÓS
                </HomeButtonComponent>

                <HomeButtonComponent>
                    CONTATO
                </HomeButtonComponent>
            </ButtonsContainer>
        </HeaderComponent>
    );
};

export default Header;
