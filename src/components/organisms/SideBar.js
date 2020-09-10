import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

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

@media (max-width: 480px) { 
position: fixed;
overflow-x: hidden;
width: 100vh;
height: 110px;
}
`

const TopLink = styled(Link)`
color: white;
font-size: 24px;
tpointer-events: none;
tcursor: default;
text-decoration: none;
&>*{
margin-left: 20px;
}
`

const ChildLink = styled(Link)`
font-size: 18px;
tpointer-events: none;
tcursor: default;
text-decoration: none;
&>*{
margin-top: 8px;
margin-left: 40px;
  &:hover{
   transition: 0.2s ;
   color: #d4d1d1;
  }
}
`

const Text = styled.div`
color: white;
`

const SideBar = (props) => {
    return (
        <Wrapper id="nav">
            <TopLink to="/"><Text>Heno</Text></TopLink>
            <ChildLink to="/"><Text>├ About Me</Text></ChildLink>
            <ChildLink to="/blogs"><Text>└ Blogs</Text></ChildLink>
        </Wrapper>
    )
}

export default SideBar