import React from "react";
import styled from "styled-components";
import Tag from "../atoms/Tag";
import Summary from "./Summary";
import Title from "./Title";

const CardLink = styled.a`
tpointer-events: none;
tcursor: default;
text-decoration:none;
`

const Wrapper = styled.div`
margin: 10px 10px 12px 10px;
padding-bottom: 10px;
border: solid 1px #C0C0C0;
border-radius: 2px;

&:hover{
transition: 0.2s ;
background: #e5e5e5;
}

@media (max-width: 480px) {
margin: 0 0 10px 0;
padding-bottom: 5px;
}
`

const Footer = styled.div`
margin-top: 5px;
`
const Tags = styled.span`
margin: 10px 0 10px 0;

@media (max-width: 480px) {
display: block;
margin: 5px 10px 5px 5px;
}
`

const CardPublishDate = styled.span`
font-size: 15px;
margin-left: 20px;
color: #808080;

@media (max-width: 480px) {
margin: 0 0 0 10px;
}
`

const Card = (props) => {
    console.log(props)
    return (
        <CardLink href={props.href} target="_blank">
            <Wrapper>
                <Title text={props.title}/>
                <Summary text={props.summary}/>
                <Footer>
                    <Tags>
                        {props.tags.map(t => (<Tag name={t.term}/>))}
                    </Tags>
                    <CardPublishDate>
                        {props.published}
                    </CardPublishDate>
                </Footer>
            </Wrapper>
        </CardLink>
    )
}

export default Card