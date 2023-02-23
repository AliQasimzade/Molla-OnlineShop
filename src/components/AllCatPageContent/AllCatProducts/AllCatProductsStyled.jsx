import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { MdAddShoppingCart } from "react-icons/md";

const AllProductsContainer = styled.div`
  width: 100%;
`;
const AllProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ProductWishBtn = styled.button`
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
  &.fill svg {
    fill: #c96 !important;
  }
`;

const ProductAddToCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  transform: translateY(100%);
  opacity: 0;
  bottom: 0;
  border: 0;
  outline: 0;
  cursor: pointer;
  text-transform: uppercase;
  transition: 250ms linear;
  border-bottom: 1px solid #ebebeb;
  color: #c96;
  background-color: #fff;
  padding: 11px 0;
  transition: all 0.35s ease;
  &:hover {
    color: #fff;
    background-color: #c96;
    border-bottom-color: #c96;
  }
  &:disabled {
    background-color: #c96;
    color: #ebebeb;
    opacity: .55;
  }
`;
const ProductAddToCartIcon = styled(MdAddShoppingCart)`
  margin-right: 9px;
`;

const ProductTop = styled.div`
  position: relative;
  overflow: hidden;
`;

const ProductBottom = styled.div`
  padding: 16px 20px;
  text-align: center;
`;

const ProductCart = styled.div`
  position: relative;
  transition: 250ms linear;
  margin: 4px 0;
  width: 31%;
  &:hover {
    & ${ProductWishBtn} {
      top: 20px;
      visibility: visible;
    }
    & ${ProductAddToCart} {
      opacity: 1;
      transform: translateY(0);
    }
    box-shadow: 0 5px 20px rgb(0 0 0 / 5%);
  }
  @media screen and (max-width: 677px) {
    width: 48%;
  }
`;
const ProductCartWrapper = styled.div``;

const ProductCartImageContainer = styled(Link)`
display: block;
 height: 250px;
`;
const ProductCartImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ProductCatName = styled.div`
  margin-bottom: 3px;
  font-size: 14px;
  color: #777777;
`;
const ProductTitle = styled.p`
  text-align: center;
  width: 91%;
  margin: 0 auto;
  color: #333333;
  transition: 250ms linear;
  &:hover {
    color: #c96;
  }
`;
const ProductPrice = styled.div`
  margin-top: 3px;
  color: #c96;
`;

const ProductWishIcon = styled(FiHeart)`
  stroke: #c96;
  width: 20px;
  height: 20px;
`;
export {
  ProductAddToCart,
  ProductAddToCartIcon,
  ProductTop,
  ProductCatName,
  ProductBottom,
  ProductTitle,
  ProductWishBtn,
  ProductWishIcon,
  ProductPrice,
  AllProductsContainer,
  AllProductsWrapper,
  ProductCart,
  ProductCartWrapper,
  ProductCartImageContainer,
  ProductCartImage,
};
