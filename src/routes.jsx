import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import WishList from "./pages/Wishlist/WishList";
import AllCategories from "./pages/AllCategories/AllCategories";

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
    path:"/login",
    element: Login seyfesinin adini yaz for ex (<Login />)
  }
];

export default routes;
