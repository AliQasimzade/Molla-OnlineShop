import React from "react";
import { toast } from "react-toastify";
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
import Skeleton from "@mui/material/Skeleton";
import { addBasket } from "../../../redux/slices/basketSlice";
import { addWish } from "../../../redux/slices/wishListSlice";
import { useDispatch, useSelector } from "react-redux";
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(
    (state) => state.persistedReducer.wishlist.wishlist
  );
  const user = useSelector((state) => state.persistedReducer.user.user);
  const basket = useSelector((state) => state.persistedReducer.basket.basket);
  const addedBasket = (pro) => {
    if (!user.userName) {
      toast.warning("Please Login !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else {
      const copyPro = { ...pro, count: 1 };
      dispatch(addBasket(copyPro));
    }
  };

  const addedWishList = (pro) => {
    if (!user.userName) {
      toast.warning("Please Login !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else {
      dispatch(addWish(pro));
    }
  };
  return (
    <Product>
      <ProductWrapper>
        <ProductWish
          onClick={() => addedWishList(product)}
          disabled={
            wishlist.find((wish) => wish._id === product._id) ? true : false
          }
        >
          <ProductWishIcon />
        </ProductWish>
        <ProductImageContainer to={`/products/${product._id}`}>
          <ProductImage src={product.image} effect="blur" />
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
