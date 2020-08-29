import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
background: #3273dc;
position: fixed;
z-index: 1;
top: 0;
left: 0;
overflow-x: hidden;
padding-top: 20px;
width: 170px;
height: 100vh;
box-shadow: black 0 0 5px;
`

const Text = styled.a`
color: white;
padding-top: 4px;
padding-left: 33%;
font-size: 24px;
tpointer-events: none;
tcursor: default;
text-decoration:none;
`

const SideNavi = (props) => {
    return (
        <Wrapper>
            <Text href="https://hirooka.dev">Heno</Text>
        </Wrapper>
    )
}

export default SideNavi