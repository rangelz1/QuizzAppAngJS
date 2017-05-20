(function() {

	angular
		.module("quizzApp")
		.controller("listCtrl", ListController);


		function ListController(){
			var vm = this;

			vm.data = listOfAnsweres;
			vm.activeAnswere = {};
			vm.changeActiveAnswere = changeActiveAnswere;

			function changeActiveAnswere(index){
				vm.activeAnswere = index;
			}

		}

		var listOfAnsweres = [
			{
				type: "Answere One",
				image_url: "http://lorempixel.com/400/200/",
				location: "Position One",
				description: "Answere",
			},
			{
				type: "Answere Two",
				image_url: "http://lorempixel.com/400/200/",
				location: "Position Two",
				description: "Answere",
			},
			{
				type: "Answere Three",
				image_url: "http://lorempixel.com/400/200/",
				location: "Position Three",
				description: "Answere",
			},
			{
				type: "Answere Four",
				image_url: "http://lorempixel.com/400/200/",
				location: "Position Four",
				description: "Answere",
			}
		]

})();