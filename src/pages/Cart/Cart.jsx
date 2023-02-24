import React from "react";
import { Helmet } from "react-helmet-async";
import CartHeader from "../../components/CartHeader/CartHeader";
import CartLinks from "../../components/CartLinks/CartLinks";
import CartMain from "../../components/CartMain/CartMain";

const Cart = () => {
  return (
    <div>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <CartHeader/>
      <CartLinks/>
      <CartMain/>
    </div>
  );
};

export default Cart;