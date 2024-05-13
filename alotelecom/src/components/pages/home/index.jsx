import React from "react";
import Header from "../../micros/header";
import { HomeContainer } from "./styles";
import { WelcomeContainer, HowItWorksContainer } from "../../micros/containers";

const Home = () => {
    return(
    <HomeContainer>
        <Header/>
            <WelcomeContainer>
            </WelcomeContainer>

            <HowItWorksContainer>
                
            </HowItWorksContainer>
    </HomeContainer>
    )
}

export default Home;
