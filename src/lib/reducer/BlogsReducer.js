const BlogsReducer = (state, action) => {
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
                searchTerm: state.newWord,
                rowBlogs: action.payload,
                filteredBlogs: action.payload
            }
        default:
            throw new Error()
    }
}

const filterBlogs = (rowBlogs ,condition) => {
    return rowBlogs.feed.filter(feed =>
        feed.title.toLowerCase().includes(condition.toLowerCase()))
}

export default BlogsReducer