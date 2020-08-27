import React from "react";
import styled from "styled-components";

const Text = styled.div`
    margin-top: 5px;
    font-size: 30px;
`

const SectionTitle = (props) => {
    return (
        <Text {...props}/>
    )
}

export default SectionTitle
