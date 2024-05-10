import styled from "styled-components"
import coinorginal from "../../../assets/coindimensionada.jpg"

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
h1{
    color:#cc3d3d;
    font-weight: bold;
}

p{
    color: #6c757d;
}
`

