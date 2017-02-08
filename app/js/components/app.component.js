(function(app) {

  let Component = ng.core.Component;

  app.AppComponent = Component({
    selector: 'my-app',
    templateUrl: 'app/js/app.component.html'
  })
  .Class({
    constructor: function() { }
  });

})(window.app || (window.app = {}));
