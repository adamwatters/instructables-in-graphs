var explodeCategory = function(category) {
	console.log(category);
	var WIDTH = 600;
	var HEIGHT = 600;
	var BAR_PADDING = 10;

	var svgTwo = d3.select("body")
				.append("svg")
				.attr("width", WIDTH)
				.attr("height", HEIGHT);

	svgTwo.selectAll("rect")
		.data(category.channels)
		.enter()
		.append("rect")
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