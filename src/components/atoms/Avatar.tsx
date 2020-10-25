import React from "react";
import styled from "styled-components";

const Image = styled.img`
    height: 150px;
`

type Props = {
    src: string
}

const Avatar = (props: Props) => {
    return (
        <Image src={props.src}/>
    )
}

export default Avatar