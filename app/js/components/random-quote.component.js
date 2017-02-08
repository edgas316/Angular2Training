(function(app) {

  let Component = ng.core.Component;
  let QuoteService = app.QuoteService


  app.RandomQuoteComponent = Component({
    selector: 'random-quote',
    template: ({
      url:'/random-quote.component.html'
    })
  })
  .Class({
    constructor: [QuoteService, function RandomQuoteComponent(a) {
      let self = this
      a.generateRandomQuote(2000, function(quote){
        self.quote = quote
      })
          
        }]
  });

})(window.app || (window.app = {}));
