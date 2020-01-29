const section = document.createElement('div');

const svg = d3.select(section)
    .append('svg')
    .attr('height', 200)
    .attr('width', 200)

const rectangle = svg.append('rect')
    .style('background-color', 'blue')
    .attr('x', 0)
    .attr('y', 0)

export default section;