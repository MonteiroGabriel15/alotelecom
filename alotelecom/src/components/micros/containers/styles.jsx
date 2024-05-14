import styled from "styled-components"
import coinorginal from "../../../assets/coindimensionada.jpg"
import { HowItWorksContainer } from "."

export const ImgContainer = styled.div`
display: flex;
width:  100%;
height: 90.5vh;
background-image: url(${coinorginal});
`
export const TextContainer = styled.div`
display: flex;
position: relative;
top: 15%;
left: 1%;
flex-direction: column;
justify-content: space-evenly;
width: 25%;
height: 25%;
color: #FFFFFF;
span{
    color:#cc3d3d;
    text-shadow: 1px 1px 2px black;
    font-weight: bold;
    font-size: xxx-large;
}

h4{
    color: #FFFFFF;
    text-shadow: 1px 1px 2px black;
}

h3{
    color: #FFFFFF;
    text-shadow: 1px 1px 2px black;
}
`

export const CardsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 85vh;

`
export const HowItWorkCardContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height:85vh;
`
export const HowItWorksCards = styled.div`
display:flex;
flex-direction: column;
width: 10.6vw;
height: 55vh;
border-radius: 1rem;
background-color: #F7F7F7F7;
h4{
    font-weight: bold;
    font-size: large;
}

p{
    font-weight:light;
    font-size: small;
}
`

export const HowItWorksTitleContainer = styled.div`
display: flex;
align-items: center;
height: 5vw;
span{
    color: #000000;
    font-size: xx-large;
}
`
export const CardImage = styled.img`
width: 100%;
border-radius: 1rem;
`
