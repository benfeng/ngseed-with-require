/**
 * Created by fengbq@live.com on 2015/9/11 0011.
 */
define({
    baseUrl: 'app',
    // Here paths are set relative to `/source` folder
    paths: {
        "domReady": "../lib/requirejs-domReady/domReady",
        "jquery": "../lib/jquery/dist/jquery",
        "angular": "../lib/angular/angular",          
        'ngUiRouter': "../lib/angular-ui-router/release/angular-ui-router",     
        "bootstrapui": "../lib/bootstrap/dist/js/bootstrap",
        "swiper": "../lib/swiper/dist/js/swiper.jquery",     
        "gobal": "gobal",
        "app": "app",
        "main": "../main",
        "bootstrap": "../bootstrap",       
        "appService": "services/_services",
        "appDirective": "directives/_directives",
        "appFilter": "filters/_filters",
        "appController": "controllers/_controllers"
    },
    shim: {
        'jquery': {
            exports: "jquery",
        },
        'angular': {
            'deps': ["jquery"],
            exports: "angular"
        },
      
        'ngUiRouter': ["angular"],
        'bootstrapui': {
            exports: "bootstrapui",
            deps: ["jquery"]
        },
      
        "swiper": {
            exports: "swiper",
            deps: ["jquery"]
        },
      
        'main': {
            deps: ["bootstrapui", "swiper", "appService", "appDirective", "appController"]
        }
    },
});