import styled from "styled-components";
import { GrNext, GrPrevious } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";

const BannerContainer = styled.div`
  position: relative;
  overflow: hidden;
`;
const CarouselItem = styled.div`
  width: 100%;
  flex-shrink: 0;
  height: 560px;
  position: relative;
  background-image: url(http://127.0.0.1:5500/portotheme.com/html/molla/assets/images/demos/demo-11/slider/slide-1.jpg);
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center center;
`;

const CarouselItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 170px;
  @media screen and (max-width: 1049px){
    margin-left: 10px;
     margin-top: 270px;
  }
`;

const NextArrow = styled.button`
  border: 0;
  outline: 0;
  background: none;
  position: absolute;
  right: 40px;
  font-size: 24px;
  z-index: 1;
  top: 50%;
  cursor: pointer;
  &:hover {
    svg {
      polyline {
        stroke: #c96;
      }
    }
  }
`;
const NextArrowIcon = styled(GrNext)``;
const PrevArrow = styled.button`
    border: 0;
  outline: 0;
  background: none;
  position: absolute;
  left: 40px;
  font-size: 24px;
  z-index: 1;
  top: 50%;
  cursor: pointer;
  &:hover {
    svg {
      polyline {
        stroke: #c96;
      }
    }
  }
`;
const PrevArrowIcon = styled(GrPrevious)``;
const CarouselItemHeading = styled.h3`
  color: #c96;
`;
const CarouselItemTitle = styled.h1`
  color: #333333;
  margin-bottom: 17px;
  font-size: 40px;
`;
const CarouselItemButton = styled.a`
  color: #c96;
  background-color: transparent;
  background-image: none;
  box-shadow: none;
  border: 1px solid #c96;
  padding: 11px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: 350ms;
  &:hover {
    background-color: #c96;
    color: #fff;
  }
  @media screen and (max-width: 825px){
    background-color: #fff;
  }
`;
const CarouselItemButtonIcon = styled(BsArrowRight)``;
const Carousel = styled.div`
  display: flex;
  position: relative;
  transition: 400ms ;
`;
export {
  BannerContainer,
  CarouselItemInfo,
  CarouselItemHeading,
  CarouselItemTitle,
  CarouselItemButton,
  CarouselItemButtonIcon,
  CarouselItem,
  Carousel,
  NextArrow,
  NextArrowIcon,
  PrevArrow,
  PrevArrowIcon,
};
