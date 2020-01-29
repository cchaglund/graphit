import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import * as d3 from "d3";
import { Link } from "react-router-dom";

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const DataEntryMethod = ({ name }) => {
    const [ expandedState, setExpandedState ] = useState(false);
    const svgRef = React.createRef();
    const secRef = React.createRef();

    useEffect(() => {
        // let section = d3.select(secRef.current);

        // section.transition()
        //     .duration(1000)
        //     .ease(d3.easeBackInOut)
        //     .attr('x', 200)

    }, [])

    const toggleExpand = () => {
        // expandedState ? contractSvg() : expandSvg();
        let svg = d3.select(svgRef.current);

        svg.transition()
            .duration(300)
            .ease(d3.easeBackInOut)
            .attr('height', expandedState ? 0 : 200)

        let section = d3.select(secRef.current);

        section.transition()
            .duration(300)
            .ease(d3.easeBackInOut)
            .attr('height', expandedState ? 0 : 200)

        setExpandedState(!expandedState)
    }

    return(
        <div>
            <StyledDiv onClick={ () => toggleExpand()}>
                {name}
            </StyledDiv>
            <svg width={winWidth} height={0} ref={svgRef}>
                <g>
                    <rect 
                        x={0} 
                        y={0} 
                        height={0} 
                        width={winWidth} 
                        fill={'blue'}
                        ref={secRef}></rect>
                </g>
            </svg>
        </div>
    )
}

export default DataEntryMethod;