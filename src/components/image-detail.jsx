var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions');
var ImageDetailStore = require('../stores/image-detail-store')

module.exports = React.createClass({
  mixins: [ Reflux.listenTo(ImageDetailStore, 'onChange') ],
  getInitialState: function() {
    return {
      imageDetail: {}
    }
  },
  componentWillMount: function() {
    Actions.getImageDetail(this.props.params.id)
  },
  componentWillReceiveProps: function(nextProps) {
    Actions.getImageDetail(nextProps);
  },
  render: function() {
    return <div>
      {this.state.imageDetail}
    </div>
  },
  onChange: function(event, imageDetail) {
    this.setState({
      imageDetail: imageDetail
    })
  }
});