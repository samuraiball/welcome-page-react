export type BlogsState = {
    //searchCondition: { searchTerm: "", tags: [] },
    searchTerm: string,
    rowBlogs: Article
    filteredBlogs: Article
}

export type Article = {
    feed: Feed[]
}

export type Feed = {
    "title": string
    "published": string
    "summary": string
    "link": Link
    "category": Category[]
    "edited": string
}

export type Link = {
    href: string
}

export type Category = {
    term: string
}

export type BlogStatistics = {
    data: CategoryStatistics[]
}

export type CategoryStatistics = {
    title: string
    value: number
}