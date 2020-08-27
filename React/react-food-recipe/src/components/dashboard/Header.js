import React  from 'react';
import {  NavLink,Link} from 'react-router-dom'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Header = props => {
    const {search, onInputChange, onSearchClick} = props;
    return (

  
      
    <div className = "jumbotron">
       
    
      
           
   <h1 className="display-1"><span class="material-icons brand-icon">
          fastfood
           </span> Food Recipe App</h1>
           

    <div class="input-group  mx-auto">
    <input
     type="text" 
     class="form-control"  
  
     placeholder="search your favorite recipe..." 
     value={search}
     onChange={onInputChange}
    />
    <div class="input-group-append">
    <button className="btn btn-dark" onClick = {onSearchClick}>
      Search Recipe</button>
      
    </div>
  </div>





 </div>
    );
};
export default Header;