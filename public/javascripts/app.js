angular.module('rootzie', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'partials/vegetable-list.html',   controller: VegetableListCtrl}).
            when('/vegetables/add', {templateUrl: 'partials/add-vegetable.html', controller: AddVegetableFormCtrl}).
            otherwise({redirectTo: '/'});
    }]);