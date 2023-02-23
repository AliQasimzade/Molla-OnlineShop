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

const SearchButton = styled.button`
  border: 0;
  outline: 0;
  background: none;
  display: flex;
  align-items: center;
  transition: 350ms linear;
  cursor: pointer;
  padding: 5px 10px 5px 15px;
  &:hover {
    color: #c96;
  }
  &.open {
    border: 1px solid #ebebeb;
    border-radius: 20px;
    z-index: 1020;
  }
  &.open input{
    display: flex;
  }
`;
const SearchIcon = styled(VscSearch)`
  width: 25px;
  height: 25px;
`;
const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Search in...",
})`
  display: none;
  border: none;
  outline: none;
`;
const BasketContainer = styled.button`
  width: 25px;
  height: 25px;
  border: 0;
  padding: 0;
  outline: 0;
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
  SearchIcon,
  SearchButton,
  SearchInput,
  HeaderLeft,
  LogoContainer,
  WishListContainer,
  WishListIcon,
  BasketContainer,
  BasketIcon,
  BasketCount,
  WishListCount,
};
