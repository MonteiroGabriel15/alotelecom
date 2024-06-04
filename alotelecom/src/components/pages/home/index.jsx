import React from "react";
import Header from "../../micros/header";
import { HomeContainer } from "./styles";
import { WelcomeContainer, HowItWorksContainer, BenefitsContainer, WhoWeAreContainer, ContactUsContainer } from "../../micros/containers";

const Home = () => {
    return(
    <HomeContainer>
        <Header/>
            <WelcomeContainer>
            </WelcomeContainer>

            <HowItWorksContainer>
            </HowItWorksContainer>

            <BenefitsContainer>
            </BenefitsContainer>

            <WhoWeAreContainer>
            </WhoWeAreContainer>

            <ContactUsContainer>
            </ContactUsContainer>

    </HomeContainer>
    )
}

export default Home;
