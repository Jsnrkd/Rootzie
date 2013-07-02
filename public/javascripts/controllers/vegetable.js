function VegetableListCtrl($scope, $http) {
    $http.get('/vegetables').success(function(data) {
        $scope.vegetables = data;
    });
    $scope.orderProp = 'age';
}

//VegetableListCtrl.$inject = ['$scope', '$http'];