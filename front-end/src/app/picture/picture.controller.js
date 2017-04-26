/**
 * Front-end controller for the profile picture.
 */

export class PictureController {
    /**
     * Constructor for this controller.  Gets all the profile images.
     */
    constructor($http, authUser, API_URL) {
        'ngInject';

        this.$http = $http;
        this.userId = authUser.getUserId();
        this.getAllPictures();
        this.file = {};
    }

    /**
     * Gets all profile image files.
     */
    getAllPictures() {
        var vm = this;
        vm.currentUser = this.userId;
        this.$http.get(API_URL + 'api/pictures/' + this.userId).then(function(result) {
            vm.files = result.data;
        });
    }

    /**
     * Deletes a particular picture.
     */
    removePicture(pictureId) {
        var vm = this;
        this.$http.post(API_URL + '/api/picture/remove/' + pictureId).then(function(result) {
            vm.getAllPictures();
        });
    }

    /**
     * Sets a picture as the profile picture.
     */
    setProfilePicture(pictureId) {
        var vm = this;
        var upinfo = this.userId + ':' + pictureId;
        this.$http.post(API_URL + 'api/picture/setprofilepicture/' + upinfo);
    }

}
