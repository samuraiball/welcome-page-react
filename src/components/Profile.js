import React from "react";
import './Profile.css'

function Profile() {
    return (
        <div className="profile">
            <img className="image" alt="" src="https://ja.gravatar.com/userimage/126288691/18432f3b22b866e0bb7b59d466f325bd.png"/>
            <div className="about-me">
                <div className="section-title">
                   About Me
                </div>
                <p>
                    Software Engineer at Uzabase
                </p>

            </div>
            <div className="links">
                <div className="section-title">
                    Links
                </div>
                <ul>
                    <li><a href="https://twitter.com/yuya_hirooka">Twitter</a></li>
                    <li><a href="https://github.com/samuraiball">GitHub</a></li>
                    <li><a href="https://yuya-hirooka.hatenablog.com/">はてなブログ</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Profile
