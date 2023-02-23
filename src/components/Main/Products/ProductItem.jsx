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
import { addBasket } from "../../../redux/slices/basketSlice";
import { addWish, removeWishItem } from "../../../redux/slices/wishListSlice";
import { useDispatch, useSelector } from "react-redux";
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(
    (state) => state.persistedReducer.wishlist.wishlist
  );
  const basket = useSelector((state) => state.persistedReducer.basket.basket);
  const addedBasket = (pro) => {
    dispatch(addBasket(pro));
    const copyWishlist = [...wishlist]
    const findWishItem =  copyWishlist.find(wi => wi._id === pro._id);
    if(findWishItem) {
      dispatch(removeWishItem(findWishItem))
    }
  };

  const addedWishList = (pro) => {
    dispatch(addWish(pro));
  };
  return (
    <Product>
      <ProductWrapper>
        <ProductWish
          onClick={() => addedWishList(product)}
          className={
            wishlist.find((wish) => wish._id === product._id)
              ? "fill"
              : "no-fill"
          }
          disabled={
            wishlist.find((wish) => wish._id === product._id) ? true : false
          }
        >
          <ProductWishIcon />
        </ProductWish>
        <ProductImageContainer to="/product">
          <ProductImage src={product.image} />
        </ProductImageContainer>
      </ProductWrapper>
      <ProductInfo>
        <ProductName>{product.title}</ProductName>
        <ProductPrice>${product.price}</ProductPrice>
        <ProductAddBtn
          onClick={() => addedBasket(product)}
          disabled={
            basket.find((bas) => bas._id === product._id) ? true : false
          }
        >
          {basket.find((bas) => bas._id === product._id)
            ? "added to cart"
            : "add to cart"}
          <ProductAddBtnIcon />
        </ProductAddBtn>
      </ProductInfo>
    </Product>
  );
};

export default ProductItem;
