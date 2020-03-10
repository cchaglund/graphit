import React, { useEffect, useState } from 'react';
import * as d3 from "d3";

const Rectangle = (props) => {
    const svgRef = React.createRef();
    const recRef = React.createRef();
    const gRef = React.createRef();

    const [ height, setHeight ] = useState(props.height);

    useEffect(() => {
        let svg = d3.select(svgRef.current)
            .style('display', 'block')
        
        let g = d3.select(gRef.current)
            .append('text')
            .text('hej')
            .attr('y', 20)

        svg.transition()
            .duration(300)
            .ease(d3.easeBackInOut)
            .attr('height', props.height)

        let section = d3.select(recRef.current);
        section.transition()
            .duration(300)
            .ease(d3.easeBackInOut)
            .attr('height', props.height)
            .on("end", () =>
                setHeight(props.height)
            );
    })

    return(
        <svg ref={ svgRef } width={ props.width }>
            <g ref={ gRef }>
                <rect
                    ref={recRef}
                    x={0} 
                    y={0} 
                    height={ height } 
                    width={ props.width } 
                    fill={'#575757'} />
            </g>
        </svg>
    )
}

export default Rectangle;