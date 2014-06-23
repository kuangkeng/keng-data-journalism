//code for d3 bar chart

var margin = {top: 20, right: 10, bottom: 20, left: 10},
    w = 500,
    h = 100,
    barPadding = 1; 

var svg = d3.select("barchart").append("svg")
    .attr("width", w + margin.left + margin.right)
    .attr("height", h + margin.top + margin.bottom);

var totaldata1 = [2.38, 97.62],
    totaldata2 = [38.17, 61.83];

//var xScale = d3.scale.linear()
//                     .domain([0, d3.max(totaldata1, function(d) { return d; })])
//                     .range([0, w]);

var yScale = d3.scale.linear()
                     .domain([0, d3.max(totaldata1, function(d) { return d; })])
                     .range([0, h]);
                     

svg.selectAll("rect")
         .data(totaldata1)
         .enter()
         .append("rect")
         .attr("x", function(d, i) {
            return i * (w / totaldata1.length - barPadding);
              })
         .attr("y", function(d) {
            return yScale(h - d);
              })
         .attr("height", function(d) {
            return yScale(d);
              });