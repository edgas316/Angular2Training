(function(app) {
  
  document.addEventListener('DOMContentLoaded', function(){
    let platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;
    let AppModule = app.AppModule

    platformBrowserDynamic().bootstrapModule(AppModule);
  })

  

})(window.app || (window.app = {}));
