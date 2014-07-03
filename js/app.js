/**
 * Created by mat on 03/07/14.
 */

var app = angular.module("app", []);

app.controller("MainCtrl", function($scope) {
	//$scope.colorChoice;
	$scope.colorChoices = [
		{
            "header": "#8fe6d5",
            "background": "#645687",
			"text" : "#2ecc71",
			"link" : "white",

		},
		{
            "header": "#ecf0f1",
			"background": "#1abc9c",
			"text" : "#ffffff",
			"link" : "#2980b9",

		},

        {
            "header": "lightyellow",
            "background": "#fe5b54",
            "text" : "white",
            "link" : "orange",

        },
	];
});

app.directive("palettePicker", ["$document", function ($document) {
	return {
		restrict: "E",
		scope: {
			choices: '=',
			choice: '='
		},
		templateUrl: "palette-picker.html",
		link: function (scope, element) {
			scope.pickerVisible = false;

			scope.togglePicker = function () {
				scope.pickerVisible = !scope.pickerVisible;
			}

			scope.choosePalette = function (item) {
				scope.choice = item;

			}

      	var elementMatchesAnyInArray = function(element, elementArray) {
			for (var i=0; i < elementArray.length; i++) {
				if (element == elementArray[i]) {
					return true;
				}
			}
			return false;
		}

		$document.bind('click', function(){
			if (elementMatchesAnyInArray(event.target, element.find(event.target.tagName))) {
				//show the menu after the click
				//return

                //hide the menu after the click
                return scope.pickerVisible = false;;
			}

			scope.pickerVisible = false;
			scope.$apply();
		});
		}
	}
}]);