import React from "react";
import { HeaderComponent, HomeButtonComponent, IntitucionalButtonComponent, AboutUsButtonComponent, ContactButtonComponent,ButtonsContainer } from "./style";
const Header = () => {
    return(
        <HeaderComponent>
            AloTelecom
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