import React,{useState, useEffect} from 'react';
import './App.css';
import Header from './components/dashboard/Header';
import Recipes from './components/Recipes';
import Router from './components/Router';
import Axios from 'axios';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import SignUp from './components/SignUp';



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

    <BrowserRouter>

      
      
    
    <div className="App">
    <Nav/>
    <switch>
    <Route path ="/"/>
      
      <Route path ="/SignUp" component={SignUp}/>
      

      
    
      </switch>

     
      <div className="Apps">
      <Header 
       search={search} 
       onInputChange={onInputChange}
       onSearchClick={onSearchClick}/>
      

      <div className= "container">
      <Recipes  recipes = {recipes}/>
      </div>
    </div>
    </div>
    </BrowserRouter>
    
  );
}


const Home =() =>(
  <div>
    <h1>Home Page</h1>
  </div>
)
export default App;
