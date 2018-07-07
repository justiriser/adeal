<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>
<marquee direction=left> Have a nice day </marquee>
<div ng-app="myApp" ng-controller="myCtrl">
<font color=red size=5><b>Shopping Cart</b></font><p>
Product Name: <input type="text" ng-model="Obt.PName"<br><p>
Price: <input type="text" ng-model="Obt.Price"<br><p>
Description: <input type="text" ng-model="Obt.Desc"<br><p>
<br>

<button class="" ng-click="add()" > Add </button>   
<button class="" ng-click="clear()" > Clear </button>

<div ng-repeat="p in Pdts">
Product Name: {{p.PName}}<br>
Price: {{p.Price}}<br>
Quantity: <input type="number" ng-model="p.Quan">
<button class="" ng-click="submit()" > Submit </button>
</div>

</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

$scope.Pdts = [];

$scope.Obt = {
	PName : "",
	Price : "",
	Desc : "",
    Quan:0,
}

$scope.add = function() {

	$scope.Pdts.push($scope.Obt);
    
      $scope.Obt = {
          PName : "",
          Price : "",
          Desc : "",

          }
    }
$scope.clear = function(){
$scope.Pdts = [];
}
});




</script>

</body>
</html>
