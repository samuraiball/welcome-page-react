import React from "react";
import styled from "styled-components";
import Tag from "../atoms/Tag";

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

const Title = styled.div`
font-size: 18px;
font-weight: bold;
color: black;
margin: 0 10px 0 10px;
`

const Summary = styled.div`
margin: 3px 10px 0 12px;
font-size: 14px;
color: #808080;
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

const PublishDate = styled.span`
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
                <Title>{props.title}</Title>
                <Summary>
                    {props.summary}
                </Summary>
                <Footer>
                    <Tags>
                        {props.tags.map(t => (<Tag name={t.term}/>))}
                    </Tags>
                    <PublishDate>
                        {props.published}
                    </PublishDate>
                </Footer>
            </Wrapper>
        </CardLink>
    )
}

export default Card