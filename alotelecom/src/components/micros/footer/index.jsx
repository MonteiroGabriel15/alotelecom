import React from "react";
import { FooterContainer, Container, IconWpp, Title } from "./style";
import wpp from "../../../assets/whatsapp3.png"

export const Footer = () => {
    return(
        <FooterContainer>
            <Container>
            <Title>Quem Somos</Title>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum rem quia sint saepe nihil distinctio. Ratione omnis culpa quos ad iste voluptate explicabo voluptates facere tempora. Ipsum nesciunt cupiditate vero.</p>
            </Container>
            <Container>
                <Title> Institucional </Title>
                <p> Como Funciona </p>
                <p>Quem Somos</p>
            </Container>
            <Container>
                <Title>Contato</Title>
                <a href = "https://business.whatsapp.com/?lang=pt_BR" target="_blank" rel="noopener noreferrer">+55 32 99999-9999
                <IconWpp src = {wpp}/>
                </a>
            </Container>
        </FooterContainer>
    )
}   