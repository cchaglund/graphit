import React, { useEffect } from 'react';
import * as d3 from "d3";
import "d3-selection-multi";

const BarChart = ({fields, labelCharLength, backgroundColor, barThickness, barsColor, title, padding, textColor, width, exportChart}) => {
    useEffect(() => {
        updateBarChart()
    })

    const prepareExport = () => {
        const cloned = document.getElementById('barchart').cloneNode(true)

        const chartExport = document.getElementById('chartForExport')
        chartExport.innerHTML = cloned.innerHTML

        const rects = chartExport.getElementsByTagName('rect')

        Object.keys(rects).forEach(key => {
            const widthAtAnimEnd = rects[key].width.baseVal.valueAsString
            rects[key].innerHTML = `
                <animate attributeType="CSS" attributeName="width" from="0" to="${widthAtAnimEnd}" dur="1s" />
            `
        })

        const textArea = document.getElementById('textArea')
        textArea.value = chartExport.innerHTML
        textArea.select()
        document.execCommand('copy')
        alert('Copied code to clipboard!')
    }

    const svgRef = React.createRef();

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
                x: 8 * labelCharLength,
                y: (d, i) => (padding * i) + 17 + (title ? 50 : 0) + (barThickness * i),
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
            { exportChart ? prepareExport() : null }
            <div style={{display: 'none'}} id='chartForExport'></div>
            <textarea 
                id="textArea" 
                value="" 
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