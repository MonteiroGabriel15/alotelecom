import styled from "styled-components"
import coinorginal from "../../../assets/newcoin.png"
import vantagens from "../../../assets/teste.png"


export const ImgContainer = styled.div`
display: flex;
width:  100%;
height: 100vh;
background-image: url(${coinorginal});
border-bottom: 15px solid #000;
`
export const TextContainer = styled.div`
display: flex;
position: relative;
top: 30%;
left: 5%;
flex-direction: column;
justify-content: space-evenly;
width: 50%;
height: 25%;
color: #FFFFFF;
span{
    color:#cc3d3d;
    font-weight: bold;
    font-size: 44px;
    text-transform: uppercase;
    text-shadow: 1px 1px 2px black;
}

h4{
    color: #FFFFFF;
    text-shadow: 1px 1px 2px black;
    font-size: 44px;
    text-transform: uppercase;
    font-weight: bold;
}

p{
    color: #FFFFFF;
    text-shadow: 1px 1px 2px black;
    
}

h6{
    font-size: 28px;
    color: #cc3d3d;
    font-weight: bold;
    text-shadow: 1px 1px 2px black;
    text-transform: uppercase;
    letter-spacing: 1.5px;
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
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 100vh;
`
export const HowItWorksCards = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width: 16%;
height: 63vh;
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
padding: 2rem;
height:100%;
width:100%;
overflow: hidden;
background-color: #F7F7F7F7;
h4{
    font-weight: bold;
    font-size: 20px;
}

p{
    font-weight:light;
    font-size: 14px;
    color: #666666;
    text-align: justify;
}
`
export const ButtonCard = styled.button`
align-self: center;
width: 40%;
height: 20%;
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
background-image: url(${vantagens});
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
    font-weight: bold;
    letter-spacing: 2.5px;
}
mark{
    background-color: #7F0000;
    text-shadow: black 0.1em 0.1em 0.2em;
    color: #FFF;
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
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
background-color: none.
border-radius: 1rem;
font-size: 20px;
padding: 1.3rem;
overflow: hidden;
text-align: justify;
border: 1mm ridge  rgba(0, 0, 0);
color: #fff;
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
background-color: #F7F7F7;
width: 80%;
height: 70%;
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
border-radius:1rem;
`

export const DescriptionTextContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: space-evenly;
width: 90%;
height: 100%;
padding-right: 1.5rem;

h1{
    font-size: 36px;
    color: #212529; 
    font-weight: 600;
}

h3{
    font-size: 15px;
    font-weight: light;
    color: #666666;
}

p{
    font-size: 14px;
    color: #666666;
    text-align: justify;
}

span{
    font-size: 36px;
    color: #7f0000; 
    font-weight: 600;
    white-space: nowrap;


}
`

export const DescriptionButton = styled.button`
align-self: center;
width: 25%;
height: 10%;
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
margin-bottom: 0.5rem;

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
margin-bottom: 4rem;
p{
    font-size: 15px;
    color: #6666;
}
`
export const Forms = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 60%;
height: 55%;
background-color: #CC3D3D;
border-radius: 0.4rem;
padding: 5rem;
flex-wrap:wrap;
gap: 2rem;
`

export const InputForm = styled.input`
width: 28%;
height: 13%;
padding: 1rem;
background-color: #fff;
border: 0;
border-radius: 3rem;
outline: none;
`

export const ButtonForm = styled.button`
position: relative;
left: 43%;
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
export const InputMessage = styled.textarea`
background-color: #fff; 
width: 100%;
height: 60%;
word-wrap: break-word;
border: 0;
border-radius: 1rem;
padding-left: 1rem;
padding-top: 0.5rem;
outline: none;
`
