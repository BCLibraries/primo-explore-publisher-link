angular
    .module('bc-publisher-link', [])
    .controller('prmSearchResultAvailabilityLineAfterController',  [function () {
        var vm=this;
        vm.links = vm.parentCtrl.result.pnx.links;
        vm.backLink = (vm.links.backlink === undefined) ? "" : vm.links.backlink[0];
        vm.publisherLink = getLinkData(vm.backLink);
        vm.doi = vm.parentCtrl.result.pnx.addata.doi;
        if (vm.doi) {
            vm.doiLink = "https://login.proxy.bc.edu/login?url=https://dx.doi.org/" + vm.doi;
        }

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
