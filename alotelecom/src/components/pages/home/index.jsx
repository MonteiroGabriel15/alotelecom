import React, { useRef } from "react";
import Header from "../../micros/header";
import { HomeContainer } from "./style";
import { WelcomeContainer, HowItWorksContainer, BenefitsContainer, WhoWeAreContainer, Carousel } from "../../micros/homecontent";
import { Footer } from "../../micros/footer";
import image1 from "../../../assets/machado sobrinho.png"; // 
import image2 from "../../../assets/tombos.png";
import image3 from "../../../assets/Logo-logo conexao.png";

const Home = () => {
    const welcomeRef = useRef(null);
    const howItWorksRef = useRef(null);
    const benefitsRef = useRef(null);
    const whoWeAreRef = useRef(null);
    const contactUsRef = useRef(null);

    const images = [image1, image2, image3]; 

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
            <div>
                <BenefitsContainer />
            </div>
            <div id="about-us" ref={whoWeAreRef}>
                <WhoWeAreContainer />
            </div>
            <div ref={contactUsRef}>
                <Carousel images={images} /> 
            </div>
            <Footer />
        </HomeContainer>
    );
}

export default Home;