import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import Bar from './Bar';
import Pie from './Pie';
import styled from '@emotion/styled';

const winWidth = window.innerWidth;
const width = winWidth * 0.75;

const StyledRow = styled.div`
    margin: auto;
    width: ${ width}px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    padding: 1rem;
`;

const GraphOverview = ({ location }) => {
    const [ barChartActive, setBarChartActive ] = useState(true);
    const [ exportChart, setExportChart ] = useState(false);

    const chartSwitchHandler = () => {
        setBarChartActive(!barChartActive)
    }

    const resetExportHandler = () => {
        setExportChart(false)
    }

    const fields = location.state

    let charCount = 0;
    Object.keys(fields).forEach( key => {
        if (key.length > charCount) charCount = key.length;
    });

    return (
        <StyledRow>
            <h3>Graph Overview</h3>
            <button onClick={() => setExportChart(!exportChart)}>
                EXPORT
            </button>
            <h4 onClick={chartSwitchHandler}>Switch to pie chart</h4>
            <div id='bar'>
                { 
                    barChartActive
                    ?
                    <Bar fields={fields} width={width} charCount={charCount} exportChart={exportChart} resetExportHandler={resetExportHandler} />
                    : 
                    <Pie fields={fields} width={width} exportChart={exportChart} />
                }
            </div>
        </StyledRow>
    )
}

export default withRouter(GraphOverview);