var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [ Actions ],
  getImageDetail:  function(imageId) {
    return Api.get('gallery/' + imageId)
      .then(function(json) {
        this.imageDetail = json.data;
        this.triggerOnChange();
      }.bind(this))
  },
  triggerOnChange: function() {
    this.trigger('change', this.imageDetail)
  }
});