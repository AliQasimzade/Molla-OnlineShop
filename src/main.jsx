import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import GlobalStyles from "./GlobalStyles";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <HelmetProvider context={helmetContext}>
            <GlobalStyles />
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
