import React from "react";
import { Link } from "react-router-dom";
const Recipes = ({ recipes, onButtonClick }) => {
  const recipesInDivision = [];
  for (let i = 0; i < recipes.length; i = i + 3) {
    const tempArray = [];
    for (let j = i; j < i + 3 && j < recipes.length; j++) {
      tempArray.push(recipes[j]);
    }
    recipesInDivision.push(tempArray);
  }
  return (
    <div className="container mb-5">
      {recipesInDivision.map((value, index) => {
        return (
          <div className="rowOfGrid" key={index}>
            {value.map((value, index) => {
              return (
                <div className="columnOfGrid" key={value.id}>
                  <img src={value.image} alt="Recipe Image" />
                  <button onClick={() => onButtonClick(value)}>
                    View Details
                  </button>
                  <p>
                    {value.title.length > 20
                      ? `${value.title.substring(0, 16)}...`
                      : `${value.title}`}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
