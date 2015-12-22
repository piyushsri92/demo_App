
var myApp=angular.module('login.controller',[]);

myApp.controller('loginCtrl', ['$scope', '$location','performActionService',
	function($scope, $location, performActionService) {


     var promise=performActionService.getData();
     promise.then(function(response){
        //success
        $scope.dataList=response.data; 

     }, function(err){
                    //error
                    alert("something wrong happened");
             })
 


    //var username="piyush";
	$scope.loginClick=function(path){
	 if($scope.username=="piyush" && $scope.pwd=="piyush"){

          $location.path(path);
	 }  
	 else{
	 	alert("username or password is wrong");
	 }

	};

}]);