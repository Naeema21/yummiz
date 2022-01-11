import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const AddRecipe = () => {
  let navigate = useNavigate();

  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [recipe, setrecipe] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleRecipe = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      image: image,
      recipe: recipe,
      ingredients: ingredients
    };

    console.log(data);

    axios.post("https://api-yummiz.herokuapp.com/recipe", data).then((res) => {
      console.log(res);
      if (res.status === "200") {
        swal({
          title: "Thank You For adding",
          timer: 2000
        }).then(() => {
          navigate("/");
        });
      } else {
        swal({
          title: "Something went wrong!",
          timer: 2000
        });
      }
    });
  };
  return (
    <>
      <div className="addrecipe d-flex align-items-center">
        <div className="container">
          <div className="row ">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 card">
              <form onSubmit={handleRecipe}>
                <input
                  required
                  placeholder="title"
                  type="text"
                  className="form-control my-2"
                  onChange={(e) => setname(e.target.value)}
                />
                <input
                  required
                  className="form-control my-2"
                  placeholder="Enter image url"
                  type="text"
                  onChange={(e) => setimage(e.target.value)}
                />

                <textarea
                  required
                  className="form-control my-2"
                  placeholder="Ingredients"
                  rows={2}
                  onChange={(e) => setIngredients(e.target.value)}
                />

                <textarea
                  required
                  className="form-control my-2"
                  placeholder="recipe"
                  rows={5}
                  onChange={(e) => setrecipe(e.target.value)}
                />

                <button type="submit">Add Recipe</button>
              </form>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRecipe;
