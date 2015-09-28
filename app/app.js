define([
    "angular",
   "controllers/MainController",
    "ngUiRouter"], function (angular) {

        return angular.module("app", [
            "ui.router",
            "app.services",
            "app.controllers",
            "app.directives"])
        .run(function ($rootScope, $state, $log) {
            $log.log("%o  // app start //", new Date());

            $state.go("home")
        });
});



