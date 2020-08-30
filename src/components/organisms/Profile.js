import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import Link from "../atoms/Link";
import Avatar from "../atoms/Avatar";
import henohenomoheji from "../../assets/img/henohenomoheji.png"


function Profile() {
    return (
        <div className="profile">
            <Avatar src={henohenomoheji}/>
            <div>
                <SectionTitle>About Me</SectionTitle>
                <p>
                    Software Engineer at Uzabase
                </p>
                <p>
                    Curious about Java, Linux, Vim, Container Technology, Scrum
                </p>
            </div>
            <div className="links">
                <SectionTitle>Links</SectionTitle>
                <ul>
                    <li><Link text="Twitter" src="https://twitter.com/yuya_hirooka">aaa</Link></li>
                    <li><Link text="GitHub" src="https://github.com/samuraiball"/></li>
                    <li><Link text="はてなブログ" src="https://yuya-hirooka.hatenablog.com/"/></li>
                </ul>
            </div>
        </div>
    )
}

export default Profile
