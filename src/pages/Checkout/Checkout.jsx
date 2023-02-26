import React from "react";
import {
  CheckoutHeaderText,
  BackGroundImage,
  CheckOutUl,
  CheckOutLi,
  ChekOutLiIcon,
  CheackOutIcon,
  Line,
} from "./CheckoutStyled";
import CheckOutContainer from "./CheckoutContainer";
import { BsChevronRight } from "react-icons/bs";

const Checkout = () => {
  return (
    <div>
      <BackGroundImage>
        <CheckoutHeaderText>Checkout</CheckoutHeaderText>
      </BackGroundImage>
      <CheckOutUl>
        <CheckOutLi>
          <CheackOutIcon to="/">Home</CheackOutIcon>
        </CheckOutLi>
        <ChekOutLiIcon><BsChevronRight/></ChekOutLiIcon>
        <CheckOutLi>
          <CheackOutIcon to="/checkout">Checkout</CheackOutIcon>
        </CheckOutLi>
      </CheckOutUl>
      <Line></Line>
      <CheckOutContainer />
    </div>
  );
};

export default Checkout;