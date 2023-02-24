import React from "react";
import {
  AllProductsContainer,
  AllProductsWrapper,
  ProductCart,
  ProductCartImage,
  ProductCartImageContainer,
  ProductCartWrapper,
  ProductCatName,
  ProductPrice,
  ProductTitle,
  ProductWishBtn,
  ProductWishIcon,
  ProductTop,
  ProductAddToCart,
  ProductAddToCartIcon,
  ProductBottom,
} from "./AllCatProductsStyled";
import { useSelector, useDispatch } from "react-redux";
import { addBasket } from "../../../redux/slices/basketSlice";
import { addWish } from "../../../redux/slices/wishListSlice";

const AllCatProducts = ({items, setItems}) => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.persistedReducer.products.products
  );
  const wishlist = useSelector(
    (state) => state.persistedReducer.wishlist.wishlist
  );
  const basket = useSelector((state) => state.persistedReducer.basket.basket);
  const addedBasket = (pro) => {
    dispatch(addBasket(pro));
  };

  const addedWishList = (pro) => {
    dispatch(addWish(pro));
  };
  return (
    <AllProductsContainer>
      <AllProductsWrapper>
        {items.map((product) => (
          <ProductCart key={product._id}>
            <ProductCartWrapper>
              <ProductTop>
                <ProductWishBtn
                  onClick={() => addedWishList(product)}
                  disabled={
                    wishlist.find((wish) => wish._id === product._id)
                      ? true
                      : false
                  }
                >
                  <ProductWishIcon />
                </ProductWishBtn>
                <ProductCartImageContainer to={`/products/${product._id}`}>
                  <ProductCartImage src={product.image} />
                </ProductCartImageContainer>
                <ProductAddToCart
                  onClick={() => addedBasket(product)}
                  disabled={
                    basket.find((bas) => bas._id === product._id) ? true : false
                  }
                >
                  <ProductAddToCartIcon />
                  <span>
                    {basket.find((bas) => bas._id === product._id)
                      ? "added to cart"
                      : "add to cart"}
                  </span>
                </ProductAddToCart>
              </ProductTop>
              <ProductBottom>
                <ProductCatName>{product.title}</ProductCatName>
                <ProductTitle>{product.description}</ProductTitle>
                <ProductPrice>${product.price}</ProductPrice>
              </ProductBottom>
            </ProductCartWrapper>
          </ProductCart>
        ))}
      </AllProductsWrapper>
    </AllProductsContainer>
  );
};

export default AllCatProducts;
