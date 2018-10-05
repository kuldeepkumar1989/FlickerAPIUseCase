
angular.module('flickerGrid').service('flickerService', function ($http) {
    return {
    getPhotoInfo: function() {
        this.flickrApiKey = "df9cae36ce6c2da0499eb6e13b915993";
        this.flickerUrl= "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=df9cae36ce6c2da0499eb6e13b915993&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1";
        return $http({
            method: 'GET',
            url : this.flickerUrl
          });
        },
    }
});