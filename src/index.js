import React, { useState } from "react";
import reactDom from "react-dom";
import { RecipeSearchOnTop } from "./RecipeSearchOnTop";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form } from "./components/Form";
import Recipes from "./components/Recipes";
import Router from "./components/Router";
import { RecipeApp } from "./components/RecipeApp";

reactDom.render(<Router />, document.getElementById("root"));
