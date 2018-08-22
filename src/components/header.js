import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <header>
            <Link to="/">Music db</Link>
        <div className="back">
            <Link to="/"><span>Back</span></Link>
        </div>
        </header>
    )
}

export default Header;