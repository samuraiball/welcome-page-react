import React, {ReactNode} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  animation: XSlideIn 1s;

  @keyframes XSlideIn {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

type Props = {
    children: ReactNode
}

const XSlidInContainer = (props: Props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default XSlidInContainer