 var myApp = angular.module('shared.services', []);  
    myApp.service('performActionService', ['$http', '$q', '$rootScope', function($http, $q, $rootScope) {
 
var deferred = $q.defer();
$http.get('stubs/userlist.json').then(function (response)
{
 deferred.resolve(response);   
});

this.getData=function(){
    
    return deferred.promise;
}



    /*    $http({  
            url: "WebService1.asmx/HelloWorld",  
            dataType: 'json',  
            method: 'POST',  
            data: '',  
            headers: {  
                "Content-Type": "application/json"  
            }  
        }).success(function (response) {  
            $scope.value = response;  
        })  
        .error(function (error) {  
            alert(error);  
        }); 
 */

/* 
   function performAction(requestObj) {
        var deferredAbort = $q.defer();
        requestObj.timeout = deferredAbort.promise;
        var request = $http(requestObj);
        var promise = request.then(
            function(response) {

                return (response.data);

            },
            function(response) {
                return ($q.reject(response));

            }
        );
        promise.abort = function() {
            deferredAbort.resolve();
        };
        promise.finally(
            function() {
                promise.abort = angular.noop;
                deferredAbort = request = promise = null;
            }
        );

        return (promise);
    }
    return ({
        performAction: performAction
    });

*/




    }]);  