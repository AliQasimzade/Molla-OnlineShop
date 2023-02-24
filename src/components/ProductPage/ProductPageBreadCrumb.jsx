import React from "react";
import {
  BreadCrumbContainer,
  BreadCrumbMenuListLink,
  BreadCrumbMenuListIcon,
  BreadCrumbMenu,
} from "./ProductPageStyled";

import { useParams } from "react-router-dom";

const ProductPageBreadCrumb = () => {
  const {_id}  = useParams();

  return (
    <BreadCrumbContainer>
      <BreadCrumbMenu>
        <BreadCrumbMenuListLink to="/">Home</BreadCrumbMenuListLink>
        <BreadCrumbMenuListIcon />
        <BreadCrumbMenuListLink to={`/products/${_id}`}>
          Product Detail
        </BreadCrumbMenuListLink>
      </BreadCrumbMenu>
    </BreadCrumbContainer>
  );
};

export default ProductPageBreadCrumb;
