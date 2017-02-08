(function(app) {

  let Component = ng.core.Component;
  
  app.AppComponent = function(){}
  
  app.AppComponent.annotation = [
    new Component({
    selector: 'my-app',
    templateUrl: 'app/js/appcomponent.html'
    })    
  ]
 
})(window.app || (window.app = {}));


