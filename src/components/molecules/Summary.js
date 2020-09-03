import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
margin: 3px 10px 0 12px;
font-size: 14px;
color: #808080;
`

const Summary = (props) => {
    return (
        <Wrapper>
            {props.text}
        </Wrapper>
    )
}

export default Summary