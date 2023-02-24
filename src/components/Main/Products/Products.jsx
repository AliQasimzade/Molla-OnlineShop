import React from "react";
import {
  MoreProductsBtn,
  MoreProductsBtnIcon,
  ProductsContainer,
  ProductsWrapper,
} from "./ProductsStyled";
import ProductItem from "./ProductItem";


const Products = ({items}) => {

  return (
    <ProductsContainer>
      <ProductsWrapper>
        {items.map((product) => (
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
