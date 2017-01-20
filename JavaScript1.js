angular.module('Scheduler', [
])


.controller('MainCtrl', function ($scope) {
    
    $scope.schedule = [
        { "id": 0, "date": "01/20/2017", "subject": "Programing", "Details": "I don't know why I always have stomackace these days." }
        //{ "id": 1, "date": "01/21/2017", "subject": "Market", "Details": "I have to buy some towers" },
        //{ "id": 2, "date": "01/22/2017", "subject": "Snow board", "Details": "I'm gonna go to Mummoth this weekend." }
    ]
});