import React from "react";
import {
  CarouselWrapper,
  CarouserlImg,
  HomeContainer,
  ImgContainer,
  Slide,
} from "./Slider.style";
import { sliderItems } from "../dataSlider/dataSlider";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ArrowSlider } from "./arrowSlider.style";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <HomeContainer>
      <ArrowSlider direction="left">
        <ArrowBackIosNewIcon
          onClick={() => handleClick("left")}
        ></ArrowBackIosNewIcon>
      </ArrowSlider>
      <CarouselWrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide>
            <ImgContainer>
              <CarouserlImg src={item.img}></CarouserlImg>
            </ImgContainer>
          </Slide>
        ))}
      </CarouselWrapper>
      <ArrowSlider direction="right">
        <ArrowForwardIosIcon
          onClick={() => handleClick("right")}
        ></ArrowForwardIosIcon>
      </ArrowSlider>
    </HomeContainer>
  );
};

export default Slider;
