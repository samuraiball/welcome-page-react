import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
margin-top: 20px;
width: 1000px;
`

const Contents = styled.div`
display: flex;
margin-bottom: 5px;
margin-left: 5px;
`
const Bar = styled.div`
height: 20px;
margin-right: 4px;
background-color: #0800ff;
opacity: ${({theme}) => theme.opacity};
border-radius: 3px;
width: ${({theme}) => theme.value};
`

const Item = styled.div`
width: 15%;
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

    const sumOfValue = props.data
        .map(e => e.value)
        .reduce((acm, data) => acm + data, 0)

    return (
        <Wrapper>
            <Title>{props.graphTitle}</Title>
            {props.data.sort((a, b)=> a.value < b.value? 1 : -1)
                .slice(0, 10)
                .map(e =>
                <div>

                    <Contents>
                        <Item>{e.title}</Item>
                        <Bar theme={{
                            opacity: (e.value / sumOfValue * 300) + '%',
                            value: (e.value / sumOfValue * 100) + '%'
                        }}/>
                        <div>{e.value}</div>
                    </Contents>
                </div>
            )}
        </Wrapper>
    )
}

export default BarChart