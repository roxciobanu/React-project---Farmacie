import styled from "styled-components";
import { BREAKPOINT_MOBILE } from "../../constants/breakpoints";

export const FooterContainer = styled.div`
  display: flex;
  background-color: #bfffbf;
  margin-top: 50px;
  ${BREAKPOINT_MOBILE({ flexDirection: "column" })};
`;

export const FooterLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const FooterCenter = styled.div`
  flex: 1;
  padding: 20px;
`;

export const FooterRight = styled.div`
  flex: 1;
  padding: 20px;
`;

export const FooterTitle = styled.h3`
  margin-bottom: 30px;
  font-size: 28px;
`;

export const FooterList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  decoration: none;
`;

export const FooterListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
  color: black;
  text-decoration: underline;
  text-decoration-color: white;
`;

export const FooterDescription = styled.p`
  margin: 20px 0px;
`;

export const FooterSocialMediaContainer = styled.div`
  display: flex;
`;

export const FooterSocialMediaIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const FooterLogo = styled.h1`
  flex: 1;
  font-size: 28px;
`;

export const FooterContactTitle = styled.h1`
  font-size: 28px;
`;

export const FooterContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-itmes: center;
`;
