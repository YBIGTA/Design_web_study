d3.select("svg")
    .selectAll("rect")
    .data([15, 50, 22, 8, 100, 10])
    .enter()
    .append("rect")
    .attr("width", 10)
    .attr("height", d => d); 