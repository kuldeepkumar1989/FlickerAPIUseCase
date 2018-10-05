angular.module(
    'flickerGrid',
    [
        'ui.grid'
    ]
);
angular.module('flickerGrid').controller('flickerGridCtrl', ['$scope', '$http', 'flickerService', function ($scope, $http, flickerService) {
    let vm = this;
    vm.searchImg = "";
    flickerService.getPhotoInfo().then(function (jsonData) {
        vm.photoArray = jsonData.data.photos.photo;
        createImageUrl(vm.photoArray);
    });
    
    createImageUrl = function (photoArray) {
        let arrayLength=  photoArray.length;
        vm.imageURLArray = [];
        for (i = 0; i <  arrayLength; i++) {
            vm.imageURLArray[i] = 'https://farm' + vm.photoArray[i].farm + '.staticflickr.com/' + vm.photoArray[i].server + '/' + vm.photoArray[i].id + '_' + vm.photoArray[i].secret + '.jpg'
        }
    }
    
    vm.searchMethod = function(value) {
        let searchedData= JSON.search(vm.photoArray, "//*[contains(text(), '"+value+"')]/..");
        createImageUrl(searchedData);
    }

    vm.refresh = function() {
        createImageUrl(vm.photoArray);
    }
}]);

angular.module('flickerGrid').directive('flickerGridDirective', function () {
    return {
        restrict: 'E',
        controller: 'flickerGridCtrl as vm',
        templateUrl: './ui-grid/template.html'
    }
});