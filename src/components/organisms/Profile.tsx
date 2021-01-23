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


const XSlidInContainer = styled.div`
  animation: XSlideIn 1s;

  @keyframes XSlideIn {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

const YSlideInContaier = styled.div`
  animation: ScaleIn 1s;

  @keyframes ScaleIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`


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
            <XSlidInContainer>
                <Avatar src={henohenomoheji}/>
                <div>
                    <SectionTitle text="About Me"/>
                    <Contents>
                        <p>
                            Software Engineer at Uzabase.<br/>
                            Java(エコシステム含む), Linux, Vim, コンテナ技術, アジャイル開発あたりに興味があります。<br/>
                        </p>

                        <Title>Latest Posts</Title>
                    </Contents>
                </div>
                <div>
                    <SectionTitle text="About This Site"/>
                    <Contents>
                        <p>
                            このサイトはReact
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
            </XSlidInContainer>
            <YSlideInContaier>
                <SectionTitle text="Blog Statistics"/>
            </YSlideInContaier>
            <BlogStatisticsContainer>
                <Contents>
                    <YSlideInContaier>
                        <Title>Latest Posts</Title>
                    </YSlideInContaier>
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
                    <YSlideInContaier>
                        <Title>Top 10 Tags</Title>
                    </YSlideInContaier>
                    <BarChart data={blogStatistics.data}/>
                </Contents>
            </BlogStatisticsContainer>
        </div>
    )
}

export default Profile
