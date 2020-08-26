import React,{useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Axios from 'axios';




function App() {
  const [search, setSearch]= useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID ="0ef0aef1";
  const APP_KEY ="7ded734c1bd8878a67eb391686c09718";

  useEffect( () => { 
    getRecipes();
    
  }, []);

  const getRecipes = async () => {
    const res  = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
   

   setRecipes(res.data.hits);
    };

    const onSearchClick = ()=>{
      getRecipes();
    };
  

  const onInputChange = (e) => {
   setSearch(e.target.value)
  };
  return (
    <div className="App">
    
      <Header 
       search={search} 
       onInputChange={onInputChange}
       onSearchClick={onSearchClick}/>

      <div className= "container">
      <Recipes  recipes = {recipes}/>
      </div>
    </div>
  );
}

export default App;
