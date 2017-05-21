(function() {
	angular
		.module("quizzApp")
		.factory("quizMetrics", QuizMetrics);

		function QuizMetrics(){
			var quizObj = {
				quizActive: false
			};
		}

})