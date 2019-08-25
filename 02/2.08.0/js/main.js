/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json('data/buildings.json').then((data) => {

  data.forEach(element => {
    element.height = +element.height;
  });

  const svg = d3.select('#chart-area').append('svg')
    .attr('height', 500)
    .attr('width', 500);

  const bars = svg.selectAll('rect')
    .data(data);

  bars.enter()
    .append('rect')
    .attr('height', (d, i) => {
      return d.height;
    })
    .attr('width', 25)
    .attr('fill', 'orange')
    .attr('x', (d, i) => {
      return (i * 50) + 30;
    })
    .attr('y', 0);
})
.catch((err) => {
  console.log(err);
})