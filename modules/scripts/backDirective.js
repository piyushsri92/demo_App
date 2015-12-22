var myApp = angular.module('backbutton.directives',[]);
myApp.directive('backButton', function(){
    return {
      restrict: 'A',

link:function(scope, element, attrs){
scope.goBack=function(){
         history.back();
         //scope.$apply();
}

}
   }
});