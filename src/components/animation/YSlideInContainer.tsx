import React, {ReactNode} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  animation: ScaleIn 1s;

  @keyframes ScaleIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

type Props = {
    children: ReactNode
}

const YSlideInContainer = (props: Props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default YSlideInContainer