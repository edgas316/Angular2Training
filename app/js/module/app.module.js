(function(app) {

  let NgModule = ng.core.NgModule;
  let BrowserModule = ng.platformBrowser.BrowserModule;
  
  let QuoteService = app.QuoteService
  let RandomQuoteComponent = app.RandomQuoteComponent
  let AppComponent = app.AppComponent
  
  app.AppModule = function AppModule(){}
  
  

  app.AppModule.annotation = [
    new NgModule({
      imports: [BrowserModule],
      declarations: [AppComponent, RandomQuoteComponent],
      providers: [QuoteService],
      bootstrap: [AppComponent]
    })
  ]
  .Class({
    constructor: function() { }
  });


})(window.app || (window.app = {}));
