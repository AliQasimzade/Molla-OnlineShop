import React, { lazy, Suspense } from "react";
import {
  MoreProductsBtn,
  MoreProductsBtnIcon,
  ProductsContainer,
  ProductsWrapper,
} from "./ProductsStyled";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ProductItem = lazy(() => import("./ProductItem"));
const Products = ({ items }) => {
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
        {items.length > 0 ? (
          items.map((product) => (
            <Suspense
              key={product._id}
              fallback={
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  style={{ width: "220px", height: "220px", margin: "5px" }}
                />
              }
            >
              <ProductItem key={product._id} product={product} />
            </Suspense>
          ))
        ) : (
          <Stack
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Skeleton variant="rounded" width={167} height={200} />
            <Skeleton variant="rounded" width={167} height={200} />
            <Skeleton variant="rounded" width={167} height={200} />
            <Skeleton variant="rounded" width={167} height={200} />
            <Skeleton variant="rounded" width={167} height={200} />
            <Skeleton variant="rounded" width={167} height={200} />
            <Skeleton variant="rounded" width={167} height={200} />
            <Skeleton variant="rounded" width={167} height={200} />
            <Skeleton variant="rounded" width={167} height={200} />
            <Skeleton variant="rounded" width={167} height={200} />
            <Skeleton variant="rounded" width={167} height={200} />
            <Skeleton variant="rounded" width={167} height={200} />
          </Stack>
        )}
      </ProductsWrapper>
      <MoreProductsBtn to="/all-categories">
        <span>MORE PRODUCTS</span>
        <MoreProductsBtnIcon />
      </MoreProductsBtn>
    </ProductsContainer>
  );
};

export default Products;
