

var channelArray = mkChannelArray(categories, data.items);
var categoryArray = mkCategoryArray(categories, channelArray);

window.addEventListener("load", function() {

	var WIDTH = 400;
	var HEIGHT = 600;
	var BAR_PADDING = 4;

	var svg = d3.select("body")
				.append("svg")
				.attr("width", WIDTH)
				.attr("height", HEIGHT);

	svg.selectAll("rect")
		.data(categoryArray)
		.enter()
		.append("rect")
		.on("click", function(d) {
			explodeCategory(d);
		})
		.attr("fill", function(d,i){
			return '#'+Math.floor(Math.random()*16777215).toString(16);
		})
		.attr("x", function(d,i) {
			return i * WIDTH / categoryArray.length;
		})
		.attr("y", function(d,i) {
			return HEIGHT - d.totalViews/500;
		})
		.attr("width", WIDTH / categoryArray.length - BAR_PADDING)
		.attr("height", function(d,i) {
			return d.totalViews/500;
		});

	svg.selectAll("text")
		.data(categoryArray)
		.enter()
		.append("text")
		.attr("fill", "black")
		.attr("x", function(d,i) {
			return i * WIDTH / categoryArray.length;
		})
		.attr("y", function(d,i) {
			return HEIGHT - d.totalViews/500;
		})
		.text(function(d){
			return d.name;
		});


});
