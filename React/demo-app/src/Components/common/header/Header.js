import React,{Component} from 'react';
import {Link} from "react-router-dom";


import *as routes from '../../../constants/routes';

class Header extends Component{
    constructor(props){
        super(props);

        this.state= {
            searchText:"",
        }
    }

handleTextChange = (event)=>{
    this.setState({
    searchText:event.target.value,
    });

};


    render(){
        return (
            <header className="header">
                <div className = "container">
                    <div className = "header_top">
                    <ul className = "nav">
                        <li>
                            <Link to = {routes.HOME} title="Homes">
                                HOME
                            </Link>
                             </li>
                             <li>
                             <Link to = {routes.FAVOURITES} title="favourites">
                                FAVOURITES
                            </Link>
                                 
                             </li>
                             </ul>

                </div>
                <div  className = "header_bottom">
                    <h1>The Beer Bank</h1>
                    <span>Find your favourite beer here</span>
                    <form>
                        <input type ="Search"
                         placeholder = "Search beer name"
                          value= {this.state.searchText}
                           onChange={this.handleTextChange}
                          />  
                          </form>

                </div>
                </div>

            </header>

        );
        
    }
}

export default Header;

