define([
    "app",
    "ngUiRouter"], function (app) {
        return app.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("home", {
                    url: "",
                    templateUrl: "app/views/main.html",
                    controller: "MainController",
                    params: {
                        requireAuth: true
                    }
                })

            $urlRouterProvider.otherwise("/");
        });

});



