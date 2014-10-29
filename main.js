

var channelArray = mkChannelArray(categories, data.items);
var categoryArray = mkCategoryArray(categories, channelArray);

window.addEventListener("load", function() {

	makeCategoryChart({children: categoryArray});

});
