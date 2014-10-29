var makeCategoryChart = function(root) {

	var diameter = 960;
		color = d3.scale.category20c();

	var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(1.5);

	var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");


 	var node = svg.selectAll(".node")
      .data(bubble.nodes(root)
      .filter(function(d) { return !d.children; }))
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("circle")
  	  .on("click", function(d){console.log(d.name)})
      .attr("r", function(d) { return d.r; })
      .attr("fill", function(d){return color(d.r)});


  node.append("text")
      .attr("dy", ".3em")
      .style("text-anchor", "middle")
      .text(function(d) { return d.name});

};