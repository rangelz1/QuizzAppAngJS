(function() {

	angular
		.module("quizzApp")
		.controller("listCtrl", ListController);

		ListController.$inject = ['quizMetrics', 'DataService'];


		function ListController(quizMetrics, DataService){
			var vm = this;

			vm.quizMetrics = quizMetrics;
			vm.data = DataService.answeresData;
			vm.activeAnswer = {};
			vm.changeActiveAnswer = changeActiveAnswer;
			vm.activateQuiz = activateQuiz;
			vm.search = "";
			

			function changeActiveAnswer(index){
				vm.activeAnswer = index;
			}

			function activateQuiz(){
				quizMetrics.changeState(true);
			}

		}

})();