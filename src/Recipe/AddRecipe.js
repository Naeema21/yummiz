import React, { useState } from "react";
const AddRecipe = () => {
  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [recipe, setrecipe] = useState("");

  const handleRecipe = () => {
    const data = {
      name: name,
      image: image,
      recipe: recipe
    };

    console.log(data);
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
                  placeholder="title"
                  type="text"
                  className="form-control my-2"
                  onChange={(e) => setname(e.target.value)}
                />
                <input
                  className="form-control my-2"
                  placeholder="Enter image url"
                  type="text"
                  onChange={(e) => setimage(e.target.value)}
                />

                <textarea
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