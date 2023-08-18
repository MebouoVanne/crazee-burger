
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/order/OrderPage";
import ErrorPage from "./components/error/ErrorPage";

function App() {
  return (
    //state(etat, données)

    //comportement

    //render

        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/orderpage/:username" element={<OrderPage />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>

  );
}

export default App;
