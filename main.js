var svg;
var statCount = {
						"technology": {},
						"workshop": {},
						"living": {},
						"food": {},
						"play": {},
						"outside": {}					
					};

var setChannels = function(counter, metaData) {
	for (var category in metaData){
		for (var i = 0; i < metaData[category].length; i++){
			counter[category][metaData[category][i].title] = {};
			counter[category][metaData[category][i].title].entries = 0;
			counter[category][metaData[category][i].title].views = 0;
		}
	}
	return "setChannels finished"
}

var countChannels = function(counter, data) {
	for (var i = 0; i < data.items.length; i++){
		if (counter[data.items[i].category][data.items[i].channel]){
			counter[data.items[i].category][data.items[i].channel].entries ++;
			counter[data.items[i].category][data.items[i].channel].views += data.items[i].views;
		}
	}
	return "countChannels finished";
}

var processItems = function(counter, metaData, data){
	setChannels(counter, metaData);
	countChannels(counter, data);
	return counter;
}

statCount = (processItems(statCount, categories, items));



	//Width and height
var WIDTH = 500;
var HEIGHT = 100;

var svg = d3.select("body")
	 		.append("svg")
	 		.attr("width", WIDTH)
	 		.attr("height", HEIGHT);

svg.selectAll("rect")
   .data([1,1,1])
   .enter()
   .append("rect")
   .attr("x", 0)
   .attr("y", 0)
   .attr("width", 20)
   .attr("height", 100);
