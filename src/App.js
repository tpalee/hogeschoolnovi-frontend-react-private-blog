import React, {useState} from 'react';
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Blogposts from "./pages/Blogposts";
import Blog from "./pages/Blog";
import Nav from "./pages/Nav";
import posts from './data/posts.json';
import PrivateRoute from "./Components/PrivateRoute";

import {
    Switch,
    Route,
} from 'react-router-dom';




function App() {


    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

function loginClick(){
    toggleIsAuthenticated(true);
}

    function logoutClick(){
        toggleIsAuthenticated(false);
    }


    return (
        <div className="container">
            <Nav isAuthenticated={isAuthenticated} logout={logoutClick}/>
            <Switch>
                <Route exact path="/">
                <Home/>
                </Route>
                <Route path="/login">
                <Login login={loginClick}
                />
                </Route>

                <PrivateRoute isAuthenticated={isAuthenticated} exact path="/blogposts">
                    <Blogposts  posts={posts}/>
                </PrivateRoute>

                <PrivateRoute isAuthenticated={isAuthenticated} path="/blogposts/blog/:blogId">
                    <Blog posts={posts}/>
                </PrivateRoute>


            </Switch>
        </div>
    );
}

export default App;
