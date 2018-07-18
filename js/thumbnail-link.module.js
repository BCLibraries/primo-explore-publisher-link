angular
    .module('bc-thumbnail-link', [])
    .controller('prmSearchResultThumbnailContainerAfterController',  [function () {
        var vm=this;
        vm.linktorsrc = getLinkData(vm.parentCtrl.item.pnx.links.linktorsrc[0]);

        function getLinkData(string) {
            var array = string.split(/\$\$[A-Z]/);
            return array;
        }
    }])
    .component('prmSearchResultThumbnailContainerAfter',{
        bindings:{parentCtrl:'<'},
        controller: 'prmSearchResultThumbnailContainerAfterController',
        templateUrl:'primo-explore-thumbnail-link/html/thumbnail-link.html'
});
