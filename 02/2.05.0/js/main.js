/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

const svg = d3.select('#chart-area').append('svg')
  .attr('height', 500)
  .attr('width', 500)
  // to see the extra 100px of space we leave in rect width
  .attr('style', 'background-color: yellow'); 

const rectangle = svg.append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('height', 500)
  .attr('width', 400)
  .attr('fill', 'purple');