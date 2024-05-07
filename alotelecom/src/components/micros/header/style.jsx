import styled from "styled-components";


export const HeaderComponent = styled.header`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items:center;
width: 100%;
height: 5.625rem;
background-color: #FFFFFFFF;
z-index:10;
`


export const HomeButtonComponent = styled.button`
width: 7rem;
height: 10.4vh;
background-color: #FFFFFFFF;
color: #7D0100;
border: none;
border-bottom: #7D0100 solid;
&:hover{
    border-bottom: #7D0100 0.3125rem solid;
}
font-size: large
`

export const IntitucionalButtonComponent = styled.button`
width: 7rem;
height: 10.4vh;
background-color: #FFFFFF;
color: #7D0100;
border: none;
border-bottom: #7D0100 solid;
&:hover{
    border-bottom: #7D0100 0.3125rem solid;
}
font-size: large
`

export const AboutUsButtonComponent = styled.button`
width: 7rem;
height: 10.4vh;;
background-color: #FFFFFFFF;
color: #7D0100;
border: none;
border-bottom: #7D0100 solid;
&:hover{
    border-bottom: #7D0100 0.3125rem solid;
}
font-size: large
`

export const ContactButtonComponent = styled.button`
width: 7rem;
height: 10.4vh;
background-color: #FFFFFFFF;
color: #7D0100;
border: none;
border-bottom: #7D0100 solid;
&:hover{
    border-bottom: #7D0100 0.3125rem solid;
}
font-size: large
`

export const ButtonsContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
width: 40rem;
height: 100%;
background-color: #FFFFFF;
padding-bottom: 0.75rem;
`

export const LogoContainer = styled.div`
width: 12.5rem;
height: 9vh;
`

export const LogoImage = styled.img`
width: 10rem;
height: 9vh;
`


