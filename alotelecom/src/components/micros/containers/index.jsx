import React, {useState} from "react";
import { ButtonCard, ButtonForm, CardImage, CardsContainer, CardsText, ContactContainer, ContactText, DescriptionContainer, DescriptionImage, DescriptionTextContainer, DescriptionButton, Forms, HowItWorkCardContainer, HowItWorksCards, HowItWorksTitleContainer, ImgContainer,InputForm,InputMessage,Subtitle,TextContainer, VantagensContainer, VantagensPost, VantagensPostDown, VantagensPostsUp, VantagensTitleContainer, WwaContainer } from "./styles";
import composition1 from "../../../assets/composition1.jpg";
import meeting from "../../../assets/meeting1.jpeg"
import axios from "axios";


export const WelcomeContainer = () => {
    return(
        <ImgContainer>
            <TextContainer><h6>Seja bem Vindo!</h6><span>Reduza seus custos</span> <h4>Agende sua consultoria</h4> <p>Reduzimos seus gastos e poupamos seu tempo para poder focar somente em seu negócio. </p> </TextContainer>
        </ImgContainer>
    )
}

export const HowItWorksContainer = () => {
    const redirectToWhatsApp = () => {
    const whatsappLink = "https://api.whatsapp.com/send?phone=553235125900";
        window.open(whatsappLink, "_blank")};
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
                            Diagnóstico Personalizado
                        </h4> 
                        
                        <p>
                            Avaliamos a infraestrutura e as necessidades de telecomunicação da sua empresa.
                        </p>
                    </CardsText>
                <ButtonCard onClick={redirectToWhatsApp}>CONSULTE</ButtonCard>
                </HowItWorksCards>

                <HowItWorksCards>
                <CardImage src = {composition1}/>
                <CardsText>
                        <h4>
                            Planejamento
                        </h4> 
                        
                        <p>
                            Desenvolvemos um plano de ação eficaz para otimizar os recursos e reduzir os custos.    
                        </p>
                </CardsText>
                <ButtonCard onClick={redirectToWhatsApp}>CONSULTE</ButtonCard>
                </HowItWorksCards>

                <HowItWorksCards>
                <CardImage src = {composition1}/>
                <CardsText>
                    <h4>
                        Implementação
                    </h4> 
                        
                    <p>
                    Executamos as soluções propostas com suporte especializado e acompanhamento para assegurar a eficácia e satisfação de sua empresa.
                    </p>
                </CardsText>
                <ButtonCard onClick={redirectToWhatsApp}>CONSULTE</ButtonCard>
                </HowItWorksCards>

                <HowItWorksCards>
                <CardImage src = {composition1}/>
                <CardsText>
                    <h4>
                    Monitoramento
                    </h4> 
                        
                    <p>
                    Acompanhamos continuamente os resultados e realizamos os ajustes necessários para garantir o máximo desempenho e atender às demandas em constante evolução da sua empresa.
                    </p>
                </CardsText>
                <ButtonCard onClick={redirectToWhatsApp}>CONSULTE</ButtonCard>
                </HowItWorksCards>
            </HowItWorkCardContainer>
        </CardsContainer>
    )
}

export const BenefitsContainer = () =>{
    return(
       <VantagensContainer>
        <VantagensTitleContainer>
            <h1>Vantagens em ser </h1> <mark>Alô Telecom</mark>
        </VantagensTitleContainer>
        <VantagensPostsUp>
            <VantagensPost>
                Reduzimos bastante os custos de sua empresa, temos casos de até 45% de redução nos gastos com telecomunicação e internet.
            </VantagensPost>
            <VantagensPost>
                Identificamos áreas que podem ser melhoradas e otimização de rotas de menor custo.
            </VantagensPost>
        </VantagensPostsUp>

        <VantagensPostDown>
            <VantagensPost>
                Proporcionamos soluções de telecomunicação e internet para proporcionar maior produtividade e eficiência para sua empresa.
            </VantagensPost>
            <VantagensPost>
                Nossa consultoria especializada permite que você foque apenas em seu negócio.  
            </VantagensPost>
        </VantagensPostDown>
       </VantagensContainer>
    )
    
}

export const WhoWeAreContainer = () => {
    const redirectToWhatsApp = () => {
        const whatsappLink = "https://api.whatsapp.com/send?phone=553235125900";
            window.open(whatsappLink, "_blank")};
    return(
        <WwaContainer>
            <DescriptionContainer>
                <DescriptionImage src = {meeting} />
                <DescriptionTextContainer>
                <h3>Quem somos?</h3>
                <h1>Referência em </h1> <span>Telecomunicação</span>
                <p>A Alô Telecom é uma empresa especializada em gestão e consultoria de telecomunicação, visando reduzir os gastos e o tempo que o cliente teria que despender para gerenciar e otimizar suas operações de telecomunicações, permitindo que se concentrem em suas atividades principais.</p>
                <DescriptionButton onClick={redirectToWhatsApp}>CONSULTE</DescriptionButton>
                </DescriptionTextContainer>
            </DescriptionContainer>
        </WwaContainer>
    )
}

export const ContactUsContainer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/send', formData)
            .then(response => {
                console.log('Email sent successfully');
            })
            .catch(error => {
                console.error('There was an error sending the email!', error);
            });
    };

    return (
        <ContactContainer>
            <ContactText>
                <h1>Envie-nos uma</h1> 
                <p>mensagem</p> 
            </ContactText>
            <Subtitle>
                Tem alguma dúvida ou sugestão? Escreva abaixo, assim que possível retornaremos!
            </Subtitle>
            <Forms onSubmit={handleSubmit}>
                <InputForm 
                    type="text" 
                    name="name" 
                    placeholder="Nome" 
                    value={formData.name} 
                    onChange={handleChange} 
                />
                <InputForm 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
                <InputForm 
                    type="text" 
                    name="subject" 
                    placeholder="Assunto" 
                    value={formData.subject} 
                    onChange={handleChange} 
                />
                <InputMessage 
                    type="text" 
                    name="message" 
                    placeholder="Escreva sua mensagem" 
                    value={formData.message} 
                    onChange={handleChange} 
                />
                <ButtonForm type="submit">ENVIAR</ButtonForm>
            </Forms>
        </ContactContainer>
    );
};