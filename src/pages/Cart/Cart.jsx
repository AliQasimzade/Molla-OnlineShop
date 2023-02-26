import React from "react";
import CartHeader from "../../components/CartHeader/CartHeader";
import CartLinks from "../../components/CartLinks/CartLinks";
import CartMain from "../../components/CartMain/CartMain";

const Cart = () => {
  return (
    <div>
      <CartHeader/>
      <CartLinks/>
      <CartMain/>
    </div>
  );
};

export default Cart;