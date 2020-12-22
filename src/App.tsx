import React from 'react';

import './App.css';
import Profile from "./components/organisms/Profile";
import BlogInfo from "./components/organisms/BlogInfo";
import SideBar from "./components/organisms/SideBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Helmet} from "react-helmet";

function App() {
    return (
        <div className="welcome-page">
            <Helmet>
                <meta property="og:title" content="Welcome Page"/>
                <meta property="og:type" content="text/html"/>
                <meta property="og:image"
                      content="https://ja.gravatar.com/userimage/126288691/c56d452d930768a5f13a966389ddf39e.png"/>
                <meta property="og:url" content="hirooak.dev"/>
                <meta property="og:description"
                      content="Software Engineer at Uzabase. Curious about Java, Linux, Vim, Container Technology, Scrum"/>
            </Helmet>
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
