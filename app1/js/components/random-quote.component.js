(function(app) {

  let Component = ng.core.Component;
  //let QuoteService = app.QuoteService
  app.RandomQuoteComponent = RandomQuoteComponent;
       
  

  RandomQuoteComponent.annotaion = [
    new Component({
      selector: 'random-quote',
      templateUrl: 'app/js/randomquotecomponent.html'
    })
    
  ]
  
  RandomQuoteComponent.parameters = [app.QuoteService]
 function RandomQuoteComponent(a){
    
   let self = this
        a.generateRandomQuote(2000, function(quote){
          self.quote = quote
        })
  }
 

})(window.app || (window.app = {}));
