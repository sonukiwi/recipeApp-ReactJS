import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React from "react";
import { RecipeApp } from "./RecipeApp";
import Recipe from "./Recipe";
import About from "./About";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeApp />}></Route>
        <Route path="/about-me" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
