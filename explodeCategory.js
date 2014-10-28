var explodeCategory = function(category) {
	console.log(category);
	var WIDTH = 600;
	var HEIGHT = 700;
	var BAR_PADDING = 10;

	var svgTwo = d3.select("body")
				.append("svg")
				.attr("width", WIDTH)
				.attr("height", HEIGHT);

	var cScale = d3.scale.linear()
						.domain([0,d3.max(category.channels, function(d){
							return d.views;
						})])
						.range([20,150])

	var circles = svgTwo.selectAll("circle")
                          .data(category.channels)
                          .enter()
                          .append("circle")
                          .on("click", function(d) {
							console.log(d);
						  })
                          .attr("cx", function (d){
                          	return Math.random() * WIDTH;
                          })
                          .attr("cy", function (){
                          	return Math.random() * HEIGHT;
                          })
                          .attr("r", function (d){
                          	return cScale(d.views);
                          })
                          .attr("fill", function(){
                          	return '#'+Math.floor(Math.random()*16777215).toString(16);
                          })



	svgTwo.selectAll("rect")
		.data(category.channels)
		.enter()
		.append("circle")
		.on("click", function(d) {
			console.log(d.name);
		})
		.attr("fill", function(d,i){
			return '#'+Math.floor(Math.random()*16777215).toString(16);
		})
		.attr("x", function(d,i) {
			return i * WIDTH / category.channels.length;
		})
		.attr("y", function(d,i) {
			return HEIGHT - d.views/300;
		})
		.attr("width", WIDTH / category.channels.length - BAR_PADDING)
		.attr("height", function(d,i) {
			return d.views/300;
		});
};