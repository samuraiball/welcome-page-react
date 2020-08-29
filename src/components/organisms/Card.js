import React from "react";
import styled from "styled-components";

const Link = styled.a`
tpointer-events: none;
tcursor: default;
text-decoration:none;
`

const Wrapper = styled.div`
margin: 10px 10px 8px 10px;
padding-bottom: 10px;
border: solid 1px #C0C0C0;
border-radius: 2px;
width: 98%;

&:hover{
background: #EEEEEE;
}
`

const Title = styled.span`
font-size: 18px;
font-weight: bold;
color: black;
margin-left: 10px;
`

const Summary = styled.div`
margin: 3px 0 0 12px;
font-size: 14px;
color: #808080;
`

const Card = (props) => {
    return (
        <Link href={props.href} target="_blank">
            <Wrapper>
                <Title>{props.title}</Title>
                <Summary>
                    {props.summary}
                </Summary>
            </Wrapper>
        </Link>
    )
}

export default Card