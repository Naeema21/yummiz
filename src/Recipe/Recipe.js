import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";
const Recipe = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api-yummiz.herokuapp.com/recipe").then((res) => {
      setData(res.data.data);
    });
  }, []);
  return (
    <>
      <div className="recipe">
        <div className="container">
          <div className="row">
            {data.map((v, i) => {
              return (
                <div className="col-lg-4 mb-2" key={i}>
                  <RecipeCard title={v.title} img={v.img} process={v.process} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
