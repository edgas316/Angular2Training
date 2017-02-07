(function(app) {

  let Component = ng.core.Component;
  let QuoteService = app.QuoteService


  app.RandomQuoteComponent = Component({
    selector: 'random-quote',
    template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
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
