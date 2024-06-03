import React from "react";
import Header from "../../micros/header";
import { HomeContainer } from "./styles";
import { WelcomeContainer, HowItWorksContainer, BenefitsContainer, WhoWeAreContainer } from "../../micros/containers";

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
    </HomeContainer>
    )
}

export default Home;
