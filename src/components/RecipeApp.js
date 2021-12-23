import React, { useEffect, useState } from "react";
import reactDom from "react-dom";
import { RecipeSearchOnTop } from "../RecipeSearchOnTop";
import "../index.css";
import { Form } from "../components/Form";
import Recipes from "../components/Recipes";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";

const API_KEY = "27c89716593f43a6a9cfde7d25918627";
const numberOfResults = 15;

export const RecipeApp = () => {
  const hideRecipeModal = () => {
    document.getElementById("recipeModal").style.display = "none";
  };

  const onButtonClick = ({ id, title, image }) => {
    document.getElementById("recipeModal").style.display = "flex";
    document.getElementById("recipeModal").style.alignItems = "center";
    document.getElementById("recipeModal").style.flexDirection = "column";
    const img = document.getElementById("imageInsideRecipeModal");
    img.setAttribute("src", image);
    img.style.width = "24vw";
    img.style.height = "40vh";
    img.style.marginBottom = "16px";
    const btn = document.getElementById("buttonInsideRecipeModal");
    btn.innerText = "Close";
    btn.setAttribute("class", "btn btn-danger");
    btn.style.marginBottom = "8px";
    btn.addEventListener("click", (e) => {
      hideRecipeModal();
    });
    const h5 = document.getElementById("h5InsideRecipeModal");
    h5.innerText = `${title}`;
  };

  const [recipes, setRecipes] = useState([]);
  const [finalRecipeName, setFinalRecipeName] = useState("");
  const setTheRecipes = (value) => {
    document.getElementById("temporaryLabel").style.display = "none";
    setRecipes(value);
    const recipes = JSON.stringify(value);
    localStorage.setItem("recipes", recipes);
  };
  useEffect(() => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    setRecipes(recipes);
    const recipeName = localStorage.getItem("recipeName");
    setFinalRecipeName(recipeName);
  }, []);
  const getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = document.getElementsByName("inputBoxForRecipe")[0].value;
    if (recipeName == "") {
      document.getElementById("paraBelowInput").style.display = "block";
    } else {
      document.getElementById("paraBelowInput").style.display = "none";
      setFinalRecipeName(recipeName);
      const recipeNameForLocalStorage = JSON.stringify(recipeName);
      localStorage.setItem("recipeName", recipeNameForLocalStorage);
      const api_url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${recipeName}&number=${numberOfResults}`;
      document.getElementsByName("inputBoxForRecipe")[0].value = "";
      document.getElementById("temporaryLabel").style.display = "block";
      const res = await fetch(api_url);

      const data = await res.json();
      setTimeout(async () => {
        setTheRecipes(data.results);
        if (data.results.length == 0) {
          document.getElementById("notFound").style.display = "block";
        } else {
          document.getElementById("notFound").style.display = "none";
        }
      }, 500);

      console.log(data.results);
    }
  };
  return (
    <div className="main_container">
      <RecipeSearchOnTop />
      <Form getRecipe={getRecipe} />

      <div>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/about-me"
          className="btn btn-success"
          id="aboutButton"
        >
          About Me
        </Link>
      </div>
      <div className="searchResultsFor">
        Search results for{" "}
        <span style={{ fontWeight: "bold", fontStyle: "normal" }}>
          {finalRecipeName}:
        </span>
      </div>
      <div id="notFound">
        <p>Oops, no results found!! Please try being more clear.</p>
      </div>
      <div id="recipeModal">
        <button id="buttonInsideRecipeModal"></button>
        <img
          id="imageInsideRecipeModal"
          src="hello.html"
          alt="Recipe Details"
        />
        <h5
          id="h5InsideRecipeModal"
          style={{ color: "white", textAlign: "center" }}
        ></h5>
      </div>
      <Recipes recipes={recipes} onButtonClick={onButtonClick} />
      <div id="temporaryLabel"></div>
      <div style={{ display: "none" }}>
        <Recipe recipes={recipes} />
      </div>
    </div>
  );
};
