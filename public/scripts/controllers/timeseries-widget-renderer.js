//define(['angular', 'sample-module'], function(angular, controllers) {
//    'use strict';
//
//    //This is an example controller that shows how to handle events from other widgets and fetch new data.
//    //Your widget needs to emit a px-dashboard-event and then you can either...
//    //      1. catch it yourself in another widget
//    //      2. catch it in a controller like this which must extend WidgetRendererController (the name of this controller must be specified in your view service widget object)
//    //            id: 'context.myview',
//    //            name: 'Timeseries View',
//    //                widgets: [
//    //                {
//    //                    cardId: 'v-simplest-directive',
//    //                    size: 'half',
//    //                    controller: 'TimeseriesCtrl'
//    //                    ...
//    //                }
//    //              ...
//
//    // ** this is NOT the same as your page controller, as this encapsulates your widget and datasource only **
//    controllers.controller('TimeseriesWidgetRendererCtrl', function ($scope, $controller) {
//
//        // interceptor before any fetch is called
//        $scope.beforeRequest = function(datasource, context) {
//            datasource.options.tags = ['sdf', '234234'];
//            datasource.options.id = context.id;
//            return datasource;
//        };
//
//        // catch the px-dashboard-event
//        //$scope.$on('px-dashboard-event', function(event, name, tags){
//        //    // we suggest having an additional unique name to identify your event
//        //    if(name !== 'my-button-click-event'){
//        //        return;
//        //    }
//        //
//        //    // override the datasource (to customize the method, url, or options)
//        //    $scope.datasource.options.tags = tags;
//        //
//        //    // fetch new data with the modified datasource
//        //    $scope.fetch($scope.datasource);
//        //});
//
//        // Extend the Predix WidgetRendererController
//        // ** this needs to be the LAST line in your CustomWidgetRendererController **
//        angular.extend(this, $controller('WidgetRendererController', {$scope: $scope}));
//
//    });
//});