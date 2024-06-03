import styled from "styled-components"
import coinorginal from "../../../assets/coindimensionada.jpg"

export const ImgContainer = styled.div`
display: flex;
width:  100vw;
height: 88vh;
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
width: 100vw;
height: 80vh;
background-color: #FFF;

`
export const HowItWorkCardContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100vw;
height: 85vh;
`
export const HowItWorksCards = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width: 14vw;
height: 60vh;
border-radius: 1rem;
background-color: #F7F7F7F7;
`

export const HowItWorksTitleContainer = styled.div`
margin-top: 3rem;
display: flex;
align-items: center;
height: 5vw;
gap: 0.5rem;
span{
    color: #000;
    font-size: xx-large;
    font-weight: bold;
}

h2{
    color: #7F0000;
    font-weight: bold;
    font-size: xx-large;
}
`
export const CardImage = styled.img`
width: 100%;
border-radius: 1rem;
`
export const CardsText = styled.div`
display: flex;
border-radius: 1rem;
flex-direction: column;
align-items: center;
gap: 1.5rem;
height:100%;
width:100%;
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
export const ButtonCard = styled.button`
width: 40%;
height: 20%;
border: 0;
margin-bottom:1rem;
border-radius: 3rem;
background-color: #7F0000;
color: #FFF;
font-size: 95%;
`

export const VantagensContainer = styled.div`
width:100vw;
height:85vh;
background-color: #000;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
`
export const VantagensTitleContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
gap: 1rem;

h1{
    color: #FFF;
    font-size: 36px;
}
mark{
    background-color: #7F0000;
    color: #FFF;
    font-size: 36px;
}
`

export const VantagensPostsUp = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
height: 25%;
gap:1rem;
`

export const VantagensPost = styled.div`
width: 30%;
height:100%;
background-color: #cf3300;
border-radius: 0.5rem;
`

export const VantagensPostDown = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 100%;
height: 25%;
gap:1rem;
`
export const WwaContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #cfdd66;
width:100vw;
height:70vh;
`

export const DescriptionContainer = styled.div`
display: flex;
background-color: #F7F7F7;
width: 52vw;
height: 40vh;
border-radius:1rem;
` 

