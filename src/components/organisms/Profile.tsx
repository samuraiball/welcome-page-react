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
import XSlideInContainer from "../animation/XSlideInContainer";
import YSlideInContainer from "../animation/YSlideInContainer";

const ProfileLink = styled(Link)`
  margin-top: 10px;
`

const Contents = styled.div`
  width: auto;
  margin-left: 10px;

  & > p {
    margin: 5px 0 0 0;
    line-height: 1.7rem;
  }

  @media (max-width: 480px) {
    margin-left: 0;

  }
`

const Title = styled.div`
  width: 478px;
  font-size: 23px;
  margin-top: 10px;
  margin-bottom: 7px;

  @media (max-width: 480px) {
    width: auto;
  }
`

const BlogStatisticsContainer = styled.div`
  width: 1024px;
  display: flex;

  @media (max-width: 480px) {
    width: auto;
    display: block;
  }
`

const CardContainer = styled.div`
  margin-left: -10px;
  animation: SlideCardIn 1.5s;

  @media (max-width: 480px) {
    margin-left: -5px;
  }

  @keyframes SlideCardIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
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
            <XSlideInContainer>
                <Avatar src={henohenomoheji}/>
                <div>
                    <SectionTitle text="About Me"/>
                    <Contents>
                        <p>
                            Software Engineer at Uzabase.<br/>
                            Java(エコシステム含む), Linux, Vim, コンテナ技術, アジャイル開発あたりに興味があります。<br/>
                        </p>
                        <Title>About This Site</Title>
                        <p>
                            このサイトは、私がCSSやフロントエンドの勉強のために作っています。<br/>
                            React、Typescript、styled-component等を用いて作成しています。<br/>
                            すべて生のCSSで作っていて（styled-componentは使っていますが）、CSSフレームワークやコンポーネントフレームワークは使っていません。
                        </p>
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
            </XSlideInContainer>
            <YSlideInContainer>
                <SectionTitle text="Blog Statistics"/>
            </YSlideInContainer>
            <BlogStatisticsContainer>
                <Contents>
                    <YSlideInContainer>
                        <Title>Latest Posts</Title>
                    </YSlideInContainer>
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
                    <YSlideInContainer>
                        <Title>Top 10 Tags</Title>
                    </YSlideInContainer>
                    <BarChart data={blogStatistics.data}/>
                </Contents>
            </BlogStatisticsContainer>
        </div>
    )
}

export default Profile
