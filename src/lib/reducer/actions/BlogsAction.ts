export type BlogsAction = {
    type: 'filterBlogs' | 'fetchBlogs'
    newWord: string
    payload: {}
}

export type BlogsStatisticsAction = {
    type: 'fetchStatistics'
    payload: { categoryStatistics: { name: string, number: number }[] }
}