//code for d3 sankey chart

var units = "Widgets";

//**CUSTOMIZATION: change the canvas size that wraps the chart. after this you need to change the chart size too in another part below.
//The difference between the canvas size and the chart size is the space where the nodes can be moved around.
var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 700 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
 
//**CUSTOMIZATION: change the number format of "value"
var formatNumber = d3.format(",.0f"),    // zero decimal places
    format = function(d) { return formatNumber(d) ; };
 
// append the svg canvas to the page
var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
 
var sankey = d3.sankey()
//**CUSTOMIZATION: change the chart size. The size should be smaller than the canvas.
    .size([600, 400])
//**CUSTOMIZATION: change the node size and padding (space between nodes)
    .nodeWidth(40)
    .nodePadding(5);
 
var path = sankey.link();
 
// load the data
d3.json("data.json", function(error, graph) {
 
    var nodeMap = {};
    graph.nodes.forEach(function(x) { nodeMap[x.name] = x; });
    graph.links = graph.links.map(function(x) {
      return {
        source: nodeMap[x.source],
        target: nodeMap[x.target],
        value: x.value
      };
    });
 
  sankey
      .nodes(graph.nodes)
      .links(graph.links)
      .layout(200);
 
// add in the links
  var link = svg.append("g").selectAll(".link")
      .data(graph.links)
    .enter().append("path")
      .attr("class", "link")
      .attr("d", path)
      .style("stroke-width", function(d) { return Math.max(1, d.dy); })
      .sort(function(a, b) { return b.dy - a.dy; });
 
//**CUSTOMIZATION: customize the mouseover tooltip of links. 
//"d.source.name" is the name of the source; "d.target.name" is the name of the target, and "format(d.value)" is the number of the value.
  link.append("title")
        .text(function(d) 
        {return d.source.name + " to " + d.target.name + "\n" + "$" + format(d.value); });
 
// add in the nodes
  var node = svg.append("g").selectAll(".node")
      .data(graph.nodes)
      .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { 
      return "translate(" + d.x + "," + d.y + ")"; })
      .call(d3.behavior.drag()
      .origin(function(d) { return d; })
      .on("dragstart", function() { 
      this.parentNode.appendChild(this); })
      .on("drag", dragmove));
 
//define tipsy function
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {return d.name + "\n" + "Total value: " + "$" + format(d.value);});

// add the rectangles for the nodes
  node.append("rect")
      .attr("height", function(d) { return d.dy; })
      .attr("width", sankey.nodeWidth())
      .attr("fill", function(d) { return d.color}) 
      .style("stroke", function(d) { 
      return d3.rgb(d.color).darker(2); })
      .call(tip);
      
//**CUSTOMIZATION: customize the mouseover tooltip of nodes. 
//"d.name" is the name of the source or target of the node and "format(d.value)" is the number of the value.
//    .append("title")
//      .text(function(d) { 
//      return d.name + "\n" + "Total value: " + "$" + format(d.value); });
 
// add in the title for the nodes
  node.append("text")
      .attr("x", -6)
      .attr("y", function(d) { return d.dy / 2; })
      .attr("dy", ".35em")
      .attr("text-anchor", "end")
      .attr("transform", null)
      .text(function(d) { return d.name; })
    .filter(function(d) { return d.x < width / 2; })
      .attr("x", 6 + sankey.nodeWidth())
      .attr("text-anchor", "start");
 
// the function for moving the nodes
  function dragmove(d) {
    d3.select(this).attr("transform", 
        "translate(" + (
             d.x = Math.max(0, Math.min(width - d.dx, d3.event.x))
          ) + "," + (
                   d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))
            ) + ")");
    sankey.relayout();
    link.attr("d", path);
  }
});