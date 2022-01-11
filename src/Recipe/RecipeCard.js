import React from "react";

const RecipeCard = () => {
  return (
    <div className="card">
      <div className="card-head">
        <img
          alt="recipe "
          src="https://i.ibb.co/tpCdNcX/stew.jpg"
          className="img-fluid"
        />
      </div>
      <div className="card-body">
        <h1>Recipe Title</h1>
        <p>lorem ipsum</p>
      </div>
    </div>
  );
};

export default RecipeCard;
