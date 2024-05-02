import React from "react";
import { HeaderComponent, HomeButtonComponent, IntitucionalButtonComponent, AboutUsButtonComponent, ContactButtonComponent } from "./style";
const Header = () => {
    return(
        <HeaderComponent>
            AloTelecom
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
        </HeaderComponent>

    )
};
export default Header;