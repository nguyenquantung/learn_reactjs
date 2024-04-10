import { useEffect, useState } from "react";
import A from "./A";
function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getFood();
  }, [query]);
  const APP_ID = "a75242d3";
  const APP_KEY = "0ebab16aac3a57202ce59c4c482bed63";
  const GET_FOOD = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getFood = async () => {
    const response = await fetch(GET_FOOD);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch(" ");
  };

  return (
    <div>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h1>List-food</h1>
      {recipes.map((recipe) => (
        <A
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          calories={recipe.recipe.calories}
        />
      ))}
    </div>
  );
}

export default Recipe;
