import {Article, BlogsState, Feed} from "../../components/state/BlogsState";
import {BlogsAction} from "./actions/BlogsAction";

const BlogsReducer = (state: BlogsState, action: BlogsAction): BlogsState => {
    switch (action.type) {
        case 'filterBlogs':
            return {
                searchTerm: action.newWord,
                rowBlogs: state.rowBlogs,
                filteredBlogs: filterBlogs(state.rowBlogs, action.newWord)
            }
        case 'fetchBlogs':
            return {
                searchTerm: state.searchTerm,
                rowBlogs: action.payload as Article,
                filteredBlogs: action.payload as Article
            }
    }
}

const filterBlogs = (rowBlogs: Article, condition: string): Article => {
    return mergeArticles(filterBlogsByTerm(rowBlogs, condition), filterBlogsByCategory(rowBlogs, condition))
}


export const filterBlogsByTerm = (rowBlogs: Article, term: string): Article => {
    return {
        feed:
            rowBlogs.feed.filter(feed =>
                feed.title.toLowerCase().includes(term.toLowerCase()))
    }
}

export const filterBlogsByCategory = (rowBlogs: Article, categoryStr: string): Article => {
    return {
        feed:
            rowBlogs.feed.filter(feed =>
                feed.category.map(t => t.term).join("").toLowerCase().includes(categoryStr.toLowerCase()))
    }
}

export const mergeArticles = (article1: Article, article2: Article): Article => {
    const feeds = article1.feed.concat(article2.feed);
    const result = feeds.reduce((m, o) => {
        return m.set(o.title, o)
    }, new Map<string, Feed>())
    return {
        feed: Array.from(result.values())
    }
}


export default BlogsReducer