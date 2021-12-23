import React from "react";
export const Form = ({ getRecipe }) => {
  return (
    <form action="" style={{ margin: "10px 0px" }} className="mb-5">
      <input
        type="text"
        name="inputBoxForRecipe"
        style={{
          height: "24px",
          width: "180px",
          paddingLeft: "8px",
          paddingRight: "8px",
          borderRadius: "none",
        }}
        placeholder="Search Recipe"
      />
      <button onClick={getRecipe} type="submit" className="searchButton">
        Search
      </button>
      <p
        style={{ fontSize: "15px", display: "none" }}
        className="mt-1 text-danger"
        id="paraBelowInput"
      >
        Please enter recipe name
      </p>
    </form>
  );
};
