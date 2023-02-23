import React from "react";
import { Helmet } from "react-helmet-async";
import WishListBanner from "../../components/WishListComponents/WishListBanner/WishListBanner";
import WishListBreadCrumb from "../../components/WishListComponents/WishListBreadCrumb/WishListBreadCrumb";
import WishListTable from "../../components/WishListComponents/WishListTable/WishListTable";
const WishList = () => {
  return (
    <div>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
    <WishListBanner />
    <WishListBreadCrumb />
    <WishListTable />
    </div>
  );
};

export default WishList;
