import React, { useState, useEffect } from "react";
import Header from "./dashboard/Header";
import Recipes from "./Recipes";

import Axios from "axios";

function Api() {
  const [search, setSearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "0ef0aef1";
  const APP_KEY = "7ded734c1bd8878a67eb391686c09718";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    setRecipes(res.data.hits);
  };

  const onSearchClick = () => {
    getRecipes();
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="Apps">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default Api;
