import styled from "styled-components"
import coinorginal from "../../../assets/coindimensionada.jpg"

export const ImgContainer = styled.div`
display: flex;
width:  100%;
height: 97vh;
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
height: 100vh;
background-color: #FFF;

`
export const HowItWorkCardContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height: 100vh;
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
height: 15%;
border: 0;
margin-bottom:1rem;
border-radius: 3rem;
background-color: #7F0000;
color: #FFF;
font-size: 95%;
cursor:pointer;
font-weight: bold;
&:hover{
    background-color: #fff;
    color: #7f0000;
}

`

export const VantagensContainer = styled.div`
width:100%;
height:100vh;
background-color: #000;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 3rem;
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
    font-size: 36px
}
`

export const VantagensPostsUp = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
height: 25%;
gap:2rem;
`

export const VantagensPost = styled.div`
width: 30%;
height:100%;
background-color: #F7F7F7;
border-radius: 0.5rem;
font-size: 20px;
`

export const VantagensPostDown = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 100%;
height: 25%;
gap:2rem;
`
export const WwaContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #FFF;
width:100%;
height:80vh;
`

export const DescriptionContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
background-color: #F7F7F7;
width: 53%;
height: 56%;
border-radius:1rem;
gap: 1.5rem;

h3{
    font-size: 15px;
}
h1{
    font-size: 36px;
}
p{
    font-size:14px;
}
` 
export const DescriptionImage = styled.img`
width:47%;
`

export const DescriptionTextContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: space-around;
width: 53%;
height:97%
h3{
    font-weight: light;
    color: ##666666;
}

h1{
    color: #212529;
}

p{
    color: ##666666;
}
`
export const ContactContainer = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
width:100%;
height:90vh;
`
export const ContactText = styled.div`
display:flex;
justify-content: center;
width: 100%;
gap: 1rem;

h1{
    font-size:36px;
}

p{
    font-size: 36px;
    color: #7f0000;
}
`

export const Subtitle = styled.div`
display:flex;
justify-content: center;
width: 100%;
p{
    font-size: 15px;
    color: #6666;
}
`
export const Forms = styled.div`
display: flex;
justify-content: center;;
align-items: center;
width: 60%;
height: 65%;
background-color: #CC3D3D;
border-radius: 0.4rem;
padding: 5rem;
flex-wrap:wrap;
gap: 0.29rem;
`

export const InputForm = styled.input`
width: 33%;
height: 13%;
padding: 5px;
background-color: #fff;
border: 0;
border-radius: 3rem;
`

export const ButtonForm = styled.button`
background-color: #cC3D3D;
width: 12%;
height: 12%;
border-radius: 3rem;
border-color:  #ffffff; 
color: #fff;
font-weight: bold;
cursor: pointer;
&:hover{
    background-color: #fff;
    color: #cc3d3d;
}
`
export const InputMessage = styled.input`
display: flex; 
background-color: #ffCC3D3Df; 
width: 100%;
height: 60%;
border: 0;
border-radius: 1rem;
padding: 1rem;
`
