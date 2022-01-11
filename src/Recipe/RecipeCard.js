import React from "react";

const RecipeCard = React.memo((props) => {
  return (
    <div className="card">
      <div className="card-head">
        <img src={props.img} className="img-fluid" />
      </div>
      <div className="card-body">
        <h1>{props.title}</h1>
        <p>{props.process.substring(0, 85)}...</p>
      </div>
    </div>
  );
});

export default RecipeCard;
