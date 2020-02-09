import React, { useEffect } from 'react';
import * as d3 from "d3";
import "d3-selection-multi";

const BarChart = ({fields, labelCharLength, backgroundColor, barThickness, barsColor, title, padding, textColor, width}) => {
    const svgRef = React.createRef();
    // const recRef = React.createRef();

    const dataDomain = Object.keys(fields).map( field => {
        return parseInt(fields[field]);
    })

    const xScale = d3.scaleLinear()
        .domain([ 0, d3.max(dataDomain)])
        .range([ 0, width])

    const updateBarChart = () => {
        let svg = d3.select(svgRef.current)
            .style('display', 'block')
            .style('padding', '2rem')
            .style('background-color', `#${backgroundColor}`)
            .attrs({
                height: dataDomain.length * padding + (title ? 50 : 0) + (barThickness * dataDomain.length),
            })
        
        svg.selectAll('g').remove() // clear all previous gs
        let graphic = svg.append('g') // adds a new g

        const header = svg.selectAll('text')
        createAndOrUpdateHeader(header)

        const rects = graphic.selectAll('rect')
        createAndOrUpdateRectangles(rects)

        const texts = graphic.selectAll('text')
        createAndOrUpdateTexts(texts)

        /* These don't seem to do anything */
        // graphic.exit().remove()
        // header.exit().remove()
        // rects.exit().remove()
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

    const createAndOrUpdateRectangles = (rects) => {
        rects.data(Object.keys(fields), d => d)
            .enter().append('rect')
            .merge(rects)
            .attrs({
                x: 10 * labelCharLength,
                y: (d, i) => (padding * i) + (title ? 50 : 0) + (barThickness * i),
                height: barThickness,
                width: 0,
                fill: `#${barsColor}`
            })
            .transition()
            .duration(400)
            .ease(d3.easeQuadOut)
            .attrs({
                width: d => xScale(fields[d]),
            })
    }

    const createAndOrUpdateTexts = (texts) => {
        texts.data(Object.keys(fields), d => d)
            .enter().append('text')
            .merge(texts)
            .text(d => d)
            .attr('text-anchor', 'end')
            .attrs({
                x: 8 * labelCharLength,
                y: (d, i) => (padding * i) + 17 + (title ? 50 : 0) + (barThickness * i),
                height: barThickness,
                fill: `#${textColor}`,
            })
    }

    

    useEffect(() => {
        updateBarChart()

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

export default BarChart;