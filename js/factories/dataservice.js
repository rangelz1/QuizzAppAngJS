(function() {

	angular
		.module("quizzApp")
		.factory("DataService", DataFactory);

		function DataFactory(){
			var dataObj = {
				answeresData: answeresData,
				quizQuestions: quizQuestions
			};

			return dataObj;
		}

var quizQuestions = [
		{
			type: "text",
			text: "a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence.",
			possibilities: [
			{
				answer: "An Operator"
			},
			{
				answer: "An Array"
			},
			{
				answer: "An Object"
			},
			{
				answer: "A Variable"
			},
			],
			selected: null,
			correct: null
		},
		{
			type: "text",
			text: "a single objects that contain multiple values stored in a list.",
			possibilities: [
			{
				answer: "An Operator"
			},
			{
				answer: "An Array"
			},
			{
				answer: "A Function"
			},
			{
				answer: "A Loop"
			},
			],
			selected: null,
			correct: null
		},
		{
			type: "text",
			text: "all to do with doing the same thing over and over again, which is great for rapidly completing repetitive tasks.",
			possibilities: [
			{
				answer: "An Operator"
			},
			{
				answer: "An Array"
			},
			{
				answer: "An Object"
			},
			{
				answer: "A Loop"
			},
			],
			selected: null,
			correct: null
		},
		{
			type: "text",
			text: "allow you to store a piece of code that does a single task inside a defined block, and then call that code whenever you need it using a single short command — rather than having to type out the same code multiple times.",
			possibilities: [
			{
				answer: "An Operator"
			},
			{
				answer: "An Array"
			},
			{
				answer: "An Object"
			},
			{
				answer: "Functions"
			},
			],
			selected: null,
			correct: null
		},
];

var answeresData = [
			{
				type: "Answer One",
				image_url: "http://lorempixel.com/400/200/",
				location: "Position One",
				description: "Answer",
			},
			{
				type: "Answer Two",
				image_url: "http://lorempixel.com/400/200/",
				location: "Position Two",
				description: "Answer",
			},
			{
				type: "Answer Three",
				image_url: "http://lorempixel.com/400/200/",
				location: "Position Three",
				description: "Answer",
			},
			{
				type: "Answer Four",
				image_url: "http://lorempixel.com/400/200/",
				location: "Position Four",
				description: "Answer",
			}
		]


})();