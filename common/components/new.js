var React = require('react');

module.exports = React.createClass({
  displayName: 'NewForm',
  getInitialState: function() {
    return { items: this.props.items }
  },
  render: function() {
    return (
      <div>
            <form action="/action_page.php">
                First name:
                <input type="text" name="firstname" value="Mickey" />

                Last name:
                <input type="text" name="lastname" value="Mouse" />

                <input type="submit" value="Submit" />
            </form> 
      </div>
    );
  },
});
