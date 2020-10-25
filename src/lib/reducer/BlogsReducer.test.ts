import {filterBlogsByCategory, filterBlogsByTerm, mergeArticles} from "./BlogsReducer";
import {Article, Link} from "../../components/state/BlogsState";

const article: Article = {
    feed:
        [
            {
                title: "title1",
                published: "published1",
                summary: "summary1",
                link: {} as Link,
                category: [
                    {term: "Java"},
                    {term: "Spring"}
                ],
                edited: "edited1"

            },
            {
                title: "title2",
                published: "published2",
                summary: "summary2",
                link: {} as Link,
                category: [
                    {term: "Java"},
                    {term: "Quarkus"}
                ],
                edited: "edited2"

            }
        ]
}


test("filter by name", () => {

    const expected: Article = {
        feed: [
            {
                title: "title1",
                published: "published1",
                summary: "summary1",
                link: {} as Link,
                category: [
                    {term: "Java"},
                    {term: "Spring"}
                ],
                edited: "edited1"
            }
        ]
    }
    expect(filterBlogsByTerm(article, "title1")).toEqual(expected)
});

test("filter by category", () => {

    const expected: Article = {
        feed: [
            {
                title: "title2",
                published: "published2",
                summary: "summary2",
                link: {} as Link,
                category: [
                    {term: "Java"},
                    {term: "Quarkus"}
                ],
                edited: "edited2"

            }
        ]
    }

    // filter
    expect(filterBlogsByCategory(article, "Quarkus")).toEqual(expected)

    // filter lowercase
    expect(filterBlogsByCategory(article, "quarkus")).toEqual(expected)

    // filter
    expect(filterBlogsByCategory(article, "quar")).toEqual(expected)
});


test("marge articles", () => {


    const article1: Article = {
        feed: [
            {
                title: "title1",
                published: "published1",
                summary: "summary1",
                link: {} as Link,
                category: [
                    {term: "Java"},
                    {term: "Spring"}
                ],
                edited: "edited1"

            },
            {
                title: "title2",
                published: "published2",
                summary: "summary2",
                link: {} as Link,
                category: [
                    {term: "Java"},
                    {term: "Quarkus"}
                ],
                edited: "edited2"

            }
        ]
    }

    const article2: Article = {
        feed: [
            {
                title: "title2",
                published: "published2",
                summary: "summary2",
                link: {} as Link,
                category: [
                    {term: "Java"},
                    {term: "Quarkus"}
                ],
                edited: "edited2"

            }
        ]
    }
    expect(mergeArticles(article1, article2)).toEqual(article)
})