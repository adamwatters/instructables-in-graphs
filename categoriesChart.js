var makeChart = function(root, lookFor) {

  console.log(lookFor);

	var diameter = 960;
		color = d3.scale.category20c();

	var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(1.5)
    .children(function(d) {
      return d[lookFor];
    })
    .value(function(d){
      return d.views;
    })

  if(d3.select("svg")){
    d3.select("svg").remove();
  }

  var svg = d3.select("body").append("svg");

	svg.attr("width", diameter)
      .attr("height", diameter)
      .attr("class", "bubble");

 	var node = svg.selectAll(".node")
                .data(bubble.nodes(root).filter(function(d) { 
                                                    return !d.children; 
                }))
                .enter().append("g")
                .on("click", function(d){
                  makeChart(d, d.nextLevel);
                })
                .attr("class", "node")
                .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("circle")
      .attr("r", function(d) { return d.r; })
      .attr("fill", function(d){return color(d.r)});


  node.append("text")
      .attr("dy", ".3em")
      .attr("font-weight", "bold")
      .attr("font-family", "helvetica")
      .attr("font-size", "15px")
      .attr("fill", "white")
      .attr("stroke-width", "1px")
      .style("text-anchor", "middle")
      .text(function(d) { return d.name? d.name : d.title});

    if (!lookFor) {

      console.log("picture");
      node.append("image")
          .attr('x',60)
          .attr('y',60)
          .attr('width', function(d){
            return d.r / 2;
          })
          .attr('height', function(d){
            return d.r / 2;
          })
          .attr("xlink:href",function(d){
            console.log(d);
            return d.rectangle1Url;
          })
    }

};
