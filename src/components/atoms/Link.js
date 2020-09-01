import React from "react";
import styled from "styled-components";

const Text = styled.div`
margin-top: 10px;
font-size: 15px;
`

const Anker = styled.a`
tpointer-events: none;
tcursor: default;
text-decoration:none;
color: black;

&:hover{
color: #504e4e;
}

&>ion-icon{
vertical-align: -3px;
margin-right: 2px;
}
`


const Link = (props) => {
    return (
        <Text>
            <Anker href={props.src} target="_blank">
                <ion-icon name={props.logo} />
                {props.text}
            </Anker>
        </Text>
    )
}

export default Link