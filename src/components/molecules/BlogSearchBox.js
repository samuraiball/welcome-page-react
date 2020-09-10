import React from "react";
import styled from "styled-components";

const Wrapper = styled.input`
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

const handleChange = (event, dispatch) => {
    dispatch({type: "filterBlogs", newWord: event.target.value})
}

const BlogSearchBox = (props) => {
    return <Wrapper type="text"
                    placeholder="Search"
                    value={props.searchTerm}
                    onChange={e => handleChange(e, props.dispatch)}/>
}

export default BlogSearchBox