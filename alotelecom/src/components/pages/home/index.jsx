import React from "react";
import Header from "../../micros/header";
import { HomeContainer } from "./styles";
import { WelcomeContainer } from "../../micros/containers";

const Home = () => {
    return(
    <HomeContainer>
        <Header/>
            <WelcomeContainer>
            </WelcomeContainer>
    </HomeContainer>
    )
}

export default Home;
