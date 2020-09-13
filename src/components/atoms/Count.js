import React from "react";
import styled from "styled-components";

const Wrapper = styled.span`
color: #808080;
font-size: 25px;
margin-left: 10px;
vertical-align: -3px;
`
const Count = (props) => {
   return (
      <Wrapper>{props.number}件</Wrapper>
   )
}

export default Count