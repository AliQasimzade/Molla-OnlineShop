import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import Zoom from 'react-medium-image-zoom'

const ProductPageContainer = styled.div``;

const ProductPageWrapper = styled.div``;
const BreadCrumbContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #ebebeb;
`;
const ProductPageContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px 10px 0 10px;
  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;
const ProductPageImageContainer = styled.div`
  height: 457px;
  width: 457px;
`;

const ProductPageInfoTitle = styled.h2``;
const ProductPageInfoPrize = styled.p`
  color: #c96;
  font-size: 20px;
`;
const ProductPageInfoDesc = styled.span`
  word-break: break-all;
`;


const ProductPageContentInfo = styled.div`
  width: calc(100% - 457px);
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const ProductAddToCartIcon = styled(MdAddShoppingCart)``;
const ProductPageAddToCart = styled.button`
  outline: none;
  background: #fff;
  color: #c96;
  cursor: pointer;
  text-transform: uppercase;
  padding: 10px 15px;
  border: 1px solid #c96;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: 250ms linear;
  &:hover {
    background-color: #c96;
    color: #fff;
  }
  &:disabled {
    background: #c96;
    color: #ebebeb;
    opacity: 0.55;
  }
`;
const ProductPageWishIcon = styled(FiHeart)``;
const ProductPageWishBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  display: flex;
  font-size: 16px;
  gap: 10px;
  align-items: center;
  transition: 250ms linear;
  cursor: pointer;
  & ${ProductPageWishIcon} {
    color: #c96;
  }
  &:hover {
    color: #c96;
  }
  &:disabled {
    opacity: 0.55;
  }
`;

const ProductPageContentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BreadCrumbMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 1188px;
  max-width: 100%;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
`;
const BreadCrumbMenuListIcon = styled(IoChevronForward)`
  color: #777;
`;

const BreadCrumbMenuList = styled.li``;
const BreadCrumbMenuListLink = styled(Link)`
  color: #777;
  &:hover {
    color: #c96;
  }
`;
export {
  ProductPageContentImage,
  ProductPageContainer,
  ProductPageWrapper,
  BreadCrumbContainer,
  BreadCrumbMenu,
  BreadCrumbMenuList,
  ProductPageWishIcon,
  BreadCrumbMenuListIcon,
  BreadCrumbMenuListLink,
  ProductPageContent,
  ProductPageWishBtn,
  ProductPageImageContainer,
  ProductPageContentInfo,
  ProductPageInfoTitle,
  ProductPageInfoPrize,
  ProductPageInfoDesc,
  ProductPageAddToCart,
  ProductAddToCartIcon,

};
