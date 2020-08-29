import React from "react";
import styled from "styled-components";


const Wrapper = styled.span`
border-radius: 10px;
padding: 2px 6px 2px 6px;
font-size: 12px;
background: #ececec;
color: black;
margin-left: 5px;
`

const Tag = (props) => {
   return(
       <Wrapper>
           {props.name}
       </Wrapper>
   )
}

export default Tag