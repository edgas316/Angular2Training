(function(app) {

  let Component = ng.core.Component;

  app.AppComponent = Component({
    selector: 'my-app',
    template:
      '<h1>Random Quote</h1>' +
      '<random-quote></random-quote>'
  })
  .Class({
    constructor: function() { }
  });

})(window.app || (window.app = {}));
