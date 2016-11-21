var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  // use only for routers
  // this way router doens't have to be passed down as props to all components
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
      console.log(this.context);
      return {
        username: ''
      }
    },

    handleUpdateUser: function(e) {
      this.setState({
        username: e.target.value
      })
    },

    handleSubmitUser: function (e){
      e.preventDefault();
      var username = this.state.username;
      this.setState({
        username: '',
      });

      //calling push on route activates the routes
      if (this.props.routeParams.playerOne){
        this.context.router.push({
          pathname: '/battle',
          query: {
            playerOne: this.props.routeParams.playerOne,
            playerTwo: this.state.username
          }
        })
        // go to /battle
      } else {
        this.context.router.push('playerTwo/' + this.state.username)
        // go to/PlayerTwo
      }
    },

    render: function () {
      return (
        <Prompt
          onSubmitUser={this.handleSubmitUser}
          onUpdateUser={this.handleUpdateUser}
          header={this.props.route.header}
          username={this.state.username} />
      )
    }
});

module.exports = PromptContainer;
