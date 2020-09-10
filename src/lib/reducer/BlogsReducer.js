
const BlogsReducer = (state, action) => {
    switch (action.type) {
        case 'filterBlogs':
            return {
                searchTerm: action.newWord,
                rowBlogs: state.rowBlogs,
                filteredBlogs: {feed:
                        state.rowBlogs.feed.filter(feed =>
                            feed.title.toLowerCase().includes(action.newWord.toLowerCase()))
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

export default BlogsReducer