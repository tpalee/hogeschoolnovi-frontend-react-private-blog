import React from 'react';
import {NavLink} from "react-router-dom";
import '../App.css';
import Button from "../Components/Button";

/*Nav imports the value of the state isAuthenticated */
function Nav({isAuthenticated, logout}) {
    return (
        <nav>
            <img id="bloglogo" src="https://cdn.pixabay.com/photo/2012/05/07/18/57/blog-49006_960_720.png" alt="blog"/>
            <ul id="navlist">
                <NavLink exact to="/">
                    <li><Button name="home" className="homebtn"/></li>
                </NavLink>
                {!isAuthenticated &&
                <NavLink to="/login">
                    <li><Button name="login" className="inlogbtn"/></li>
                </NavLink>}
                {isAuthenticated &&
                <NavLink to="/blogposts">
                    <li><Button name="Blog" className="blogbtn"/></li>
                </NavLink>}
                {isAuthenticated &&
                <NavLink to="/">
                    <li><Button name="logout" className="uitloggenbtn" handleClick={logout}></Button></li>
                </NavLink>}
            </ul>
        </nav>
    );
}

export default Nav;