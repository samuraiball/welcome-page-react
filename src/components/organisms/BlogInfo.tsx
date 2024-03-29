import React, {useEffect, useReducer} from "react";
import SectionTitle from "../molecules/SectionTitle";
import Card from "../molecules/Card";
import BlogsReducer from "../../lib/reducer/BlogsReducer";
import BlogSearchBox from "../molecules/BlogSearchBox";
import WelcomePageApi from "../../lib/dirver/WelcomePageApi";
import Count from "../atoms/Count";
import styled from "styled-components";
import {BlogsState} from "../state/BlogsState";
import XSlideInContainer from "../animation/XSlideInContainer";
import YSlideInContainer from "../animation/YSlideInContainer";

const BlogCount = styled(Count)`
`

const blogsState: BlogsState = {
    searchTerm: "",
    rowBlogs: {feed: []},
    filteredBlogs: {feed: []},
};

const BlogInfo = () => {
    const [state, dispatch] = useReducer(BlogsReducer, blogsState)

    useEffect(() => {
        const fetchBlogs = async () => {
            const result = await new WelcomePageApi().fetchBlogs();
            dispatch({type: `fetchBlogs`, newWord: '', payload: result.data})
        }
        fetchBlogs().then();
    }, [])

    return (
        <div className="blog-info">
            <XSlideInContainer>
                <SectionTitle text="Posted Blogs"/>
                <BlogSearchBox searchTerm={state.searchTerm} dispatch={dispatch}/>
                <BlogCount number={state.filteredBlogs.feed.length}/>
            </XSlideInContainer>
            <YSlideInContainer>
                {state.filteredBlogs.feed.map(entry => (
                    <Card
                        href={entry.link.href}
                        title={entry.title}
                        summary={entry.summary}
                        tags={entry.category === null ? [] : entry.category}
                        published={entry.published}
                    />
                ))}
            </YSlideInContainer>
        </div>
    )
}

export default BlogInfo
