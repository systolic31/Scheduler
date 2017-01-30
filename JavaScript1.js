angular.module('Scheduler', [
    'ngAnimate'
])


.controller('MainCtrl', function ($scope, $filter) {
    
    $scope.schedules = [
        { "id": 0, "date": "01/20/2017", "subject": "Programing", "details": "I don't know why I always have stomackace these days." },
        { "id": 1, "date": "01/21/2017", "subject": "Market", "details": "I have to buy some towers" },
        { "id": 2, "date": "01/22/2017", "subject": "Snow board", "details": "I'm gonna go to Mummoth this weekend." }
    ]

    $scope.test = "Hello wolrd!";
    $scope.currentSchedule = null;
    $scope.editedSchedule = null;
    $scope.currentID = 0;

    function setCurrentSchedule(schedule) {
        $scope.currentSchedule = schedule;
    }

    $scope.remove = function (schedule) {
        var index = $scope.schedules.indexOf(schedule);
        $scope.schedules.splice(index, 1);
    }

    function getCurrentScheduleID(schedule)
    {
        return schedule.id;
    }
 

    $scope.reset = function (form) {
        form.date = null;
        form.subject = null;

    }

    function resetForm() {
        $scope.newschedule = {
            date: '',
            subject: '',
            details: ''
        };
    }

    function createSchedule(schedule) {

        schedule.id = $scope.schedules.length;
        $scope.schedules.push(schedule);

        resetForm();

    }

    $scope.createSchedule = createSchedule;

    $scope.isCreating = true;
    $scope.isEditing = false;  

    function startCreating() {
        $scope.isCreating = true;
        $scope.isEditing = false;
    }

    function cancelCreating() {
        $scope.isCreating = false;

    }

    function startEditing() {
        $scope.isEditing = true;
        $scope.isCreating = false;
    }

    function cancelEditing() {
        $scope.isEditing = false;
        $scope.isCreating = true;
    }

    function setEditedSchedule(schedule) {
        $scope.editedSchedule = angular.copy(schedule);
        var date = new Date(schedule.date);
        $scope.editedSchedule.date = new Date(date.getFullYear(),date.getMonth(),date.getDate());
    }

    function updateSchedule(schedule) {
        var index = getCurrentScheduleID(schedule);

        console.log(index);

        $scope.schedules[index] = schedule;

        //$scope.editedSchedule = null;
        $scope.isEditing = false;
    }

    function formValidationCheck() {
        if ($scope.user_form.$valid) {
            alert("Open your mouse!!!!");
        }
    }

    $scope.formValidationCheck = formValidationCheck;

    function shouldShowEditing() {
        return $scope.isEditing && !$scope.isCreating;
    }

    function shouldShowCreating() {
        return $scope.isCreating && !$scope.isEditing;
    }

    $scope.setEditedSchedule = setEditedSchedule;
    $scope.startCreating = startCreating;
    $scope.startEditing = startEditing;
    $scope.cancelCreating = cancelCreating;
    $scope.cancelEditing = cancelEditing;

    $scope.shouldShowCreating = shouldShowCreating;
    $scope.shouldShowEditing = shouldShowEditing;

    $scope.updateSchedule = updateSchedule;
    //-------------------------------------------------
    // CRUD
    //-------------------------------------------------


 
});

