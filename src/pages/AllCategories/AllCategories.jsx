import React from "react";
import AllCatBanner from "../../components/AllCatBanner/AllCatBanner";
import AllCatPageContent from "../../components/AllCatPageContent/AllCatPageContent";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const AllCategories = () => {
  return (
    <div>
      <AllCatBanner />
      <BreadCrumb />
      <AllCatPageContent />
    </div>
  )
};

export default AllCategories;
