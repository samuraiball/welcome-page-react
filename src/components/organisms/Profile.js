import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import Link from "../atoms/Link";
import Avatar from "../atoms/Avatar";
import henohenomoheji from "../../assets/img/henohenomoheji.png"
import styled from "styled-components";

const ProfileLink = styled(Link)`
margin-top: 10px;
`

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
                <ProfileLink text="Twitter"
                             logo="logo-twitter"
                             src="https://twitter.com/yuya_hirooka"/>
                <ProfileLink text="GitHub"
                             logo="logo-github"
                             src="https://github.com/samuraiball"/>
                <ProfileLink text="はてなブログ"
                             logo="pencil-outline"
                             src="https://yuya-hirooka.hatenablog.com/"/>
            </div>
        </div>
    )
}

export default Profile
