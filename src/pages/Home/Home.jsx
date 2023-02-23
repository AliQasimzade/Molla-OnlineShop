import React from "react";
import { Helmet } from "react-helmet-async";
import HomeFilterProducts from "../../components/HomeFilterProducts/HomeFilterProducts";
import Banner from "../../components/Main/Banner/Banner";
import  Products  from "../../components/Main/Products/Products";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <HomeFilterProducts />
      <Products />
    </div>
  );
};

export default Home;
