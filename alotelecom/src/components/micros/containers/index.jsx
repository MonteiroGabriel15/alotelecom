import React from "react";
import { ButtonCard, CardImage, CardsContainer, CardsText, HowItWorkCardContainer, HowItWorksCards, HowItWorksTitleContainer, ImgContainer,TextContainer, VantagensContainer, VantagensPost, VantagensPostDown, VantagensPostsUp, VantagensTitleContainer } from "./styles";
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
                <CardsText>
                    <h4>
                            Teste
                        </h4> 
                        
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium molestias, tempore aspernatur cupiditate eveniet cumque eum voluptatum dicta obcaecati optio laudantium beatae officiis minus quia sequi soluta et, id placeat!
                        </p>
                </CardsText>
                <ButtonCard>TESTANDO</ButtonCard>
                </HowItWorksCards>

                <HowItWorksCards>
                <CardImage src = {composition1}/>
                <CardsText>
                    <h4>
                            TesteTesteTesteTesteTeste
                        </h4> 
                        
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo hic, pariatur dicta fuga ad non expedita earum est nesciunt facere quia optio, vero sequi aperiam assumenda numquam accusantium, soluta porro.
                        </p>
                </CardsText>
                <ButtonCard>TESTANDO</ButtonCard>
                </HowItWorksCards>

                <HowItWorksCards>
                <CardImage src = {composition1}/>
                <CardsText>
                    <h4>
                    TesteTeste
                    </h4> 
                        
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, numquam magnam. Cum totam mollitia, nulla maiores quo officiis consequuntur quis animi exercitationem veritatis amet, quas, enim explicabo optio perspiciatis minima.
                    </p>
                </CardsText>
                <ButtonCard>TESTANDO</ButtonCard>
                </HowItWorksCards>

                <HowItWorksCards>
                <CardImage src = {composition1}/>
                <CardsText>
                    <h4>
                    TesteTesteTesteTeste
                    </h4> 
                        
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, ducimus architecto molestias sequi quam, praesentium laboriosam repellat enim unde autem dolorum nisi nemo adipisci iste saepe maxime esse qui. Deleniti?
                    </p>
                </CardsText>
                <ButtonCard>TESTANDO</ButtonCard>
                </HowItWorksCards>

                <HowItWorksCards>
                <CardImage src = {composition1}/>
                <CardsText>
                    <h4>
                    TesteTesteTeste
                        </h4> 
                        
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit unde nam ratione maxime fugiat sint, illo, quasi error sapiente, a rem? Magni omnis, quae cum ullam aperiam qui sint consequuntur?
                        </p>
                </CardsText>
                <ButtonCard>TESTANDO</ButtonCard>
                </HowItWorksCards>
            </HowItWorkCardContainer>
        </CardsContainer>
    )
}

export const BenefitsContainer = () =>{
    return(
       <VantagensContainer>
        <VantagensTitleContainer>
            <h1>Vantagens de ser </h1> <mark>AloTelecom</mark>
        </VantagensTitleContainer>
        <VantagensPostsUp>
            <VantagensPost>
                aaa
            </VantagensPost>
            <VantagensPost>
                aaa
            </VantagensPost>
        </VantagensPostsUp>

        <VantagensPostDown>
            <VantagensPost>
                aaa
            </VantagensPost>
            <VantagensPost>
                aaa
            </VantagensPost>
        </VantagensPostDown>
       </VantagensContainer>
    )
    
}
