import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import WishList from "./pages/Wishlist/WishList";
import AllCategories from "./pages/AllCategories/AllCategories";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Admin from "./pages/admin/Admin";

const routes = [
  {
    path: "/",
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
    path:"products/:_id",
    element:<ProductDetail />
  },

  {
    path:'admin',
   element: <Admin />
  }
];

export default routes;
