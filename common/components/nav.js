var React = require('react');

module.exports = React.createClass({
  displayName: 'Nav',

  getInitialState: function() {
    return { items: this.props.items }
  },

  render: function() {

    var navItems = this.props.items;

    return (
      <div>
        <ul>
            {navItems.map(function(item, index) {
            return <li key={index}>
                    <a href={item.link}>{item.title}</a>
                </li>;
            })}
        </ul>
      </div>
    );
  },
});
