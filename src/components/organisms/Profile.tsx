import React, {useEffect, useReducer} from "react";
import SectionTitle from "../molecules/SectionTitle";
import Link from "../atoms/Link";
import Avatar from "../atoms/Avatar";
import henohenomoheji from "../../assets/img/henohenomoheji.png"
import styled from "styled-components";
import BarChart from "../molecules/BarChart";
import BlogStatisticsReducer from "../../lib/reducer/BlogStatisticsReducer";
import WelcomePageApi from "../../lib/dirver/WelcomePageApi";
import {BlogStatistics} from "../state/BlogsState";


const ProfileLink = styled(Link)`
margin-top: 10px;
`
const Contents = styled.div`
margin-left: 10px;
@media (max-width: 480px) { 
margin-left: 0;
}
`

const initData: BlogStatistics = {data: []}

function Profile() {

    const [state, dispatch] = useReducer(BlogStatisticsReducer, initData)

    useEffect(() => {
        const fetchStatistics = async () => {
            const result = await new WelcomePageApi().fetchBlogStatistics();
            console.log(result.data)
            dispatch({type: 'fetchStatistics', payload: result.data})
        }
        fetchStatistics().then()
    }, [])

    return (
        <div className="profile">
            <Avatar src={henohenomoheji}/>
            <div>
                <SectionTitle text="About Me"/>
                <Contents>
                    <p>Software Engineer at Uzabase</p>
                    <p>Curious about Java, Linux, Vim, Container Technology, Scrum</p>
                </Contents>
            </div>
            <div className="links">
                <SectionTitle text="Links"/>
                <Contents>
                    <ProfileLink text="Twitter"
                                 logo="logo-twitter"
                                 src="https://twitter.com/yuya_hirooka"/>
                    <ProfileLink text="GitHub"
                                 logo="logo-github"
                                 src="https://github.com/samuraiball"/>
                    <ProfileLink text="はてなブログ"
                                 logo="pencil-outline"
                                 src="https://yuya-hirooka.hatenablog.com/"/>
                </Contents>
            </div>
            <div className="blog-statistics">
                <SectionTitle text="Blog Statistics"/>
                <Contents>
                    <BarChart graphTitle="Top 10 Tags" data={state.data}/>
                </Contents>
            </div>
        </div>
    )
}

export default Profile
