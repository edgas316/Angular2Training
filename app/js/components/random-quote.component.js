(function(app) {

  let Component = ng.core.Component;
  let QuoteService = app.QuoteService


  app.RandomQuoteComponent.annotaion = [
    Component({
      selector: 'random-quote',
      templateUrl: 'app/js/randomquotecomponent.html'
    })
    .Class({
      constructor: [QuoteService, function RandomQuoteComponent(a) {
        let self = this
        a.generateRandomQuote(2000, function(quote){
          self.quote = quote
        })
      }]
    })
  ]

})(window.app || (window.app = {}));
