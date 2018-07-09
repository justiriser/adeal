<!DOCTYPE html>
<html>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>

<body style="background-color:lightyellow;">
    <div ng-app="myApp" ng-controller="myCtrl">

        <div class="container margin-top">
            <h1>Add Product</h1>
            <hr>

            <div class="box">

                <div class="row">
                    <div class="col-md-3">
                        <label>Product Name</label>
                        <input class="form-control" ng-model="Pdt.Name" />
                    </div>
                    <div class="col-md-3">
                        <label>Category</label>
                        <select class="form-control" ng-options="c.Name as c.Name for c in Category" ng-model="Pdt.Category"></select>
                    </div>
                    <div class="col-md-3">
                        <label>Product Price</label>
                        <input type="number" class="form-control" ng-model="Pdt.Price" />
                    </div>
                    <div class="col-md-3">
                        <label>Product Description</label>
                        <input class="form-control" ng-model="Pdt.Desc" />
                    </div>
                    <div class="col-md-3">
                        <br>
                        <button class="btn btn-primary" ng-click="AddProduct()">Add Product</button>
                    </div>
                </div>
                <br>
                <p>{{errText}}</p>
            </div>

            <br>
            <br>
            <h1>Products</h1>
            <hr>

            <div class="row">
                <div class="col-md-3" ng-repeat="p in Products">
                    <div class="box">
                        <h1>Name : {{p.Name}}</h1>
                        <p>Category : {{p.Category}}</p>
                        <p>Price : {{p.Price}}</p>
                        <p>Description : {{p.Desc}}</p>
                        <label>Quantity</label>
                        <input class="form-control" type="number" ng-model="p.Qty" ng-change="calcTot(p)">
                        <br> Total : {{p.Total}}
                        <br>
                        <button class="btn btn-primary" ng-click="Addcart(p)">Add To Cart </button>
                    </div>
                </div>
            </div>
            {{errText2}}
            <br>
            <br>
            <h1>my cart</h1>
            <hr>

            <div class="row">
                <div class="col-md-3" ng-repeat="c in myCarts">
                    <div class="box">
                        <h2>Product Name : {{c.product.Name}}</h2>
                        <p>Price : {{c.product.Price}}</p>
                        <p>Description : {{c.product.Desc}}</p>
                        <p>Qty : {{c.Quantity}}</p>
                        <p>Total : {{c.Total}}</p>
                    </div>
                </div>
            </div>

            <h1>Total : {{gTotal}}</h1>

        </div>


    </div>

    <script>
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function($scope) {

            $scope.Category = [{
                Id: 1,
                Name: "Clothing"
            }, {
                Id: 2,
                Name: "Electronics"
            }, {
                Id: 3,
                Name: "Health"
            }, {
                Id: 4,
                Name: "Home and kitchen"
            }];

            console.log($scope.Category);

            $scope.Products = [];
            $scope.myCarts = [];

            $scope.gTotal = 0;

            $scope.Init = function() {

                $scope.errText = "";

                $scope.Pdt = {
                    Name: "",
                    Category: "",
                    Price: 0,
                    Desc: "",
                    Qty: 0,
                    Total: 0,
                };
            }
            $scope.Init();

            $scope.AddProduct = function() {

                if ($scope.Pdt.Name == "") {
                    $scope.errText = "Enter Name";
                } else if ($scope.Pdt.Price == 0) {
                    $scope.errText = "Enter Price";
                } else {
                    $scope.Products.push($scope.Pdt);
                    $scope.Init();
                }


            }

            $scope.Addcart = function(data) {
                $scope.errText2 = "";
                if (data.Qty == 0) {
                    $scope.errText2 = "Give quantity";
                } else {

                    var cart = {
                        product: data,
                        Quantity: data.Qty,
                        Total: 0,
                    };

                    cart.Total = cart.Quantity * cart.product.Price;

                    $scope.myCarts.push(cart);
                }
                $scope.gTotal = 0;
                angular.forEach($scope.myCarts, function(e) {
                    $scope.gTotal = $scope.gTotal + e.Total;
                    console.log(e);
                });
            }


            $scope.calcTot = function(data) {
                data.Total = data.Qty * data.Price;
            }


        });

    </script>


    <style>
        .margin-top {
            margin-top: 5%;
        }
        
        .box {
            border: 1px solid lightgrey;
            padding: 2%;
            margin-top: 1%;
        }
        
        </style> </body> </html>
