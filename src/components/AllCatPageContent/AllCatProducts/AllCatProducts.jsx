import React from "react";
import { ToastContainer, toast } from "react-toastify";
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
  const user = useSelector(state => state.persistedReducer.user.user)
  const basket = useSelector((state) => state.persistedReducer.basket.basket);
  const addedBasket = (pro) => {
    if(!user.userName) {
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
    }else {
      const copyPro = {...pro, count:1}
      dispatch(addBasket(copyPro));
    }
  };

  const addedWishList = (pro) => {
    if(!user.userName) {
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
    }else {
      dispatch(addWish(pro));
    }
  };
  return (
    <AllProductsContainer>
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
