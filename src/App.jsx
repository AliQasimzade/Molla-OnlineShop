import { useRoutes,useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import routes from "./routes";
import Footer from "./components/Footer/Footer";
const App = () => {

  const location = useLocation()
  return (
    <div className="App">
      <Header />
      {useRoutes(routes)}
      <Footer />
    </div>
  );
};

export default App;
