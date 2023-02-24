import React, { useState } from "react";
import {
  BasketContainer,
  BasketCount,
  BasketIcon,
  HeaderLeft,
  WishListContainer,
  WishListCount,
  WishListIcon,
} from "./HeaderStyled";
import { useSelector } from "react-redux";

const HeaderLinks = () => {

  const basketCount = useSelector(
    (state) => state.persistedReducer.basket.basket.length
  );
  const wishlistCount = useSelector(state => state.persistedReducer.wishlist.wishlist.length)
 
  return (
    <HeaderLeft>
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
