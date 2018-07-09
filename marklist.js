<!DOCTYPE html>
<html>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>

<body>

    <div ng-app="myApp" ng-controller="myCtrl">
        <div class="container margin-top">
            <h1>Student Details</h1>
            <hr>
            <div class="box">

                <div class="row">
                    <div class="col-md-3">
                        <label> first Name</label>
                        <input class="form-control" ng-model="stu.fname" />
                        <label>class</label>
                        <select class="form-control" ng-options="p.Name as p.Name for p in class" ng-model="stu.class"></select>

                        <label>Address</label>
                        <input class="form-control" ng-model="stu.adr" />
                        <label>DOB</label>
                        <input class="form-control" type="date" ng-model="stu.dob" />
                        <br>
                        <button class="btn btn-primary" ng-click="save()">Save</button>
                    </div>
                    <p>{{errText}}</p>
                    <div class="col-md-3">
                        <label> Last Name</label>
                        <input class="form-control" ng-model="stu.lname" />
                        <br>
                        <label>Division</label>
                        <select class="form-control" ng-options="d.Name as d.Name for d in Division" ng-model="stu.dep"></select>
                        <br>
                        <br>
                        <label>MOB</label>
                        <input class="form-control" ng-model="stu.mob" />
                    </div>

                </div>
            </div>
            <h1>Saved</h1>
            <hr>

            <div class="row">
                <div class="col-md-3" ng-repeat="s in student">
                    <div class="box">
                        <h2>Name : {{s.fname}}{{s.lname}}</h2>
                        <p>Division : {{s.dep}}</p>
                        <p>Address : {{s.adr}}</p>
                        <p>Class : {{s.class}}</p>
                        <p>MOB: {{s.mob}}</p>
                        <p>DOB:{{s.dob|date:'dd/MM/yyyy'}}</p>
                        <h4>marklist</h4>
                        <div ng-repeat="m in s.marklist">
                            <p> {{m.subject}}::{{m.mark}}</p>
                        </div>

                        <br>
                        <button class="btn btn-primary" ng-click="addmark(s)">addmark </button>
                    </div>
                </div>
            </div>
            <div ng-if="show == true">
                <h2>Add Mark</h2>
                <div class="row">
                    <div class="box">

                        <label>subject</label>
                        <select class="form-control" ng-options="b.Name as b.Name for b in subject" ng-model="mark.subject"></select>
                        <label>mark</label>
                        <input class="form-control" type="number" ng-model="mark.mark" />
                        <button class="btn btn-primary" ng-click="add()">add </button>


                    </div>
                </div>
            </div>
            <script>
                var app = angular.module('myApp', []);
                app.controller('myCtrl', function($scope) {

                    $scope.Division = [{
                        Id: 1,
                        Name: "A"
                    }, {
                        Id: 2,
                        Name: "B"
                    }, {
                        Id: 3,
                        Name: "C"
                    }, {
                        Id: 4,
                        Name: "D"
                    }];
                    $scope.class = [{
                        Id: 1,
                        Name: "V"
                    }, {
                        Id: 2,
                        Name: "VII"
                    }, {
                        Id: 3,
                        Name: "VIII"
                    }, {
                        Id: 4,
                        Name: "IX"
                    }];
                    $scope.subject = [{
                        Id: 1,
                        Name: "Maths"
                    }, {
                        Id: 2,
                        Name: "Science"
                    }, {
                        Id: 3,
                        Name: "History"
                    }, {
                        Id: 4,
                        Name: "Social"
                    }];
                    $scope.student = [];

                    $scope.Init = function() {
                        $scope.selected = {};
                        $scope.show = false;

                        $scope.errText = "";

                        $scope.stu = {
                            fname: "",
                            lname: "",
                            div: "",
                            DOB: "",
                            mob: 0,
                            dep: "",
                            class: "",
                            total: 0,
                            marklist: [],

                        };

                        $scope.mark = {
                            mark: 0,
                            subject: "",
                        };
                    }
                    $scope.Init();
                    $scope.save = function() {

                        if ($scope.stu.fname == "") {
                            $scope.errText = "Enter Name";
                        } else if ($scope.stu.adr == "") {
                            $scope.errText = "Enter Address";
                        } else if ($scope.stu.mob == "") {
                            $scope.errText = "Enter mobile";
                        } else if ($scope.stu.class == "") {
                            $scope.errText = "Enter class";
                        } else {
                            $scope.student.push($scope.stu);
                            $scope.Init();
                        }
                    }

                    $scope.addmark = function(s) {
                        $scope.selected = s;
                        $scope.show = true;
                    }
                    $scope.add = function() {
                        $scope.selected.marklist.push($scope.mark);
                        $scope.Init();
                    }

                });

            </script>
            <style>
                .margin-top {
                    margin-top: 10%;
                }

                .box {
                    border: 2px solid lightgrey;
                    padding: 5%;
                    margin-top: 2%;
                }

            </style>

</body>

</html>
