import React from "react";
import { ButtonCard, ButtonForm, CardImage, CardsContainer, CardsText, ContactContainer, ContactText, DescriptionContainer, DescriptionImage, DescriptionTextContainer, Forms, HowItWorkCardContainer, HowItWorksCards, HowItWorksTitleContainer, ImgContainer,InputForm,InputMessage,Subtitle,TextContainer, VantagensContainer, VantagensPost, VantagensPostDown, VantagensPostsUp, VantagensTitleContainer, WwaContainer } from "./styles";
import composition1 from "../../../assets/composition1.jpg";
import meeting from "../../../assets/meeting1.jpeg"


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
                    Como 
                </span>
                <h2>
                    Funciona?
                </h2>
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus ducimus sunt consequatur possimus officia doloribus, quibusdam commodi sint debitis amet tenetur quam illum ipsam quod, laboriosam temporibus animi inventore.
            </VantagensPost>
            <VantagensPost>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, facilis deserunt similique, ab reiciendis impedit dolor adipisci aut voluptate minima repellat harum. Id debitis est necessitatibus fugiat doloribus aspernatur eaque.
            </VantagensPost>
        </VantagensPostsUp>

        <VantagensPostDown>
            <VantagensPost>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sint, quia illo quod optio tenetur, amet illum delectus alias voluptates architecto necessitatibus atque pariatur dolor, cum recusandae in excepturi. Sed!
            </VantagensPost>
            <VantagensPost>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, incidunt vitae? Nobis porro temporibus voluptas iusto, quibusdam dolor, autem, tempora consectetur reiciendis itaque ducimus quis nostrum quae nemo aut eos?
            </VantagensPost>
        </VantagensPostDown>
       </VantagensContainer>
    )
    
}

export const WhoWeAreContainer = () => {
    return(
        <WwaContainer>
            <DescriptionContainer>
                <DescriptionImage src = {meeting} />
                <DescriptionTextContainer>
                <h3>Quem somos?</h3>
                <h1>Alo Telecom</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed commodi est fugit! Voluptates adipisci impedit, ipsum, veniam error ullam explicabo cum soluta incidunt aliquid officiis tempora iusto quos voluptas eveniet.</p>
                <ButtonCard>TESTANDO</ButtonCard>
                </DescriptionTextContainer>
            </DescriptionContainer>
        </WwaContainer>
    )
}

export const ContactUsContainer = () => {
    return(
        <ContactContainer>
            <ContactText>
                <h1>Envie-nos uma</h1> 
                <p>mensagem</p> 
            </ContactText>
            <Subtitle>
                Tem alguma dúvida ou sugestão? Escreva abaixo, assim que possível retornaremos!
            </Subtitle>
            <Forms>
                <InputForm type = "text" placeholder = "Nome"/>
                <InputForm type = "email" placeholder = "Email"/>
                <InputForm type = "text" placeholder = "Assunto"/>
                <InputMessage type = "text" placeholder="Escreva sua mensagem"/>
                <ButtonForm>ENVIAR</ButtonForm>
            </Forms>
        </ContactContainer>
    )
}