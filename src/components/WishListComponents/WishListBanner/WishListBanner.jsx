import React from "react";
import {
  WishListBannerContainer,
  WishListBannerContainerWrapper,
  WishListTitle,
} from "./WishListBannerStyled";
const WishListBanner = () => {
  return (
    <WishListBannerContainer>
      <WishListBannerContainerWrapper>
            <WishListTitle>
                WishList
            </WishListTitle>
      </WishListBannerContainerWrapper>
    </WishListBannerContainer>
  );
};

export default WishListBanner;
