var myApp=angular.module('app.route',[]);

myApp.config(function ($routeProvider){
$routeProvider
.when('/',
{
    templateUrl:'modules/views/login.html',
    controller: 'loginCtrl'

})
.when('/datalist',
{
    templateUrl:'modules/views/datalist.html',
    controller: 'datalistCtrl'

})
.when('/moreCome',
{
	templateUrl:'modules/views/morecome.html'
});

});