import React, { useState, useEffect } from "react";
import Banner from "../../components/Main/Banner/Banner";
import HomeFilterProducts from "../../components/HomeFilterProducts/HomeFilterProducts";
import Products from "../../components/Main/Products/Products";
import { useSelector } from "react-redux";
const Home = () => {
  const products = useSelector((state) => state.products.products);
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (products) {
      setItems([...products]);
    }
  }, [products]);

  return (
    <div>
      <Banner />
      <HomeFilterProducts setItems={setItems} />
      <Products items={items} />
    </div>
  );
};

export default Home;
