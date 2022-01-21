import React from 'react';
import {useHistory, Link} from 'react-router-dom'
import './header.scss'


const Header = () => {
    let history = useHistory();
    return (
        <header className='header'>
            <nav className='#2196f3 blue header__nav '>
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">IT-RUN </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Main</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/category">Category</Link></li>
                        <li><button onClick={()=>history.goBack()}>GO BACK</button></li>
                        <li><button onClick={()=>history.goForward()}>GO FORWARD</button></li>
                    </ul>
                </div>
            </nav>


        </header>
    );
};

export default Header;