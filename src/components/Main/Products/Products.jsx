import React from "react";
import {
  MoreProductsBtn,
  MoreProductsBtnIcon,
  ProductsContainer,
  ProductsWrapper,
} from "./ProductsStyled";
import ProductItem from "./ProductItem";
const Products = () => {
  return (
    <ProductsContainer>
      <ProductsWrapper>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ProductsWrapper>
      <MoreProductsBtn to="/all-categories">
        <span>MORE PRODUCTS</span>
        <MoreProductsBtnIcon />
      </MoreProductsBtn>
    </ProductsContainer>
  );
};

export default Products;
