
var myApp=angular.module('datalist.controller',[]);

myApp.controller('datalistCtrl', ['$scope', '$location','performActionService',
	function($scope, $location, performActionService) {


 var promise=performActionService.getData();
 promise.then(function(response){
        //success
        $scope.dataList=response.data;   
    }, function(err){
                    //error
                    alert("something wrong happened");
             })


 $scope.datalistClicked=function(){
       $scope.addContainer="addContainer";

       // using this-> will open only the clicked box.
       // using $scope-> will open all the boxes on one time click at any button
       this.dataActive=!(this.dataActive);

 };

 $scope.moreCome=function(path){
          $location.path(path);
   };

}]);