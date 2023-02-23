import React from "react";
import {
  Product,
  ProductAddBtn,
  ProductImage,
  ProductImageContainer,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductWish,
  ProductWrapper,
  ProductWishIcon,
  ProductAddBtnIcon,
} from "./ProductsStyled";

const ProductItem = () => {
  return (
    <Product to="/product">
      <ProductWrapper>
        <ProductWish>
          <ProductWishIcon />
        </ProductWish>
        <ProductImageContainer>
          <ProductImage src="http://127.0.0.1:5500/portotheme.com/html/molla/assets/images/demos/demo-11/products/product-1.jpg" />
        </ProductImageContainer>
      </ProductWrapper>
      <ProductInfo>
        <ProductName>Flow Slim Armchair</ProductName>
        <ProductPrice>$446.00</ProductPrice>
        <ProductAddBtn className="add_btn">
          <span>add to cart</span>
          <ProductAddBtnIcon />
        </ProductAddBtn>
      </ProductInfo>
    </Product>
  );
};

export default ProductItem;
