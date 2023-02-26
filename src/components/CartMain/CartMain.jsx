import React from "react";
import {
  Container,
  Product_container,
  ProductTitle,
  Thead,
  Arrow,
  Product,
  Col6,
  ProductImage,
  ProductInfo,
  PriceButton,
  Button,
  Counter,
  SumProduct,
  Close,
  Card_container,
  PriceTitle,
  PriceContainer,
  CardTitle,
  TotalTitle,
  CheckoutLink,
  Col6_wrapper,
  ColRight,
  ProductLink,
  Text_container,
  CloseButton,
} from "./CartMainStyle";

import { useSelector, useDispatch } from "react-redux";
import {
  removeBasketItem,
  incQuantity,
  decQuantity,
} from "../../redux/slices/basketSlice";
const CartMain = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.persistedReducer.basket.basket);
  const copyBasket = [...basket];
  const totalPrice = copyBasket.reduce(
    (acc, val) => acc + val.price * val.count,
    0
  );

  const removeBasItem = (ba) => {
    dispatch(removeBasketItem(ba));
  };
  const incrementQuantity = (ba) => {
    dispatch(incQuantity(ba));
  };
  const decrementQuantity = (ba) => {
    dispatch(decQuantity(ba));
  };
  return (
    <>
      {basket.length > 0 ? (
        <Container>
          <Product_container>
            <ProductTitle>
              <Col6>
                <Thead>Product</Thead>
              </Col6>
              <Col6>
                <Col6_wrapper>
                  <Text_container>
                    <Thead>Price</Thead>
                  </Text_container>
                  <Text_container>
                    <Thead>Quantity</Thead>
                  </Text_container>
                  <Text_container>
                    <Thead>Total</Thead>
                  </Text_container>
                </Col6_wrapper>
              </Col6>
            </ProductTitle>
            {basket.map((bas) => (
              <Product key={bas._id}>
                <Col6>
                  <ProductLink>
                    <ProductImage src={bas.image} />
                    <ProductInfo>{bas.title}</ProductInfo>
                  </ProductLink>
                </Col6>
                <ColRight>
                  <ProductInfo> ${bas.price}</ProductInfo>
                  <PriceButton>
                    <Button onClick={() => incrementQuantity(bas)}>+</Button>
                    <Counter>{bas.count}</Counter>
                    <Button onClick={() => decrementQuantity(bas)}>-</Button>
                  </PriceButton>
                  <SumProduct>${bas.price}</SumProduct>
                  <CloseButton onClick={() => removeBasItem(bas)}>
                    <Close />
                  </CloseButton>
                </ColRight>
              </Product>
            ))}
          </Product_container>
          <Card_container>
            <CardTitle>Cart Total</CardTitle>
            <PriceContainer>
              <PriceTitle> Subtotal: </PriceTitle>
              <PriceTitle> ${totalPrice} </PriceTitle>
            </PriceContainer>
            <PriceContainer>
              <TotalTitle>Total:</TotalTitle>
              <TotalTitle>${totalPrice}</TotalTitle>
            </PriceContainer>
            <CheckoutLink to="/checkout"> Proceed to checkout</CheckoutLink>
          </Card_container>
        </Container>
      ) : (
        <Container>
          <Product_container>
            <h1>No item in Cart</h1>
          </Product_container>
        </Container>
      )}
    </>
  );
};

export default CartMain;
