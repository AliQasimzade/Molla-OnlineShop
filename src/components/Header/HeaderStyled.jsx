import styled from "styled-components";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
const HeaderContainer = styled.header`
  width: 100%;
`;

const HeaderWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 15px 10px;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

 
const BasketContainer = styled(Link)`
  width: 25px;
  height: 25px;
  border: 0;
  padding: 0;
  outline: 0;
  color: #333333;
  background: none;
  position: relative;
  cursor: pointer;
  transition: 350ms;
  &:hover {
    color: #c96;
  }
`;
const BasketIcon = styled(AiOutlineShoppingCart)`
  width: 100%;
  height: 100%;
`;
const BasketCount = styled.div`
  position: absolute;
  width: 15px;
  top: -2px;
  right: -3px;
  height: 15px;
  border-radius: 50%;
  background-color: #c96;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

const HeaderLeft = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const WishListContainer = styled(BasketContainer)``;
const WishListIcon = styled(FiHeart)`
  width: 100%;
  height: 100%;
`;

const WishListCount = styled(BasketCount)``;

const LogoContainer = styled(Link)``;
export {
  HeaderContainer,
  HeaderWrapper,
  LogoImage,
  HeaderLeft,
  LogoContainer,
  WishListContainer,
  WishListIcon,
  BasketContainer,
  BasketIcon,
  BasketCount,
  WishListCount,
};
