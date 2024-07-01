import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home";
import { Faq } from "../pages/faq";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;