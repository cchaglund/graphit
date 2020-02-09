import React, { useEffect } from 'react';
import * as d3 from "d3";
import "d3-selection-multi";

const PieChart = ({fields, labelCharLength, backgroundColor, slicesColor, innerRadius, outerRadius, sectionRoundness, title, padding, textColor, width}) => {
    const svgRef = React.createRef();
    // const recRef = React.createRef();

    const dataDomain = Object.keys(fields).map( field => {
        return parseInt(fields[field]);
    })

    // const xScale = d3.scaleLinear()
    //     .domain([ 0, d3.max(dataDomain)])
    //     .range([ 0, width])

    const height = 400 + (title ? 50 : 0) * 2;

    const updatePieChart = () => {
        let svg = d3.select(svgRef.current)
            .style('display', 'block')
            .style('padding', '2rem')
            .style('background-color', `#${backgroundColor}`)
            .attrs({
                height: height,
            })
        
        svg.selectAll('g').remove() // clear all previous gs
        // let graphic = svg.append('g') // adds a new g

        const header = svg.selectAll('text')
        createAndOrUpdateHeader(header)

        const arcs = svg.append('g').selectAll('path')
        createAndOrUpdateArcs(arcs)

        // const texts = svg.select('g').append('g').selectAll('text')
        // createAndOrUpdateTexts(texts)

        /* These don't seem to do anything */
        // graphic.exit().remove()
        // header.exit().remove()
        // arcs.exit().remove()
        // texts.exit().remove()
    }

    const createAndOrUpdateHeader = (header) => {
        header.data([title])
            .enter()
            .insert('text')
            .merge(header)
            .text(d => d)
            .attr('text-anchor', 'middle')
            .attrs({
                y: padding,
                x: width/2,
                width: 20,
                height: 20,
                fill: 'white'
            })
    }

    const createAndOrUpdateArcs = (arcs) => {
        const pieGenerator = d3.pie();

        const arcData = pieGenerator(dataDomain);

        console.log(arcData)

        const arcGenerator = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .padRadius(padding)
            .padAngle(1)
            .cornerRadius(sectionRoundness)

        console.log(arcGenerator)

        arcs.data(arcData)
            .enter().append('path')
            .merge(arcs)
            .attr('transform', `translate(${width / 2}, ${height / 2})`)
            .attr('d', arcGenerator)
            .style('fill', `#${slicesColor}`)
            .merge(arcs)
            // .transition()
            // .duration(400)
            // .ease(d3.easeQuadOut)
    }

    // const createAndOrUpdateTexts = (texts) => {
    //     texts.data(Object.keys(fields), d => d)
    //         .enter().append('text')
    //         .merge(texts)
    //         .text(d => d)
    //         .attr('text-anchor', 'end')
    //         .attrs({
    //             x: 8 * labelCharLength,
    //             y: (d, i) => (padding * i) + 17 + (title ? 50 : 0) + (barThickness * i),
    //             height: barThickness,
    //             fill: `#${textColor}`,
    //         })
    // }

    

    useEffect(() => {
        updatePieChart()

        // svg.transition()
        //     .duration(300)
        //     .ease(d3.easeBackInOut)
        //     .attr('height', props.height)

        // let section = d3.select(recRef.current);
        // section.transition()
        //     .duration(300)
        //     .ease(d3.easeBackInOut)
        //     .attr('height', props.height)
        //     .on("end", () =>
        //         setHeight(props.height)
        //     );
    })

    

    return(
        <svg ref={ svgRef } width={width}>
            {/* <g ref={ gRef }>
            </g> */}
        </svg>
    )
}

export default PieChart;