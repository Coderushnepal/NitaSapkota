import React from 'react'
import { Link } from 'react-router-dom'

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return(
        <nav  className="nav-wrapper grey darken-3">
            <div className="containerr">
            
                <Link to = '/' className="brand-logo">Food Recipe</Link>
                <SignedInLinks/>
                <SignedOutLinks/>




              

            </div>
        </nav>
    )
}

export default Navbar;