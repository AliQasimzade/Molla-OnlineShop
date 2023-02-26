import React,{useEffect,useState} from "react";
import ProductPageBreadCrumb from "./ProductPageBreadCrumb";
import {
  ProductPageContainer,
  ProductPageWrapper,
  ProductPageContent,
  ProductPageContentInfo,
  ProductPageInfoTitle,
  ProductPageInfoPrize,
  ProductPageInfoDesc,
  ProductAddToCartIcon,
  ProductPageAddToCart,
  ProductPageWishBtn,
  ProductPageWishIcon,
} from "./ProductPageStyled";
import Zoom from "react-img-zoom";
import { useParams } from "react-router-dom";
import { addBasket } from "../../redux/slices/basketSlice";
import { addWish } from "../../redux/slices/wishListSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductPage = () => {
  const { _id } = useParams();
  const products = useSelector(
    (state) => state.persistedReducer.products.products
  );
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.persistedReducer.basket.basket);
  const wishlist = useSelector(
    (state) => state.persistedReducer.wishlist.wishlist
  );
  const user = useSelector((state) => state.persistedReducer.user.user);
  const [findInfo,setFindInfo] = useState(false)
  useEffect(() => {
   if(products) {
    const res = [...products].find((product) => product._id === _id);
    setFindInfo(res)
   }
  },[products])

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
    <ProductPageContainer>
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
      <ProductPageWrapper>
        <ProductPageBreadCrumb />
       {findInfo !== false &&  <ProductPageContent>
          <Zoom
            img={findInfo?.image}
            transitionTime={0.26}
            zoomScale={2}
            width={457}
            height={457}
          />
          <ProductPageContentInfo>
            <div>
              <ProductPageInfoTitle>{findInfo?.title}</ProductPageInfoTitle>
              <ProductPageInfoPrize>$ {findInfo?.price}</ProductPageInfoPrize>
              <ProductPageInfoDesc>{findInfo?.description}</ProductPageInfoDesc>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <ProductPageAddToCart
                onClick={() => addedBasket(findInfo)}
                disabled={
                  basket.find((bas) => bas._id === findInfo._id) ? true : false
                }
              >
                <ProductAddToCartIcon />
                <span>
                  {basket.find((bas) => bas._id === findInfo._id)
                    ? "added to cart"
                    : "add to cart"}
                </span>
              </ProductPageAddToCart>
              <ProductPageWishBtn
                onClick={() => addedWishList(findInfo)}
                disabled={
                  wishlist.find((wish) => wish._id === findInfo._id)
                    ? true
                    : false
                }
              >
                <ProductPageWishIcon />
                <span>Add to wishlist</span>
              </ProductPageWishBtn>
            </div>
          </ProductPageContentInfo>
        </ProductPageContent>}
      </ProductPageWrapper>
    </ProductPageContainer>
  );
};

export default ProductPage;
