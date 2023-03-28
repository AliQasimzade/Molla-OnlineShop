import { useRoutes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import routes from "./routes";
import Footer from "./components/Footer/Footer";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./redux/slices/productsSlice";

import { useEffect } from "react";
const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="App">
      {location.pathname != "/admin" &&
      location.pathname != "/admin/products" &&
      location.pathname != "/admin/orders" &&
      location.pathname != "/admin/users" &&
      location.pathname != "/user" &&
      location.pathname != "/user/login" &&
      location.pathname != "/user/signup" ? (
        <Header />
      ) : null}
      {useRoutes(routes)}
      {location.pathname != "/admin" &&
      location.pathname != "/admin/products" &&
      location.pathname != "/admin/orders" &&
      location.pathname != "/admin/users" &&
      location.pathname != "/user" &&
      location.pathname != "/user/login" &&
      location.pathname != "/user/signup" ? (
        <Footer />
      ) : null}
    </div>
  );
};

export default App;
