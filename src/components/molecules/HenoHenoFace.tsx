import React from "react";
import styled from "styled-components";


const FaceLine = styled.div`
  z-index: 0;
  position: relative;
  height: 100px;
  width: 200px;
  border: black solid 1px;
  background-color: black;
  border-bottom: 200px solid black;
  border-radius: 0 0 0 60%;

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    left: 15px;
    top: -1px;
    height: 287px;
    width: 200px;
    background-color: white;
    border-radius: 0 0 0 60%;
  }
`

const Eye = styled.div`
  position: relative;
  top: 20px;
  left: 20px;
  height: 60px;
  width: 80px;
  background-color: black;
  border-radius: 100px 100px 100px 100px;

  &:before {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;

    height: 10px;
    width: 10px;
    background-color: white;
    //border-top: 20px solid white
    //border-bottom: 20px solid white;
    border-left: 10px solid white;
    border-radius: 20px 0 0 20px;
  }
`

const HenoHenoFace = () => {
    return (
        <div>
            <FaceLine>
                <Eye/>
            </FaceLine>
        </div>
    )
}

export default HenoHenoFace
