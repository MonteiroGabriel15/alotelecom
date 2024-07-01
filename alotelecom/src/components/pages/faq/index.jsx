import React from "react";
import { Footer } from "../../micros/footer";
import { FaqContainer } from "./style";
import Header from '../../micros/header'
import { SeeAlsoContainer } from "../../micros/faqcontainers";

export const Faq = () => {
    return(
        <FaqContainer>
            <Header/>
            <SeeAlsoContainer/>
        </FaqContainer>
    )

}