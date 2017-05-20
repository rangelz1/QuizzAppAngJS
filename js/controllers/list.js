(function() {

	angular
		.module("quizzApp")
		.controller("listCtrl", ListController);


		function ListController(){
			var vm = this;

			vm.data = listOfQuestons;
		}

		var listOfQuestons = [
			{
				type: "Question One",
				image_url: "http://lorempixel.com/400/200/",
				location: "Position One",
			},
			{
				type: "Question Two",
				image_url: "http://lorempixel.com/400/200/",
				location: "Position Two",
			},
			{
				type: "Question Three",
				image_url: "http://lorempixel.com/400/200/",
				location: "Position Three",
			},
			{
				type: "Question Four",
				image_url: "http://lorempixel.com/400/200/",
				location: "Position Four",
			}
		]

})();