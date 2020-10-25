import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
margin: 3px 10px 0 12px;
font-size: 14px;
color: #808080;
`

type Props = {
    text: string
}


const Summary = (props: Props) => {
    return (
        <Wrapper>
            {props.text}
        </Wrapper>
    )
}

export default Summary