import styled from "styled-components"
import coinorginal from "../../../assets/coindimensionada.jpg"
import { HowItWorksContainer } from "."

export const ImgContainer = styled.div`
display: flex;
width:  100%;
height: 90.5vh;
background-image: url(${coinorginal});
margin-bottom: 1rem
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
width: 100%;
height: 85vh;
background-color: #00FFFF; 
`

export const HowItWorksCards = styled.div`

`

