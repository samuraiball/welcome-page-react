import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 0 10px 0 10px;
`

type Props = {
    text: string
}

const Title = (props: Props) => {
    return (
        <Wrapper>
            {props.text}
        </Wrapper>
    )
}

export default Title