var app = angular.module("app", ["xeditable"]);

app.controller('ProfileCtrl', ['$http', '$scope', '$location', function($http, $scope, $location) {
  $scope.user = {
    name: 'Name',
    profession: 'Profession',
    network: 'Network',
    shortBio: 'Short Bio'
  };  



  $scope.id = (/users\/(\d+)/.exec($location.absUrl())[1]);

  var getProfileProperties = function(){
    $http.get('/users/' + $scope.id + '.json').success(function(data){
      $scope.user = dataup
      $scope.editable = ($scope.user.signInCount === 1) ? true : false
     });
    };

  getProfileProperties();



  $scope.updateProfile = function(property, value) {
    var data = {}
    data[property] = value
    $http.put('/users/' + $scope.id, data);
    getProfileProperties();
   }





}])
