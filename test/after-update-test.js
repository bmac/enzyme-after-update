var React = require('react');
var mount = require('enzyme').mount;
var assert = require('chai').assert;
var afterUpdate = require('../index');
require('./setup-jsdom')

describe('afterUpdate', function() {

  var MyComponent = React.createClass({
    divClicked: function() {
      var component = this
      setTimeout(function() {
        component.setState({foo: 'bar'});
      }, 50);
    },
    render: function() {
      return React.createElement(
        'div',
        { onClick: this.divClicked },
        null
      )
    }
  });

  it('Waits for the componentDidUpdate method to be called before resolving the promise', function() {
    var wrapper = mount(React.createElement(MyComponent, {}, null));
    wrapper.find('div').simulate('click');

    return afterUpdate(wrapper).then(function() {
      assert.equal(wrapper.state('foo'), 'bar')
    });
  });
});
