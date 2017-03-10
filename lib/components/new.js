var React = require('react');

module.exports = React.createClass({
  displayName: 'NewForm',
  getInitialState: function() {
    return { items: this.props.items }
  },
  render: function() {
    return (
      React.createElement("div", null, 
            React.createElement("form", {action: "/action_page.php"}, 
                "First name:", 
                React.createElement("input", {type: "text", name: "firstname", value: "Mickey"}), 

                "Last name:", 
                React.createElement("input", {type: "text", name: "lastname", value: "Mouse"}), 

                React.createElement("input", {type: "submit", value: "Submit"})
            )
      )
    );
  },
});
