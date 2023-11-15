 import styled from "styled-components";
import { BREAKPOINT_MOBILE } from "../../constants/breakpoints";


export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  ${BREAKPOINT_MOBILE({display: "none"})}
`;

export const CarouselWrapper = styled.div`
display: flex;
  height: 100%;
 transform: translateX(${props=>props.slideIndex * -100}vw);
 transition: all 1.5s ease;

`;

export const Slide = styled.div`
width: 100vw;
height: 100vh;
  display: flex;
  align-items: center;
 background-color: #${props=>props.bg};
`;

export const ImgContainer = styled.div`
 flex: 1;
 height: 100%;

`;


export const CarouserlImg = styled.img`
width: 100vw;
height: 80%;
`;

