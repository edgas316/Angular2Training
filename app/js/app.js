(function(app) {

  let platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;
  let AppModule = app.AppModule
  
  platformBrowserDynamic().bootstrapModule(AppModule);

})(window.app || (window.app = {}));
