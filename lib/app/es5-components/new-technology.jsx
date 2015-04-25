import React from 'react';

var NewTechnology = React.createClass({

  getInitialState: function() {
    return {
      name: ''
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();

    let name = this.state.name.trim();

    if (name) {

      this.props.flux.getActions('technologies').add({
        name: name
      });

      this.setState({
        name: ''
      });
    }
  },

  clearName: function() {
    this.setState({
      name: ''
    });
  },

  handleChange: function(e) {
    this.setState({
      name: e.target.value
    });
  },

  render: function() {
    return (
      <form className="new-technology" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="New technology..." value={this.state.name} onChange={this.handleChange} />
        <button type="submit" disabled={!this.state.name}>Save</button>
        <button className="cancel" onClick={this.clearName} disabled={!this.state.name}>Clear</button>
      </form>
    );
  }
});

export default NewTechnology;
