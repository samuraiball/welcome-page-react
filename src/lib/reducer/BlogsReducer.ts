import {Article, BlogsState} from "../../components/state/BlogsState";
import {BlogsAction} from "./actions/BlogsAction";

const BlogsReducer = (state: BlogsState, action: BlogsAction): BlogsState => {
    switch (action.type) {
        case 'filterBlogs':
            return {
                searchTerm: action.newWord,
                rowBlogs: state.rowBlogs,
                filteredBlogs: {
                    feed: filterBlogs(state.rowBlogs, action.newWord)
                }
            }
        case 'fetchBlogs':
            return {
                searchTerm: state.searchTerm,
                rowBlogs: action.payload as Article,
                filteredBlogs: action.payload as Article
            }
    }
}

const filterBlogs = (rowBlogs: Article, condition: string) => {
    return filterBlogsByTerm(rowBlogs, condition)
}


const filterBlogsByTerm = (rowBlogs: Article, term: string) => {
    return rowBlogs.feed.filter(feed =>
        feed.title.toLowerCase().includes(term.toLowerCase()))
}


export default BlogsReducer