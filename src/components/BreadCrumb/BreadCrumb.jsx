import React from "react";
import {
  BreadCrumbContainer,
  BreadCrumbMenu,
  BreadCrumbMenuListIcon,
  BreadCrumbMenuList,
  BreadCrumbMenuListLink,
} from "./BreadCrumbStyled";

const BreadCrumb = () => {
  return (
    <BreadCrumbContainer>
      <BreadCrumbMenu>
          <BreadCrumbMenuListLink to="/">Home</BreadCrumbMenuListLink>
          <BreadCrumbMenuListIcon />
          <BreadCrumbMenuListLink to="/all-categories">
            All Categories
          </BreadCrumbMenuListLink>
      </BreadCrumbMenu>
    </BreadCrumbContainer>
  );
};

export default BreadCrumb;
