import React from "react";
import {
  FooterCenter,
  FooterContactItem,
  FooterContactTitle,
  FooterContainer,
  FooterDescription,
  FooterLeft,
  FooterList,
  FooterListItem,
  FooterLogo,
  FooterRight,
  FooterSocialMediaContainer,
  FooterSocialMediaIcon,
  FooterTitle,
} from "./Footer.style";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <FooterLogo>Pharmaplant</FooterLogo>
        <FooterDescription>
        PharmaPlant - Locul I - Raportul de Excelență în Experiența Clienților Non Grocery - Retail din România 2022
        </FooterDescription>
        <FooterSocialMediaContainer>
          <FooterSocialMediaIcon>
            <FacebookIcon color="#385999"></FacebookIcon>
            <InstagramIcon color="#385999"></InstagramIcon>
          </FooterSocialMediaIcon>
        </FooterSocialMediaContainer>
      </FooterLeft>
      <FooterCenter>

<FooterTitle>Link-uri utile</FooterTitle>
<FooterList>
<Link to={'/homepage'}>
  <FooterListItem>Acasa</FooterListItem>
  </Link>
  <Link to={'/cart'}>
  <FooterListItem>Cos</FooterListItem>
  </Link>
 <Link to={'/cont'}>
  <FooterListItem>Cont</FooterListItem>
  </Link>

  <Link to={'/termeni-si-conditii'}>
  <FooterListItem>Termeni si conditii</FooterListItem>
  </Link>
</FooterList>

      </FooterCenter>


      <FooterRight>

<FooterContactTitle>Contact</FooterContactTitle>
<FooterContactItem><FmdGoodIcon style={{marginRight:"10px"}}></FmdGoodIcon>Bucuresti, Piata Victoriei, 23, Romania</FooterContactItem> 
<FooterContactItem><PhoneIcon style={{marginRight:"10px"}}></PhoneIcon>0754569012</FooterContactItem> 
<FooterContactItem><EmailIcon style={{marginRight:"10px"}}></EmailIcon>contact@pharmaplant.com</FooterContactItem> 
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
