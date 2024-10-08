import styled from "styled-components";
import coinorginal from "../../../assets/newcoin.png";
import vantagens from "../../../assets/teste.png";
import Swiper from "swiper";

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

export const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-image: url(${coinorginal});
  border-bottom: 15px solid #000;

  @media (max-width: ${breakpoints.tablet}) {
    height: 100vh;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 100vh;
  }

`
export const TextContainer = styled.div`
  display: flex;
  position: relative;
  top: 15%;
  left: 6.5%;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  height: 25%;
  color: #ffffff;

  span {
    color: #cc3d3d;
    font-weight: bold;
    font-size: 44px;
    text-transform: uppercase;
    text-shadow: 1px 1px 2px black;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 24px;
    }
  }

  h4 {
    color: #ffffff;
    text-shadow: 1px 1px 2px black;
    font-size: 44px;
    text-transform: uppercase;
    font-weight: bold;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 24 px;
    }
  }

  p {
    color: #ffffff;
    text-shadow: 1px 1px 2px black;
  }

  h6 {
    font-size: 28px;
    color: #cc3d3d;
    font-weight: bold;
    text-shadow: 1px 1px 2px black;
    text-transform: uppercase;
    letter-spacing: 1.5px;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 18px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
    top: 20%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    top: 20%;
    left: 5%;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #fff;

  @media (max-width: ${breakpoints.tablet}) {
    height: 100%;
  }
`;

export const HowItWorkCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    height: 100%;
    gap: 1rem;
  }
`;

export const HowItWorksCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  height: 75%;
  border-radius: 1rem;
  background-color: #f7f7f7;

  @media (max-width: ${breakpoints.tablet}) {
    width: 50%;
    height: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
  }
`;

export const HowItWorksTitleContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  height: 5vw;
  gap: 0.5rem;

  span {
    color: #000;
    font-size: xx-large;
    font-weight: bold;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: large;
    }
  }

  h2 {
    color: #7f0000;
    font-weight: bold;
    font-size: xx-large;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: large;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 1rem;
    height: auto;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

export const CardsText = styled.div`
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  height: 100%;
  width: 100%;
  overflow: auto;
  box-sizing: border-box;

  h4 {
    font-weight: bold;
    font-size: 20px;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 16px;
    }
  }

  p {
    font-weight: light;
    font-size: 14px;
    color: #666666;
    letter-spacing: 2px;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 12px;
    }
  }
`;

export const ButtonCard = styled.button`
  align-self: center;
  width: 40%;
  height: 15%;
  border: 0;
  margin-bottom: 1rem;
  border-radius: 3rem;
  background-color: #7f0000;
  color: #fff;
  font-size: 95%;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #fff;
    color: #7f0000;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 60%;
    height: auto;
    padding: 0.5rem 1rem;
  }
    @media (max-width: ${breakpoints.tablet})
    width: 100%;
    height: 15%;
`;

export const VantagensContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${vantagens});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (max-width: ${breakpoints.tablet}) {
    height: 100%;
    padding: 2rem;
    justify-content: flex-start;
  }
`;

export const VantagensTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  

  h1 {
    color: #fff;
    font-size: 36px;
    font-weight: bold;
    letter-spacing: 2.5px;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 24px;
    }
  }

  mark {
    background-color: #7f0000;
    text-shadow: black 0.1em 0.1em 0.2em;
    color: #fff;
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 24px;
    }
  }
`;

export const VantagensPostsUp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 25%;
  gap: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;

export const VantagensPost = styled.div`
  width: 30%;
  height: 100%;
  background-color: none;
  border-radius: 1rem;
  font-size: 20px;
  padding: 1.3rem;
  overflow: hidden;
  text-align: justify;
  border: 1mm ridge rgba(0, 0, 0);
  color: #fff;

  @media (max-width: ${breakpoints.mobile}) {
    margin-right: 4rem;
    width: 80%;
  }
`;

export const VantagensPostDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25%;
  gap: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;

export const WwaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 80vh;

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
    padding: 2rem;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f7f7f7;
  width: 80%;
  height: 70%;
  border-radius: 1rem;
  gap: 1.5rem;

  h3 {
    font-size: 15px;
  }

  h1 {
    font-size: 36px;
  }

  p {
    font-size: 14px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
`;

export const DescriptionImage = styled.img`
  width: 47%;
  border-radius: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

export const DescriptionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 90%;
  height: 100%;
  padding-right: 1.5rem;

  h1 {
    font-size: 36px;
    color: #212529;
    font-weight: 600;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 24px;
    }
  }

  h3 {
    font-size: 15px;
    font-weight: light;
    color: #666666;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 14px;
    color: #666666;
    text-align: justify;
  }

  span {
    font-size: 36px;
    color: #7f0000;
    font-weight: 600;
    white-space: nowrap;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 24px;
      margin-bottom: 1rem;
    }
  }
`;

export const DescriptionButton = styled.button`
  align-self: center;
  width: 25%;
  height: 10%;
  border: 0;
  margin-bottom: 1rem;
  border-radius: 3rem;
  background-color: #7f0000;
  color: #fff;
  font-size: 95%;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #fff;
    color: #7f0000;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 60%;
    height: auto;
    padding: 0.5rem 0.5rem;
    margin-top: 1rem;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const CarouselImage = styled.img`
width:100%;
height: auto;
`

export const CustomSwiper = styled(Swiper)`
  .swiper-button-next, .swiper-button-prev {
    color: #000; 
  }

  .swiper-pagination-bullet {
    background-color: #fff; 
  }
`;

