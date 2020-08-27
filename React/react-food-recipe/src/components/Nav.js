import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <nav>
                <ul className="nav-Links">
                    <Link to ='/home'>
                  <button>Home</button>
                  </Link>

                  <Link to ="/SignUp">
                   <button>SignUp</button>
                   </Link>
                    
                </ul>
        </nav>
    )
}
export default Nav;