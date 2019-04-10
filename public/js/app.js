"use strict";
var app;
angular.module('routerApp', ['oc.lazyLoad', 'ngTable', 'ui.router', 'ui.bootstrap','ui.grid','ui.grid.edit','ui.grid.pagination'])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home/home');

            $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'views/partial-home.html',
                resolve: {
                    loadMyDirectives: ['$ocLazyLoad', function ($ocLazyLoadProvider) {
                        return $ocLazyLoadProvider.load({
                            name: 'routerApp',
                            files: ['/angular-ui-router/public/js/header/header.js', '/angular-ui-router/public/js/sidebar.js']
                        });
                    }]
                }
            })
                .state('home.home', {
                    url: '/home',
                    templateUrl: 'views/home.html',
                })
                .state('home.list', {
                    url: '/list',
                    templateUrl: 'views/partial-home-list.html',
                    controller: function ($scope) {
                        $scope.dogs = ['Doga', 'Dogb', 'Dogc'];
                    }
                })

                .state('home.pipeline', {
                    url: '/pipeline',
                    templateUrl: 'views/pipeline.html',
                    controller: 'pipelineCtrl'
                })
                .state('home.grid', {
                    url: '/ggg',
                    templateUrl: 'views/aaa.html',
                    controller: 'gg'
                })

                // nested list with just some random string data
                .state('home.paragraph', {
                    url: '/paragraph',
                    template: 'I could sure use a drink right now.'
                })
                //表单
                .state('home.form', {
                    url: '/form',
                    templateUrl: 'views/form/form.html',
                    controller: 'formCtrl'
                })
                .state('home.edit', {
                    url: '/edit',
                    templateUrl: 'views/edit.html',
                    controller: 'demoController'
                })
                .state('home.sql', {
                    url: '/sql',
                    templateUrl: 'views/form/sql.html',
                    controller: 'uploadCtrl'
                })
                // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
                .state('about', {
                    url: '/about',
                    views: {
                        // the main template will be placed here (relatively named)
                        '': {templateUrl: 'views/partial-about.html'},

                        // the child views will be defined here (absolutely named)
                        'columnOne@about': {
                            template: 'Look I am a column!'
                        },

                        // for column two, we'll define a separate controller
                        'columnTwo@about': {
                            templateUrl: 'views/table-data.html',
                            controller: 'scotchController'
                        }
                    }
                })
        }]);

(angular.module("routerApp")).service("AppService", ["$http", function (e) {
    this.getApps = function () {
        return e({url: "app/briefinfos.json", method: "GET"})
    }
}]);
(angular.module('routerApp')).controller('uploadCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.formData = {};
    $scope.upload = upload;

    function upload() {
        const fd = new FormData();
        if (!$scope.fileToUpload) {
            alert("文件为空");
            return;
        }
        fd.append("file", $scope.fileToUpload);
        fd.append("info", $.param($scope.formData));
        $http.post('/angular/data.json', fd, {
            transformRequest: angular.identity,
            headers: {"Content-Type": undefined}
        }).success(function (data) {

        }).error(function (data) {

        });
    }
}]);
(angular.module('routerApp')).controller('pipelineCtrl', ['$scope', function ($scope) {
    $scope.hello = 'Hello World!';
}]);
(angular.module('routerApp')).controller('gg', ['$scope','i18nService', function ($scope,i18nService) {
    i18nService.setCurrentLang('zh');
    $scope.gridOptions = {
        enableSorting: true,
        paginationPageSizes: [25, 50, 75],
        paginationPageSize: 25,
        columnDefs: [
            {name: 'firstName', field: 'first-name'},
            {name: '1stFriend', field: 'friends[0]'},
            {name: 'city', field: 'address.city'},
            {name: 'getZip', field: 'getZip()', enableCellEdit: false}
        ],
        data: [{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },{
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street: "301 Dove Ave", city: "Laurel", zip: "39565"},
            "getZip": function () {
                return this.address.zip;
            }
        },
        ]
    };
}]);
(app = angular.module("routerApp")).controller("formCtrl", ['$http', '$scope', function ($http, $scope) {
    $scope.rowList = [{
        index: 0,
        chineseName: '11',
        dateType: '22',
        length: 20,
        unquie: '不唯一',
        defaultValue: '没有',
        comment: '五'
    }, {
        index: 1,
        chineseName: '22',
        dateType: '33',
        length: 20,
        unquie: '不唯一',
        defaultValue: '没有',
        comment: '五'
    }, {
        index: 2,
        chineseName: '33',
        dateType: '44',
        length: 20,
        unquie: '不唯一',
        defaultValue: '没有',
        comment: '五'
    }];
    $scope.formData = {};
    $scope.submit = function () {
        $scope.formData.columnVos = JSON.stringify($scope.rowList);
        $http({
            method: 'POST',
            url: '/abc/ddd.json',
            data: $.param($scope.formData),  // pass in data as strings
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
        })
            .success(function (data) {
                console.log(data);
                if (!data.success) {
                    // if not successful, bind errors to error variables
                    $scope.errorName = data.errors.name;
                    $scope.errorSuperhero = data.errors.superheroAlias;
                } else {
                    // if successful, bind success message to message
                    $scope.message = data.message;
                }
            }).error(function (data) {
            console.log($scope.formData);
            alert(data);
        })
    };

    $scope.addRow = addrow;
    $scope.delete = deleteRow;

    function deleteRow(row) {
        const index = row.index;
        $scope.rowList.splice($scope.rowList.findIndex(item => item.index === index), 1)
    }

    function addrow() {
        const index = $scope.rowList.length;
        console.log(index);
        $scope.rowList.push({
            index: index,
            chineseName: '',
            dateType: '',
            length: 20,
            unquie: '不唯一',
            defaultValue: '没有',
            comment: '五'
        });
    }
}]);


(angular.module('routerApp').controller('demoController', ['$scope', 'NgTableParams',
    function ($scope, NgTableParams) {
        $scope.header = [{name: "年龄", age: "年纪", date: "date", operation: "操作"}];
        var self = this;
        self.cols = [{
            field: "name",
            title: "Name",
            filter: {
                name: "text"
            },
            sortable: "name",
            dataType: "text"
        }, {
            field: "age",
            title: "Age",
            filter: {
                age: "number"
            },
            sortable: "age",
            dataType: "number"
        }, {
            field: "money",
            title: "Money",
            filter: {
                money: "number"
            },
            sortable: "money",
            dataType: "number"
        }, {
            field: "action",
            title: "",
            dataType: "command"
        }];

        const simpleList = [{
            info: {name: 'chen1', age: 214, money: 1234}
        }, {
            info: {name: 'chen1', age: 214, money: 1234}
        }];

        var originalData = angular.copy(simpleList);

        self.tableParams = new NgTableParams({}, {
            filterDelay: 0,
            dataset: angular.copy(simpleList)
        });
        self.cancel = cancel;
        self.del = del;
        self.save = save;

//取消
        function cancel(row, rowForm) {
            console.log('cancel');
            var originalRow = resetRow(row, rowForm);
            angular.extend(row, originalRow);
        }

        function del(row) {
            console.log("delete");
            _.remove(self.tableParams.settings().dataset, function (item) {
                return row === item;
            });
            self.tableParams.reload().then(function (data) {
                if (data.length === 0 && self.tableParams.total() > 0) {
                    self.tableParams.page(self.tableParams.page() - 1);
                    self.tableParams.reload();
                }
            });
        }

        function resetRow(row, rowForm) {
            console.log('resetRow');
            row.isEditing = false;
            rowForm.$setPristine();
            self.tableTracker.untrack(row);
            return _.findWhere(originalData, function (r) {
                return r.id === row.id;
            });
        }

        function save(row, rowForm) {
            console.log(save);
            var originalRow = resetRow(row, rowForm);
            angular.extend(originalRow, row);
        }
    }]));


//指令
(function () {
    angular.module("routerApp").directive("demoTrackedTable", demoTrackedTable);
    demoTrackedTable.$inject = [];

    function demoTrackedTable() {
        return {
            restrict: "A",
            priority: -1,
            require: "ngForm",
            controller: demoTrackedTableController
        };
    }

    demoTrackedTableController.$inject = ["$scope", "$parse", "$attrs", "$element"];

    function demoTrackedTableController($scope, $parse, $attrs, $element) {
        var self = this;
        var tableForm = $element.controller("form");
        var dirtyCellsByRow = [];
        var invalidCellsByRow = [];

        init();

        function init() {
            var setter = $parse($attrs.demoTrackedTable).assign;
            setter($scope, self);
            $scope.$on("$destroy", function () {
                setter(null);
            });

            self.reset = reset;
            self.isCellDirty = isCellDirty;
            self.setCellDirty = setCellDirty;
            self.setCellInvalid = setCellInvalid;
            self.untrack = untrack;
        }

        function getCellsForRow(row, cellsByRow) {
            return _.find(cellsByRow, function (entry) {
                return entry.row === row;
            })
        }

        function isCellDirty(row, cell) {
            var rowCells = getCellsForRow(row, dirtyCellsByRow);
            return rowCells && rowCells.cells.indexOf(cell) !== -1;
        }

        function reset() {
            dirtyCellsByRow = [];
            invalidCellsByRow = [];
            setInvalid(false);
        }

        function setCellDirty(row, cell, isDirty) {
            setCellStatus(row, cell, isDirty, dirtyCellsByRow);
        }

        function setCellInvalid(row, cell, isInvalid) {
            setCellStatus(row, cell, isInvalid, invalidCellsByRow);
            setInvalid(invalidCellsByRow.length > 0);
        }

        function setCellStatus(row, cell, value, cellsByRow) {
            var rowCells = getCellsForRow(row, cellsByRow);
            if (!rowCells && !value) {
                return;
            }

            if (value) {
                if (!rowCells) {
                    rowCells = {
                        row: row,
                        cells: []
                    };
                    cellsByRow.push(rowCells);
                }
                if (rowCells.cells.indexOf(cell) === -1) {
                    rowCells.cells.push(cell);
                }
            } else {
                _.remove(rowCells.cells, function (item) {
                    return cell === item;
                });
                if (rowCells.cells.length === 0) {
                    _.remove(cellsByRow, function (item) {
                        return rowCells === item;
                    });
                }
            }
        }

        function setInvalid(isInvalid) {
            self.$invalid = isInvalid;
            self.$valid = !isInvalid;
        }

        function untrack(row) {
            _.remove(invalidCellsByRow, function (item) {
                return item.row === row;
            });
            _.remove(dirtyCellsByRow, function (item) {
                return item.row === row;
            });
            setInvalid(invalidCellsByRow.length > 0);
        }
    }
})();

(function () {
    angular.module("routerApp").directive("demoTrackedTableRow", demoTrackedTableRow);

    demoTrackedTableRow.$inject = [];

    function demoTrackedTableRow() {
        return {
            restrict: "A",
            priority: -1,
            require: ["^demoTrackedTable", "ngForm"],
            controller: demoTrackedTableRowController
        };
    }

    demoTrackedTableRowController.$inject = ["$attrs", "$element", "$parse", "$scope"];

    function demoTrackedTableRowController($attrs, $element, $parse, $scope) {
        var self = this;
        var row = $parse($attrs.demoTrackedTableRow)($scope);
        var rowFormCtrl = $element.controller("form");
        var trackedTableCtrl = $element.controller("demoTrackedTable");

        self.isCellDirty = isCellDirty;
        self.setCellDirty = setCellDirty;
        self.setCellInvalid = setCellInvalid;

        function isCellDirty(cell) {
            return trackedTableCtrl.isCellDirty(row, cell);
        }

        function setCellDirty(cell, isDirty) {
            trackedTableCtrl.setCellDirty(row, cell, isDirty)
        }

        function setCellInvalid(cell, isInvalid) {
            trackedTableCtrl.setCellInvalid(row, cell, isInvalid)
        }
    }
})();

(function () {
    angular.module("routerApp").directive("demoTrackedTableCell", demoTrackedTableCell);
    demoTrackedTableCell.$inject = [];

    function demoTrackedTableCell() {
        return {
            restrict: "A",
            priority: -1,
            scope: true,
            require: ["^demoTrackedTableRow", "ngForm"],
            controller: demoTrackedTableCellController
        };
    }

    demoTrackedTableCellController.$inject = ["$attrs", "$element", "$scope"];

    function demoTrackedTableCellController($attrs, $element, $scope) {
        var self = this;
        var cellFormCtrl = $element.controller("form");
        var cellName = cellFormCtrl.$name;
        var trackedTableRowCtrl = $element.controller("demoTrackedTableRow");

        if (trackedTableRowCtrl.isCellDirty(cellName)) {
            cellFormCtrl.$setDirty();
        } else {
            cellFormCtrl.$setPristine();
        }
        // note: we don't have to force setting validaty as angular will run validations
        // when we page back to a row that contains invalid data

        $scope.$watch(function () {
            return cellFormCtrl.$dirty;
        }, function (newValue, oldValue) {
            if (newValue === oldValue) return;

            trackedTableRowCtrl.setCellDirty(cellName, newValue);
        });

        $scope.$watch(function () {
            return cellFormCtrl.$invalid;
        }, function (newValue, oldValue) {
            if (newValue === oldValue) return;

            trackedTableRowCtrl.setCellInvalid(cellName, newValue);
        });
    }
})();

(function () {
    angular.module('routerApp').directive("fileModel", ["$parse", function ($parse) {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                const model = $parse(attrs.fileModel);
                const modelSetter = model.assign;
                element.bind("change", function () {
                    scope.$apply(function () {
                        modelSetter(scope, element[0].files[0]);
                    })
                })
            }
        }
    }]);
})();



