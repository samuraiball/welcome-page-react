import React from 'react';

import './App.css';
import Profile from "./components/organisms/Profile";
import BlogInfo from "./components/organisms/BlogInfo";
import SideBar from "./components/organisms/SideBar";

import {BrowserRouter as Router,  Route, Switch} from "react-router-dom";


function App() {
    return (
        <div className="welcome-page">
            <Router>
                <SideBar/>
                <div className="contents">
                    <Switch>
                        <Route exact path="/" component={Profile}/>
                        <Route path="/blogs" component={BlogInfo}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}


export default App;
