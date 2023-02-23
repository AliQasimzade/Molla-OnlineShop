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

const HeaderLinks = () => {
  const [open, setOpen] = useState(false);

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
      <WishListContainer>
        <WishListIcon />
        <WishListCount>2</WishListCount>
      </WishListContainer>
      <BasketContainer>
        <BasketIcon />
        <BasketCount>2</BasketCount>
      </BasketContainer>
    </HeaderLeft>
  );
};

export default HeaderLinks;
