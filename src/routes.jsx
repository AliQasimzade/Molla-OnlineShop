import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import WishList from "./pages/Wishlist/WishList";
import AllCategories from "./pages/AllCategories/AllCategories";
import Login from "./pages/Login/Login";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Products from "./pages/admin/Pages/Products/Products";
import Orders from "./pages/admin/Pages/Orders/Orders";
import Users from "./pages/admin/Pages/Users/Users";
import AdminLayout from "./pages/admin/AdminLayout";
import Admins from "./pages/admin/Pages/Admins/Admins";
import Layout from "../Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "all-categories",
        element: <AllCategories />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "products/:_id",
        element: <ProductDetail />,
      },

      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Admins />,
          },
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "users",
            element: <Users />,
          },
        ],
      },
    ],
  },
];

export default routes;
