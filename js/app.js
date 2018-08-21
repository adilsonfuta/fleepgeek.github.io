var ajApp = angular.module('ajApp', [ 'ngResource']);

ajApp.factory('MessageService', ['$resource', function($resource) {
    return $resource('http://107.22.151.80:8080/api/sendmail', {id: '@_id'}, {

    });
}]);

ajApp.controller('mainController', ['$scope', '$http', 'MessageService', function($scope, $http, MessageService){

    $scope.reset = function() {
        $scope.mail = new MessageService();
        $scope.messageForm.$setPristine();

    };

    $scope.mail = new MessageService();
    $scope.sent = false;

    $scope.sendMsg = function() {
        $scope.mail.to = 'info@ajuwayatech.com';
        $scope.mail.subject = 'Ajuwaya Website Contact Form Message';
        $scope.mail.body =  'From: ' + $scope.mail.name + '<br/>Email: ' + $scope.mail.email + '<br/>Message: ' + $scope.mail.msg;
        $scope.mail.$save(function(response) {
            if(response.success === true) {
                $scope.reset();
                $scope.sent = true;
            }else {
                $scope.msgFail = true;
            }
            
        });
    };
        

}]);