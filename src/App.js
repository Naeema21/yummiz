import Recipe from "../src/Recipe/Recipe";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import AddRecipe from "./Recipe/AddRecipe";
export default function App() {
  return (
    <div className="App">
      <div
        className="header mb-3 d-flex 
      justify-content-between flex-wrap"
      >
        <h1>Yummiz</h1>
        <a href="/add-recipe">Add Recipe</a>
      </div>
      <Routes>
        <Route path="/" element={<Recipe />}></Route>
        <Route path="/add-recipe" element={<AddRecipe />}></Route>
      </Routes>
    </div>
  );
}
