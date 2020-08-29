import React from 'react';
import './App.css';
import Profile from "./components/organisms/Profile";
import BlogInfo from "./components/organisms/BlogInfo";
import SideNavi from "./components/organisms/SideNavi";


function App() {
    return (
        <div className="welcome-page">
            <div className="sidenav">
                <SideNavi/>
            </div>
            <div className="contents">
                <Profile/>
                <BlogInfo/>
            </div>
        </div>
    );
}


export default App;
