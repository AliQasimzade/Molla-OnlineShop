import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import GlobalStyles from "./GlobalStyles";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider context={helmetContext}>
        <GlobalStyles />
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
