var React = require('react');

module.exports = React.createClass({
  displayName: 'Nav',

  getInitialState: function() {
    return { items: this.props.items }
  },

  render: function() {

    var navItems = this.props.items;

    return (
      React.createElement("div", null, 
        React.createElement("ul", null, 
            navItems.map(function(item, index) {
            return React.createElement("li", {key: index}, 
                    React.createElement("a", {href: item.link}, item.title)
                );
            })
        )
      )
    );
  },
});
