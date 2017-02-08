(function(app) {

  let Component = ng.core.Component;
  app.AppComponent = function(){}
  app.AppComponent.annotation = [
    new Component({
    selector: 'my-app',
    templateUrl: 'app/js/appcomponent.html'
    })
    
  ]
 app.AppComponent.Class({
      constructor: function() { }
    })
})(window.app || (window.app = {}));


