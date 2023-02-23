import {
  BannerContainer,
  CarouselItemButton,
  CarouselItemInfo,
  CarouselItemHeading,
  CarouselItemTitle,
  CarouselItem,
  Carousel,
  NextArrow,
  NextArrowIcon,
  PrevArrow,
  PrevArrowIcon,
  CarouselItemButtonIcon,
} from "./BannerStyled";
import { useState, useRef } from "react";

const Banner = () => {
  const [items, setItems] = useState(1);
  const carouselRef = useRef();
  const nextSlide = () => {
    if (items == 2) {
      carouselRef.current.style.transform = "translateX(0)";
      setItems(1);
    } else {
      setItems((items) => items + 1);
      carouselRef.current.style.transform = `translateX(-100%)`;
    }
  };

  const prevSlide = () => {
    if (items == 1) {
      setItems(2);
      carouselRef.current.style.transform = "translateX(-100%)";
    } else {
      setItems((items) => items - 1);
      carouselRef.current.style.transform = "translateX(0)";
    }
  };

  
  return (
    <BannerContainer>
      <PrevArrow onClick={prevSlide}>
        <PrevArrowIcon />
      </PrevArrow>
      <NextArrow onClick={nextSlide}>
        <NextArrowIcon />
      </NextArrow>
      <Carousel ref={carouselRef}>
      <CarouselItem>
          <CarouselItemInfo>
            <CarouselItemHeading>SEASONAL PICKS</CarouselItemHeading>
            <CarouselItemTitle>
              Get All
              <br />
              The Good Stuff
            </CarouselItemTitle>
            <CarouselItemButton>
              <span>DISCOVER MORE</span>
              <CarouselItemButtonIcon />
            </CarouselItemButton>
          </CarouselItemInfo>
        </CarouselItem>
        <CarouselItem>
          <CarouselItemInfo>
            <CarouselItemHeading>SEASONAL PICKS</CarouselItemHeading>
            <CarouselItemTitle>
              Got All them
              <br />
              The Good Stuff
            </CarouselItemTitle>
            <CarouselItemButton>
              <span>DISCOVER MORE</span>
              <CarouselItemButtonIcon />
            </CarouselItemButton>
          </CarouselItemInfo>
        </CarouselItem>
        
      </Carousel>
    </BannerContainer>
  );
};

export default Banner;
