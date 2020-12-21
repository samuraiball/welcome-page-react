import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 30px;
    font-size: 30px;
`

type Props = {
    text: string
}

const SectionTitle = (props: Props) => {
    return (
        <Wrapper>{props.text}</Wrapper>
    )
}

export default SectionTitle