import React from "react";
import {
  MoreProductsBtn,
  MoreProductsBtnIcon,
  ProductsContainer,
  ProductsWrapper,
} from "./ProductsStyled";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector(
    (state) => state.persistedReducer.products.products
  );

  return (
    <ProductsContainer>
      <ProductsWrapper>
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </ProductsWrapper>
      <MoreProductsBtn to="/all-categories">
        <span>MORE PRODUCTS</span>
        <MoreProductsBtnIcon />
      </MoreProductsBtn>
    </ProductsContainer>
  );
};

export default Products;
