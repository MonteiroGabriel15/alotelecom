import React from "react";
import Header from "../../micros/header";
import { HomeContainer } from "./styles";
import { WelcomeContainer, HowItWorksContainer, BenefitsContainer, WhoWeAreContainer, ContactUsContainer } from "../../micros/containers";
import { Footer } from "../../micros/footer";

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
        <Footer/>
    </HomeContainer>
    )
}

export default Home;
