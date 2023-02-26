import React, {useState} from "react";
import Banner from "../../components/Main/Banner/Banner";
import HomeFilterProducts from "../../components/HomeFilterProducts/HomeFilterProducts";
import Products from "../../components/Main/Products/Products";
import {useSelector} from "react-redux"
const Home = () => {
  const products = useSelector(state => state.persistedReducer.products.products);
  const copyProducts = products.length > 0 ? [...products] : []
const [items, setItems] = useState(copyProducts)
  return (
    <div>
      <Banner />
      <HomeFilterProducts setItems={setItems}/>
      <Products items={items}/>
    </div>
  );
};

export default Home;
