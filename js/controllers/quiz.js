(function() {

	angular
		.module("quizzApp")
		.controller("quizCtrl", QuizController);

		QuizController.$inject = ['quizMetrics', 'DataService'];

		function QuizController(quizMetrics, DataService){

			var vm = this;

			vm.quizMetrics = quizMetrics;
			vm.dataService = DataService;
			vm.questionAnswered = questionAnswered;
			vm.setActiveQuestion = setActiveQuestion;
			vm.activeQuestion = 0;

			var numQuestionsAnswered = 0;

			function setActiveQuestion(){
				var breakOut = false;
				var quizLength = DataService.quizQuestions.length - 1;

				while(!breakOut){
					vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;

					if(DataService.quizQuestions[vm.activeQuestion].selected === null){ //this line stops question selection if no more questions
						breakOut = true;
					}
				}

			}

			function questionAnswered(){

				var quizLength = DataService.quizQuestions.length;
				
				if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
					numQuestionsAnswered++;
					if(numQuestionsAnswered >= quizLength){
						//finalise quiz
					}
				}

				vm.setActiveQuestion();
			}

		}



})();