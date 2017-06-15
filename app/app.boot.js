System.register(['@angular/platform-browser-dynamic', './app.modules'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_modules_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_modules_1_1) {
                app_modules_1 = app_modules_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_modules_1.AppModule);
        }
    }
});
//# sourceMappingURL=app.boot.js.map