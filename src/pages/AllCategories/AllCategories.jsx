import React from "react";
import { Helmet } from "react-helmet-async";
import AllCatBanner from "../../components/AllCatBanner/AllCatBanner";
import AllCatPageContent from "../../components/AllCatPageContent/AllCatPageContent";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const AllCategories = () => {
  return (
    <div>
      <Helmet>
        <title>All Categories</title>
      </Helmet>
      <AllCatBanner />
      <BreadCrumb />
      <AllCatPageContent />
    </div>
  )
};

export default AllCategories;
