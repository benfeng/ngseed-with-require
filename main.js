/**
 * Created by fengbq@live.com on 2015/9/11 0011.
 */
define([
    "require",
    "angular",
    "route"], function (require, angular) {

    require(["domReady!"], function (document) {
        angular.bootstrap(document, ["app"]);
    });
});