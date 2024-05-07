import React from "react";
import { ImgContainer, BigImage } from "./styles";
import coinoriginal from '../../../assets/coinoriginal.jpg';
export const WelcomeContainer = () => {
    return(
        <ImgContainer>
            <BigImage src = {coinoriginal} alt = 'communication'/>
        </ImgContainer>
    )
}