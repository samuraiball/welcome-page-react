import React, {useEffect, useState} from "react";
import SectionTitle from "../atoms/SectionTitle";
import axios from 'axios'
import Card from "./Card";

const BlogInfo = (props) => {
    const [data, setData] = useState({feed: []})

    useEffect(async () => {
        const result = await axios(
            "https://welcome-page-api.herokuapp.com/hatena/entries",
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET",
                }
            });

        setData(result.data)

    }, []);


    console.log(data)
    return (

        <div className="blog-info">
            <SectionTitle>Posted Blogs</SectionTitle>
            {data.feed.map(entry => (
                <Card
                    href={entry.link.href}
                    title={entry.title}
                    summary={entry.summary}
                />
            ))}
        </div>
    )
}

export default BlogInfo
