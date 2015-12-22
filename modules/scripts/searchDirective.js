var myApp = angular.module('searchfield.directives',[]);
myApp.filter('searchField', function(){
    return {
      restrict: 'A',

/*controller: function($scope, performActionService) {

    var promise=performActionService.getData();
    promise.then(function(response){
        $scope.searchList=response.data;   
    }, function(err){
                    alert("Cant find the search item");
             });

      return function(arr, searchString){
      debugger;
      if(!searchString){
        debugger;
             return arr;
      }
      var result=[];
      searchString=searchString.toLowerCase();
      angular.forEach(arr, function(searchList){
        debugger;
          if(searchList.name.toLowerCase().indexOf(searchString)!=-1){
                 result.push(searchList.name);
          }

      });
      return result;
    };

}, */

/*
link:function($scope, element, attrs, performActionService){
     
    return function(arr, searchString){
      debugger;
      if(!$scope.searchString){
        debugger;
             return arr;
      }
      var result=[];
      searchString=searchString.toLowerCase();
      angular.forEach(arr, function(searchList){
        debugger;
          if(searchList.name.toLowerCase().indexOf(searchString)!=-1){
                 result.push(searchList);
          }

      });
      return result;
    }; */
}
});