import React from 'react'
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
    CloseButton
} from "./CartMainStyle"
const CartMain = () => {
  return (
    <>
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
          <Product>
            <Col6>
              <ProductLink>
                <ProductImage src="https://portotheme.com/html/molla/assets/images/products/table/product-1.jpg"/>
                <ProductInfo>Beige knitted elastic runner shoes</ProductInfo>
              </ProductLink>             
            </Col6>
            <ColRight>
              <ProductInfo>	$84.00</ProductInfo>
              <PriceButton>
                <Button>+</Button>
                <Counter>1</Counter>
                <Button>-</Button>
              </PriceButton>
              <SumProduct>$84.00</SumProduct>
              <CloseButton> 
                <Close/>
              </CloseButton>
            </ColRight>
          </Product>
          <Product>
            <Col6>
            <ProductLink>
              <ProductImage src="https://portotheme.com/html/molla/assets/images/products/table/product-2.jpg"/>
              <ProductInfo>Blue utility pinafore denim dress</ProductInfo>
            </ProductLink>
              
            </Col6>
            <ColRight>
              <ProductInfo>$76.00</ProductInfo>
              <PriceButton>
                <Button>+</Button>
                <Counter>1</Counter>
                <Button>-</Button>
              </PriceButton>
              <SumProduct>$76.00</SumProduct>
              <Close/>
            </ColRight>
          </Product>
        </Product_container>
        <Card_container>
          <CardTitle>Cart Total</CardTitle>
          <PriceContainer>
            <PriceTitle> Subtotal: </PriceTitle>
            <PriceTitle> 	$160.00 </PriceTitle>
          </PriceContainer>
          <PriceContainer>
            <TotalTitle>Total:</TotalTitle>
            <TotalTitle>$160.00</TotalTitle>
          </PriceContainer>
          <CheckoutLink to="/checkout"> Proceed to checkout</CheckoutLink>
        </Card_container>
      </Container>
    </>
  )
}

export default CartMain