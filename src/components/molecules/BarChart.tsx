import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
margin-top: 10px;
`

const Contents = styled.div`
display: flex;
margin-bottom: 5px;
margin-left: 5px;
`
const Bar = styled.div`
--size:  ${({theme}) => theme.value};
height: 20px;
margin-right: 4px;
background-color: #3273dc;
border-radius: 3px;
opacity: ${({theme}) => theme.opacity};
animation: SlideIn 1.8s;
width: var( --size);

@keyframes  SlideIn {
  0% {
    width: 0;
  }
  100% {
    width: var( --size);
  }
}
`

const BarWrapper = styled.div`
width: 300px;
display: flex;
`

const Item = styled.div`
width: 40%;
font-size: 14px;
`
const Title = styled.div`
font-size: 23px;
margin-bottom: 7px;
`


type Props = {
    graphTitle: string
    data: Data[]
}

type Data = {
    title: string
    value: number
}

const BarChart = (props: Props) => {

    const sortedData = props.data
        .sort((a, b) => a.value < b.value ? 1 : -1)
        .slice(0, 10)

    const maxValue = sortedData[0]

    return (
        <Wrapper>
            <Title>{props.graphTitle}</Title>
            {sortedData
                .map(e =>
                    <div>
                        <Contents>
                            <Item>{e.title}</Item>
                            <BarWrapper>
                                <Bar theme={{
                                    opacity: (e.value / maxValue.value * 100) + '%',
                                    value: (e.value / maxValue.value * 100) + '%'
                                }}/>
                                <div>{e.value}</div>
                            </BarWrapper>
                        </Contents>
                    </div>
                )}
        </Wrapper>
    )
}

export default BarChart