import Recipe from "../src/Recipe/Recipe";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { Link, Route, Routes } from "react-router-dom";
import AddRecipe from "./Recipe/AddRecipe";
import RecipeDetails from "./Recipe/RecipeDetails";
export default function App() {
  return (
    <div className="App">
      <div className="header mb-3 ">
        <div className="container d-flex justify-content-between flex-wrap align-items-center">
          <Link to="/" className="head-title">
            Yummiz
          </Link>
          <Link to="/add-recipe" className="add">
            Add Recipe
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Recipe />}></Route>
        <Route path="/:id/:title" element={<RecipeDetails />}></Route>
        <Route path="/add-recipe" element={<AddRecipe />}></Route>
      </Routes>
    </div>
  );
}
