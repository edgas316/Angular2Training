(function(app) {

  let Component = ng.core.Component;

  app.AppComponent = Component({
    selector: 'my-app',
    template:"/app.component.html"
  })
  .Class({
    constructor: function() { }
  });

})(window.app || (window.app = {}));
