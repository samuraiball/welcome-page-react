import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
background: #3273dc;
color: white;
position: fixed;
z-index: 1;
top: 0;
left: 0;
overflow-x: hidden;
padding-top: 20px;
width: 150px;
height: 100vh;
box-shadow: black 0 0 5px;
`

const Text = styled.div`
padding-top: 4px;
padding-left: 30%;
font-size: 20px;
`

const SideNavi = (props) => {
    return (
        <Wrapper>
            <Text>Heno</Text>
        </Wrapper>
    )
}

export default SideNavi