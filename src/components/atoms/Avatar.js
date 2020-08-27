import React from "react";
import styled from "styled-components";

const Image = styled.img`
    height: 150px;
`

const Avatar = (props) => {
    return (
        <Image src={props.src}/>
    )
}

export default Avatar