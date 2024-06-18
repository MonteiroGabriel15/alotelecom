import React, { useRef } from "react";
import Header from "../../micros/header";
import { HomeContainer } from "./styles";
import { WelcomeContainer, HowItWorksContainer, BenefitsContainer, WhoWeAreContainer, ContactUsContainer } from "../../micros/containers";
import { Footer } from "../../micros/footer";

const Home = () => {
    const welcomeRef = useRef(null);
    const howItWorksRef = useRef(null);
    const benefitsRef = useRef(null);
    const whoWeAreRef = useRef(null);
    const contactUsRef = useRef(null);

    return (
        <HomeContainer>
            <Header 
                welcomeRef={welcomeRef} 
                howItWorksRef={howItWorksRef} 
                benefitsRef={benefitsRef} 
                whoWeAreRef={whoWeAreRef} 
                contactUsRef={contactUsRef}
            />
            <div  ref={welcomeRef}>
                <WelcomeContainer />
            </div>
            <div id="how-it-works"  ref={howItWorksRef}>
                <HowItWorksContainer />
            </div>
            <div ref={benefitsRef}>
                <BenefitsContainer />
            </div>
            <div id="about-us" ref={whoWeAreRef}>
                <WhoWeAreContainer />
            </div>
            <div ref={contactUsRef}>
                <ContactUsContainer />
            </div>
            <Footer />
        </HomeContainer>
    );
}

export default Home;
