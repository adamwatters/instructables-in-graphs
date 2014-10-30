

var channelArray = mkChannelArray(categories, data.items);
var categoryArray = mkCategoryArray(categories, channelArray);

window.addEventListener("load", function() {

	makeChart({cats: categoryArray}, "cats");

});
