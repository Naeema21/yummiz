import React from "react";
import RecipeCard from "./RecipeCard";
const Recipe = () => {
  return (
    <>
      <div className="recipe">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-2">
              <RecipeCard />
            </div>
            <div className="col-lg-4 mb-2">
              <RecipeCard />
            </div>
            <div className="col-lg-4 mb-2">
              <RecipeCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
