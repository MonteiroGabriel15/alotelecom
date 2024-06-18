import React from "react";
import { FooterContainer, Container, IconWpp, Title } from "./style";
import wpp from "../../../assets/whatsapp3.png"

export const Footer = () => {
    return(
        <FooterContainer>
            <Container>
            <Title>Quem Somos</Title>
            <p>A AlôTelecom é uma empresa focada em reduzir gastos e economizar tempo de seus clientes </p> 
            </Container>
            <Container>
                <Title> Institucional </Title>
                <a href="#how-it-works"> Como Funciona </a>
                <a href="#about-us">Quem Somos</a>
            </Container>
            <Container>
                <Title>Contato</Title>
                <a href = "https://api.whatsapp.com/send?phone=553235125900" target="_blank" rel="noopener noreferrer">+55 32 3512-5900
                <IconWpp src = {wpp}/>
                </a>
            </Container>
        </FooterContainer>
    )
}   