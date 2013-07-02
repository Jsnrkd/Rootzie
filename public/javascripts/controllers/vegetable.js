function VegetableListCtrl($scope, $http) {
    $http.get('/vegetables').success(function(data) {
        $scope.vegetables = data;
    });
    $scope.orderProp = 'zip';
}

function AddVegetableFormCtrl($scope, $http, $location) {
    $scope.submit = function(){
        var data = {
            "vegType" : $scope.vegType,
            "zip" : $scope.zip
        };
        $http.post('/vegetables', data).success(function(data){
            $location.path('/');
        });
    };
}

//VegetableListCtrl.$inject = ['$scope', '$http'];