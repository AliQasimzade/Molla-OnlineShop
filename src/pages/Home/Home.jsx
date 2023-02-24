import React, {useEffect, useState} from "react";
import { Helmet } from "react-helmet-async";
import HomeFilterProducts from "../../components/HomeFilterProducts/HomeFilterProducts";
import Banner from "../../components/Main/Banner/Banner";
import  Products  from "../../components/Main/Products/Products";
import { useDispatch,useSelector } from "react-redux";
import {getProducts} from "../../redux/slices/productsSlice";
import axios from "axios"
const Home = () => {
const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios.get("http://localhost:7777/api/products");
      dispatch(getProducts(response.data));
    };
    getAllProducts();
  }, []);

  const products = useSelector(state => state.persistedReducer.products.products);
  const [items, setItems] = useState(products);
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <HomeFilterProducts setItems={setItems}/>
      <Products items={items}/>
    </div>
  );
};

export default Home;
