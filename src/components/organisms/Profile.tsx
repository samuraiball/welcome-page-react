import React, {useEffect, useReducer} from "react";
import SectionTitle from "../molecules/SectionTitle";
import Link from "../atoms/Link";
import Avatar from "../atoms/Avatar";
import henohenomoheji from "../../assets/img/henohenomoheji.png"
import styled from "styled-components";
import BarChart from "../molecules/BarChart";
import BlogStatisticsReducer from "../../lib/reducer/BlogStatisticsReducer";
import WelcomePageApi from "../../lib/dirver/WelcomePageApi";
import {BlogsState, BlogStatistics} from "../state/BlogsState";
import BlogsReducer from "../../lib/reducer/BlogsReducer";
import Card from "../molecules/Card";


const ProfileLink = styled(Link)`
margin-top: 10px;
`
const Contents = styled.div`
margin-left: 10px;
@media (max-width: 480px) { 
margin-left: 0;
}
`
const Title = styled.div`
font-size: 23px;
margin-top: 3px;
margin-bottom: 7px;
`

const BlogStatisticsContainer = styled.div`
width: 1000px;
display: flex;

@media (max-width: 480px) { 
width: auto;
display: block;
}
`

const CardContainer = styled.div`
margin-left: -10px;

@media (max-width: 480px) { 
margin: 0 5px 0 -5px;
}
`

const initStatistics: BlogStatistics = {data: []}

const blogsState: BlogsState = {
    searchTerm: "",
    rowBlogs: {feed: []},
    filteredBlogs: {feed: []},
};

function Profile() {

    const [blogStatistics, dispatchStatistics] = useReducer(BlogStatisticsReducer, initStatistics)
    const [blogs, dispatchBlogs] = useReducer(BlogsReducer, blogsState)

    useEffect(() => {
        const fetchData = async () => {
            const statistics = await new WelcomePageApi().fetchBlogStatistics();
            const blogs = await new WelcomePageApi().fetchBlogs();
            dispatchBlogs({type: `fetchBlogs`, newWord: '', payload: blogs.data});
            dispatchStatistics({type: 'fetchStatistics', payload: statistics.data});
        }
        fetchData().then()
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
            <SectionTitle text="Blog Statistics"/>
            <BlogStatisticsContainer>
                <Contents>
                    <Title>Latest Posts</Title>
                    <CardContainer>
                        {blogs.filteredBlogs.feed.slice(0, 3).map(entry => (
                            <Card
                                href={entry.link.href}
                                title={entry.title}
                                summary=""
                                tags={entry.category === null ? [] : entry.category}
                                published={entry.published}
                            />
                        ))}
                    </CardContainer>
                </Contents>
                <Contents>
                    <BarChart graphTitle="Top 10 Tags" data={blogStatistics.data}/>
                </Contents>
            </BlogStatisticsContainer>
        </div>
    )
}

export default Profile
