import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SlRefresh } from "react-icons/sl";

const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProductsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 519px) {
    justify-content: center;
  }
  @media screen and (max-width: 678px) {
    justify-content: center;
  }
`;
const ProductWish = styled.button`
  position: absolute;
  top: 40px;
  right: 20px;
  visibility: hidden;
  transition: 250ms linear;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  &:hover svg {
    fill: #c96 !important;
  }
  &:disabled svg {
    fill: #c96 !important;
  }
`;
const ProductWishIcon = styled(FiHeart)`
  stroke: #c96;
  width: 20px;
  height: 20px;
`;
const ProductAddBtnIcon = styled(BsArrowRight)``;

const ProductAddBtn = styled.button`
  visibility: hidden;
  transition: 250ms linear;
  border: none;
  transform: translateY(100%);
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  color: #c96;
  transition: 250ms linear;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0.05em 0 0 #cc9966;
  }
  &:disabled {
    background-color: #c96;
    color: #ebebeb;
    opacity: 0.88;
    transition: 250ms linear;
    & ${ProductAddBtnIcon} {
      visibility: hidden;
      transition: 250ms linear;
    }
  }
`;
const Product = styled.div`
  width: 206px;
  margin: 10px;
  &:hover {
    & ${ProductWish} {
      top: 20px;
      visibility: visible;
    }
    & ${ProductAddBtn} {
      transform: translateY(0);
      visibility: visible;
    }
  }
`;
const MoreProductsBtnIcon = styled(SlRefresh)`
  transition: 250ms linear;
`;
const MoreProductsBtn = styled(Link)`
  border: none;
  outline: none;
  color: #333333;
  background-color: transparent;
  background-image: none;
  border-color: #d7d7d7;
  box-shadow: none;
  border: 1px solid #d7d7d7;
  padding: 11px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 250ms linear;
  margin-top: 10px;
  &:hover {
    color: #cc9966;
    background-color: #fafafa;
    border-color: #d7d7d7;
    & ${MoreProductsBtnIcon} {
      transform: rotate(90deg);
    }
  }
`;

const ProductWrapper = styled.div`
  position: relative;
`;

const ProductInfo = styled.div`
  position: relative;
`;

const ProductName = styled.p`
  color: #666;
  word-break: break-all;
  transition: 250ms linear;
  &:hover {
    color: #c96;
  }
`;

const ProductPrice = styled.p`
  color: #cccccc;
`;

const ProductImageContainer = styled(Link)`
  display: block;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export {
  ProductAddBtnIcon,
  ProductsContainer,
  ProductsWrapper,
  Product,
  ProductAddBtn,
  MoreProductsBtnIcon,
  ProductWishIcon,
  ProductImageContainer,
  ProductImage,
  ProductWish,
  ProductWrapper,
  ProductInfo,
  ProductName,
  ProductPrice,
  MoreProductsBtn,
};
