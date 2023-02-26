import { useRoutes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import routes from "./routes";
import Footer from "./components/Footer/Footer";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getProducts } from "./redux/slices/productsSlice";


import { useEffect } from "react";
const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const baseUrl = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
      const getAllProducts = async () => {
        const response = await axios.get(`${baseUrl}/products`);
        dispatch(getProducts(response.data));
      };
      getAllProducts();
    
  },[]);

  return (
    <div className="App">
      {location.pathname != "/admin" &&
      location.pathname != "/admin/products" &&
      location.pathname != "/admin/orders" &&
      location.pathname != "/admin/users" ? (
        <Header />
      ) : null}
      {useRoutes(routes)}
      {location.pathname != "/admin" &&
      location.pathname != "/admin/products" &&
      location.pathname != "/admin/orders" &&
      location.pathname != "/admin/users" ? (
        <Footer />
      ) : null}
    </div>
  );
};

export default App;
