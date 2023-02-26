import React from "react";
import {
  MoreProductsBtn,
  MoreProductsBtnIcon,
  ProductsContainer,
  ProductsWrapper,
} from "./ProductsStyled";
import ProductItem from "./ProductItem";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


const Products = ({items}) => {
console.log(items)

  return (
    <ProductsContainer>
       <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
      <ProductsWrapper>
        {items.length > 0 && items.map((product) => (
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
