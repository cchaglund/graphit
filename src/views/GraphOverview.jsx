import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import Rectangle from '../components/Rectangle';
import Bar from './Bar';
import Pie from './Pie';
import styled from '@emotion/styled';


const winWidth = window.innerWidth;
const width = winWidth * 0.75;
// var winHeight = window.innerHeight;

const StyledRow = styled.div`
    margin: auto;
    width: ${ width}px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    padding: 1rem;
`;

const GraphOverview = ({ location }) => {
    // const [ expandedState, setExpandedState ] = useState(false);
    const [ barChartActive, setBarChartActive ] = useState(true);

    const chartSwitchHandler = () => {
        setBarChartActive(!barChartActive)
    }

    const fields = location.state

    let charCount = 0;
    Object.keys(fields).forEach( key => {
        if (key.length > charCount) charCount = key.length;
    });

    return (
        <StyledRow>
            <h3>Graph Overview</h3>
            <h4 onClick={chartSwitchHandler}>Switch to pie chart</h4>
            { 
                barChartActive
                ?
                <Bar fields={fields} width={width} charCount={charCount}/>
                : 
                <Pie fields={fields} width={width}/>
            }
            {/* <Rectangle
                show={ true }
                width={ winWidth }
                height={ true ? 200 : 0 } /> */}
        </StyledRow>
    )
}

export default withRouter(GraphOverview);