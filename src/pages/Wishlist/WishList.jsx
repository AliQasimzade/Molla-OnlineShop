import React from "react";
import WishListBanner from "../../components/WishListComponents/WishListBanner/WishListBanner";
import WishListBreadCrumb from "../../components/WishListComponents/WishListBreadCrumb/WishListBreadCrumb";
import WishListTable from "../../components/WishListComponents/WishListTable/WishListTable";
const WishList = () => {
  return (
    <div>
    <WishListBanner />
    <WishListBreadCrumb />
    <WishListTable />
    </div>
  );
};

export default WishList;
