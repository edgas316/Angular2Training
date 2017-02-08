(function(app) {

  let Component = ng.core.Component;
  let QuoteService = app.QuoteService
  
  app.RandomQuoteComponent = function(a){
    
   let self = this
        a.generateRandomQuote(2000, function(quote){
          self.quote = quote
        })
  }     
  

  app.RandomQuoteComponent.annotaion = [
    new Component({
      selector: 'random-quote',
      templateUrl: 'app/js/randomquotecomponent.html'
    })
    
  ]
  
  app.parameters = [QuoteService]
  
 

})(window.app || (window.app = {}));
