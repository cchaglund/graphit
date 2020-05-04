import React, { useEffect } from 'react';
import * as d3 from "d3";
import "d3-selection-multi";

const BarChart = ({
    fields, 
    labelCharLength, 
    backgroundColor, 
    barThickness, 
    barsColor, 
    title, 
    padding, 
    textColor, 
    width,
}) => {

    useEffect(() => {
        updateBarChart()
    })

    const barIndent = 15 * labelCharLength;

    const svgRef = React.createRef();

    const dataDomain = Object.keys(fields).map( field => {
        return parseInt(fields[field]);
    })

    const xScale = d3.scaleLinear()
        .domain([ 0, d3.max(dataDomain)])
        .range([ 0, width - barIndent - 30])

    const updateBarChart = () => {
        let svg = d3.select(svgRef.current)
            .style('display', 'block')
            .style('background-color', `#${backgroundColor}`)
            .attrs({
                height: dataDomain.length * padding + 70 + (title ? 50 : 0) + (barThickness * dataDomain.length),
            })
        
        svg.selectAll('g').remove() // clear all previous gs
        let graphic = svg.append('g') // adds a new g

        const header = svg.selectAll('text')
        createAndOrUpdateHeader(header)

        const rects = graphic.selectAll('rect')
        createAndOrUpdateRectangles(rects)

        const texts = graphic.selectAll('text')
        createAndOrUpdateTexts(texts)
    }

    const createAndOrUpdateHeader = (header) => {
        header.data([title])
            .enter()
            .insert('text')
            .merge(header)
            .text(d => d)
            .attr('text-anchor', 'middle')
            .style("font-size", "30px")
            .attrs({
                y: 50,
                x: width/2,
                width: 20,
                height: 20,
                fill: `#${textColor}`
            })
    }

    const fieldsArray = Object.keys(fields).map( field => {
        return {
            label: field,
            value: fields[field]
        }
    })

    fieldsArray.sort((a, b) => {
        return a.value - b.value
    });

    const createAndOrUpdateRectangles = (rects) => {
        rects.data(Object.keys(fields), d => d)
            .enter().append('rect')
            .merge(rects)
            .attrs({
                x: barIndent,
                y: (d, i) => (padding * (i + 1)) + (title ? 50 : 0) + (barThickness * (i + 0.5)),
                height: barThickness,
                width: 0,
                fill: `#${barsColor}`,
            })
            .transition()
            .duration(400)
            .ease(d3.easeQuadOut)
            .attrs({
                width: d => {
                    const widthInPercent = (xScale(fields[d])/svgRef.current.width.baseVal.value) * 100
                    return widthInPercent + '%'
                },
            })
    }

    const createAndOrUpdateTexts = (texts) => {
        texts.data(Object.keys(fields), d => d)
            .enter().append('text')
            .merge(texts)
            .text(d => d)
            .attr('text-anchor', 'end')
            .attrs({
                x: 12 * labelCharLength,
                y: (d, i) => (padding * (i + 1)) + 8 + (title ? 50 : 0) + (barThickness * (i + 0.5) + (barThickness / 2.5)),
                height: barThickness,
                fill: `#${textColor}`,
            })
    }    

    return(
        <>
            <div id="barchart">
                <svg ref={ svgRef } width={"100%"}>
                </svg>
            </div>
            <div style={{display: 'none'}} id='chartForExport'></div>
            <textarea 
                id="textArea"
                style={{
                    backgroundColor: '#383838',
                    border: 'none',
                    color: '#383838',
                    height: 0,
                    width: 0,
                }}></textarea>
        </>
    )
}

export default BarChart;