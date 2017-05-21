(function() {

	angular
		.module("quizzApp")
		.controller("listCtrl", ListController);

		ListController.$inject = ['quizMetrics'];


		function ListController(quizMetrics){
			var vm = this;

			vm.quizMetrics = quizMetrics;
			vm.data = listOfAnsweres;
			vm.activeAnswere = {};
			vm.changeActiveAnswere = changeActiveAnswere;
			vm.activateQuiz = activateQuiz;
			vm.search = "";
			

			function changeActiveAnswere(index){
				vm.activeAnswere = index;
			}

			function activateQuiz(){
				quizMetrics.changeState(true);
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