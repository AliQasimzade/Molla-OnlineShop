import React from "react";
import {
  WishListBreadCrumbContainer,
  WishListBreadCrumbMenu,
  WishListBreadCrumbMenuList,
  WishListBreadCrumbMenuListIcon,
  WishListBreadCrumbMenuListLink,
} from "./WishListBreadCrumbStyled";
const WishListBreadCrumb = () => {
  return (
    <WishListBreadCrumbContainer>
      <WishListBreadCrumbMenu>
        <WishListBreadCrumbMenuListLink to="/">
          Home
        </WishListBreadCrumbMenuListLink>
        <WishListBreadCrumbMenuListIcon />
        <WishListBreadCrumbMenuListLink to="/all-categories">
          Wishlist
        </WishListBreadCrumbMenuListLink>
      </WishListBreadCrumbMenu>
    </WishListBreadCrumbContainer>
  );
};

export default WishListBreadCrumb;
