import React, {useEffect, useState} from "react";
import SectionTitle from "../atoms/SectionTitle";
import axios from 'axios'
import Card from "../molecules/Card";
import styled from "styled-components";


const InputBox = styled.input`
margin: 20px 0 10px 10px;
height: 30px;
width: 250px;
border-radius: 5px;


@media (max-width: 480px) {
margin: 20px 0 10px 0;
}

::-webkit-input-placeholder {
font-size: 15px;
}

:-moz-placeholder { /* Firefox 18- */
font-size: 15px;
}

::-moz-placeholder {  /* Firefox 19+ */
font-size: 15px;
}

:-ms-input-placeholder {  
font-size: 15px;
}
`

const BlogInfo = (props) => {
    const [rowData, setRowData] = useState({feed: []})
    const [filteredData, setFilteredData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = event => {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "https://welcome-page-api.herokuapp.com/hatena/entries",
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET",
                    }
                });
            console.log(result.data)
            setRowData(result.data)
            setFilteredData(result.data.feed)
        };
        fetchData().then();
    }, []);

    useEffect(() => {
        const result = rowData.feed.filter(feed =>
            feed.title.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredData(result);
    }, [rowData.feed, searchTerm])


    return (
        <div className="blog-info">
            <SectionTitle>Posted Blogs</SectionTitle>
            <InputBox type="text"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={handleChange}/>

            {filteredData.map(entry => (
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
