var mkCategoryArray = function(categories, channelArray){

	var emptyCategoryArray = [];

	var Category = function (name) {
		this.name = name;
		this.channels = [];
		this.totalItems = 0;
		this.totalViews = 0;
	};

	var setCategories = function (categoryArray, categories) {
		for (category in categories) {
			categoryArray.push(new Category(category));
		}
		return categoryArray;
	};

	var populateCategories = function (categoryArray, channelArray) {
		for (var i = 0; i < categoryArray.length; i++) {
			for (var j = 0; j < channelArray.length; j++){
				if (categoryArray[i].name === channelArray[j].category){
					categoryArray[i].channels.push(channelArray[j]);
					categoryArray[i].totalItems += channelArray[j].items;
					categoryArray[i].totalViews += channelArray[j].views;
				}
			}
		}
		return categoryArray;
	}

	var theCategoryArray = populateCategories(
								setCategories(
									emptyCategoryArray, 
									categories),
								channelArray
						);

	return theCategoryArray;
};