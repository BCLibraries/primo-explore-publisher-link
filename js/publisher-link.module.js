angular
    .module('bc-publisher-link', [])
    .controller('prmSearchResultAvailabilityLineAfterController',  [function () {
        var vm=this;
        vm.links = vm.parentCtrl.result.pnx.links;
        vm.backLink = (vm.links.backlink === undefined) ? "" : vm.links.backlink[0];
        vm.publisherLink = getLinkData(vm.backLink);

        function getLinkData(string) {
            var array = string.split(/\$\$[A-Z]/);
            return array;
        }

    }])
    .component('prmSearchResultAvailabilityLineAfter',{
        bindings:{parentCtrl:'<'},
        controller: 'prmSearchResultAvailabilityLineAfterController',
        templateUrl:'primo-explore-publisher-link/html/publisher-link.html'
});
