import React, {useEffect, useReducer} from "react";
import SectionTitle from "../molecules/SectionTitle";
import Card from "../molecules/Card";
import BlogsReducer from "../../lib/reducer/BlogsReducer";
import BlogSearchBox from "../molecules/BlogSearchBox";
import WelcomePageApi from "../../lib/dirver/WelcomePageApi";
import Count from "../atoms/Count";
import styled from "styled-components";
import {BlogsState} from "../state/BlogsState";

const BlogCount = styled(Count)`
`

const XSlidInContainer = styled.div`
animation:  XSlideIn 1s;

@keyframes  XSlideIn {
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
animation:  ScaleIn 1s;

@keyframes  ScaleIn {
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
            <XSlidInContainer>
                <SectionTitle text="Posted Blogs"/>
                <BlogSearchBox searchTerm={state.searchTerm} dispatch={dispatch}/>
                <BlogCount number={state.filteredBlogs.feed.length}/>
            </XSlidInContainer>
            <YSlideInContaier>
                {state.filteredBlogs.feed.map(entry => (
                    <Card
                        href={entry.link.href}
                        title={entry.title}
                        summary={entry.summary}
                        tags={entry.category === null ? [] : entry.category}
                        published={entry.published}
                    />
                ))}
            </YSlideInContaier>
        </div>
    )
}

export default BlogInfo
