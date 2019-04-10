angular.module('routerApp')
    .directive('sidebar', ['AppService', '$stateParams', function () {
        return {
            templateUrl: '/angular-ui-router/public/views/sidebar/sidebar.html',
            restrict: 'E',
            replace: true,
            scope: {},
            controller: function ($scope, $stateParams, $location, AppService) {

                AppService.getApps().success(function (data) {
                    console.log(data);
                });

                const info = "{\"code\":0,\"msg\":\"success\",\"data\":[{\"app\":\"sentinel-dashboard\",\"machines\":[{\"app\":\"sentineldashboard\",\"hostname\":\"localhost\",\"ip\":\"10.153.196.131\",\"port\":808,\"version\":1553853591684}]}]}";
                const data = JSON.parse(info);
                const initHashApp = $location.path().split('/')[3];
                $scope.apps = data.data;
                $scope.apps.forEach(function (item) {
                    if (item.app === initHashApp) {
                        item.active = true;
                    }
                });
                // toggle side bar
                $scope.click = function ($event) {
                    var element = angular.element($event.target);
                    var entry = angular.element($event.target).scope().entry;
                    entry.active = !entry.active;

                    if (entry.active === false) {
                        element.parent().children('ul').hide();
                    } else {
                        element.parent().parent().children('li').children('ul').hide();
                        element.parent().children('ul').show();
                    }
                };

                /**
                 * @deprecated
                 */
                $scope.addSearchApp = function () {
                    var findApp = false;
                    for (var i = 0; i < $scope.apps.length; i++) {
                        if ($scope.apps[i].app === $scope.searchApp) {
                            findApp = true;
                            break;
                        }
                    }
                    if (!findApp) {
                        $scope.apps.push({app: $scope.searchApp});
                    }
                };
            }
        }
    }]);