import React from "react";
import styled from "styled-components";

const Text = styled.a`
    font-size: 18px;
`

const Link = (props) => {
    return (
        <Text>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a href={props.src} target="_blank">{props.text}</a>
        </Text>
    )
}

export default Link