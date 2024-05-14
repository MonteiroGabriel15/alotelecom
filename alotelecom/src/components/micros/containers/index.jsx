import React from "react";
import { CardImage, CardsContainer, HowItWorkCardContainer, HowItWorksCards, HowItWorksTitleContainer, ImgContainer,TextContainer } from "./styles";
import composition1 from "../../../assets/composition1.jpg";


export const WelcomeContainer = () => {
    return(
        <ImgContainer>
            <TextContainer><span>Seja bem Vindo!</span> <h3>adipisicing elit. Magni earum nemo, odit pariatur temporibus eos, vero, tenetur delectus ut hic ullam dolorem numquam maiores blanditiis expedita re</h3> <h3>prehenderit corporis unde praesentium </h3> </TextContainer>
        </ImgContainer>
    )
}

export const HowItWorksContainer = () => {
    return(
        <CardsContainer>
            <HowItWorksTitleContainer>
                <span>
                    Como Funciona?
                </span>
            </HowItWorksTitleContainer>

                <HowItWorkCardContainer>
                <HowItWorksCards>
                <CardImage src = {composition1}/>
                    <h4>
                        a
                    </h4> 
                    
                    <p>
                        a
                    </p>
                </HowItWorksCards>

                <HowItWorksCards>
                <CardImage src = {composition1}/>
                <h4>
                        a
                    </h4> 
                    
                    <p>
                        a
                    </p>
                </HowItWorksCards>

                <HowItWorksCards>
                <CardImage src = {composition1}/>
                <h4>
                        a
                    </h4> 
                    
                    <p>
                        a
                    </p>
                </HowItWorksCards>

                <HowItWorksCards>
                <CardImage src = {composition1}/>
                <h4>
                        a
                    </h4> 
                    
                    <p>
                        a
                    </p>
                </HowItWorksCards>

                <HowItWorksCards>
                <CardImage src = {composition1}/>
                    <h4>
                        a
                    </h4> 
                    
                    <p>
                        a
                    </p>
                </HowItWorksCards>
            </HowItWorkCardContainer>
        </CardsContainer>
    )

}