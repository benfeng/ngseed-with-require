// 定义API服务
define([
    "angular",
], function (angular) {
    return angular.module("app.services", ["ui.router"])
        .factory("appService", function ($rootScope, $log, $document) {

        return {
            alert: function (msg,callback) {
               
                $log.log(msg)
                if (callback != null) {
                    callback();
                }
            },

        };
        });
});



