(function(app) {

  let Component = ng.core.Component;
  
  app.AppComponent = AppComponent
  
  AppComponent.annotation = [
    new Component({
    selector: 'my-app',
    templateUrl: 'app/js/appcomponent.html'
    })    
  ]
  
  function AppComponent(){
    
  }
 
})(window.app || (window.app = {}));


