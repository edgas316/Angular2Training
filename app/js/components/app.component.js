(function(app) {

  let Component = ng.core.Component;
  app.AppComponent = function(){}
  app.AppComponent.annotation = [
    Component({
    selector: 'my-app',
    templateUrl: 'app/js/appcomponent.html'
    })
    .Class({
      constructor: function() { }
    })
  ]

})(window.app || (window.app = {}));


