import React, { useState } from "react";
import {
  BasketContainer,
  BasketCount,
  BasketIcon,
  HeaderLeft,
  SearchButton,
  SearchIcon,
  SearchInput,
  WishListContainer,
  WishListCount,
  WishListIcon,
} from "./HeaderStyled";
import { useSelector } from "react-redux";

const HeaderLinks = () => {
  const [open, setOpen] = useState(false);
  const basketCount = useSelector(
    (state) => state.persistedReducer.basket.basket.length
  );
  const wishlistCount = useSelector(state => state.persistedReducer.wishlist.wishlist.length)
  const toggleSearchBox = () => {
    setOpen(true);
  };

  const closeSearchBox = () => {
    setOpen(false);
  };
  return (
    <HeaderLeft>
      <SearchButton
        className={open ? "open" : null}
        onClick={toggleSearchBox}
        onMouseLeave={closeSearchBox}
      >
        <SearchInput />
        <SearchIcon />
      </SearchButton>
      <WishListContainer to="/wishlist">
        <WishListIcon />
        <WishListCount>{wishlistCount}</WishListCount>
      </WishListContainer>
      <BasketContainer to="/cart">
        <BasketIcon />
        <BasketCount>{basketCount}</BasketCount>
      </BasketContainer>
    </HeaderLeft>
  );
};

export default HeaderLinks;
