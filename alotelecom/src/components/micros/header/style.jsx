import styled from "styled-components";

const breakpoints = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
};

export const HeaderComponent = styled.header`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width: 100vw;
height: 10vh;
background-color: #FFFFFFFF;
z-index:10;
box-shadow: 0.3125rem 0.3125rem 0.3125rem rgba(0, 0, 0, 0.35);
margin-right: 0.5rem;
position: fixed;

    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 50%;
    }

    @media screen and (max-width: ${breakpoints.mobile}) {
        width: 100%;
    };
`


export const HomeButtonComponent = styled.button`
width: 20%;
height: 10vh;
background-color: #FFFFFFFF;
color: #7D0100;
border: none;
&:hover{
    border-bottom: #7D0100 solid;
}
font-size: 100%;

    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 50%;
    }

    @media screen and (max-width: ${breakpoints.mobile}) {
        width: 15%;
    }
`

export const InstitucionalButtonComponent = styled.button`
width: 30%;
height: 10vh;
background-color: #FFFFFF;
color: #7D0100;
border: none;
&:hover{
    border-bottom: #7D0100 solid;
}
font-size: 100%;
    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 50%;
    }

    @media screen and (max-width: ${breakpoints.mobile}) {
        width: 30%;
    };
`

export const AboutUsButtonComponent = styled.button`
width: 30%;
height: 10vh;;
background-color: #FFFFFFFF;
color: #7D0100;
border: none;
&:hover{
    border-bottom: #7D0100 solid;
}
font-size: 100%;

    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 50%;
    }

    @media screen and (max-width: ${breakpoints.mobile}) {
        width: 100%;
    };
`

export const ContactButtonComponent = styled.button`
width: 30%;
height: 10vh;
background-color: #FFFFFFFF;
color: #7D0100;
border: none;
&:hover{
    border-bottom: #7D0100 solid;
}
font-size: 100%;

    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 50%;
    }

    @media screen and (max-width: ${breakpoints.mobile}) {
        width: 100%;
    };
`

export const ButtonsContainer = styled.div`
gap: 2rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
width: 33vw;
height: 10vh;
background-color: #FFFFFF;
padding-bottom: 0.75rem;
    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 50%;
    }

    @media screen and (max-width: ${breakpoints.mobile}) {
        width: 70%;
    };
`

export const LogoContainer = styled.div`
width: 7.9vw;
height: 10vh;
padding: 0.2rem;
    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 50%;
    }

    @media screen and (max-width: ${breakpoints.mobile}) {
        width: 100%;
    };
`

export const LogoImage = styled.img`
width: 100%;
height:100%;
`


