import React, {useEffect, useReducer} from "react";
import SectionTitle from "../atoms/SectionTitle";
import Card from "../molecules/Card";
import BlogsReducer from "../../lib/reducer/BlogsReducer";
import BlogSearchBox from "../molecules/BlogSearchBox";
import BlogsState from "../state/BlogsState";
import WelcomePageApi from "../../lib/dirver/WelcomePageApi";

const BlogInfo = (props) => {
    const [state, dispatch] = useReducer(BlogsReducer, [], BlogsState)

    useEffect(() => {
        const fetchBlogs = async () => {
            const result = await new WelcomePageApi().fetchBlogs();
            dispatch({type: 'fetchBlogs', payload: result.data})
        }
        fetchBlogs().then();
    }, [])

    return (
        <div className="blog-info">
            <SectionTitle>Posted Blogs</SectionTitle>
            <BlogSearchBox searchTerm={state.searchTerm} dispatch={dispatch}/>

            {state.filteredBlogs.feed.map(entry => (
                <Card
                    href={entry.link.href}
                    title={entry.title}
                    summary={entry.summary}
                    tags={entry.category === null ? [] : entry.category}
                    published={entry.published}
                />
            ))}
        </div>
    )
}

export default BlogInfo
