import styled from "styled-components";
import { BREAKPOINT_MOBILE } from "../../constants/breakpoints";

export const NewsletterContainer = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TitleNewsletter = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

export const DescriptionNewsletter = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${BREAKPOINT_MOBILE({textAlign: "center"})};
`;

export const InputContainerNewsletter = styled.div`

width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border:1px solid lightgray;
${BREAKPOINT_MOBILE({width: "80%"})};

`;
export const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`;

export const ButtonNewsletter = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
`;
