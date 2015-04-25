import React from 'react';

var Technology = React.createClass({

  getInitialState: function() {
    return {
      edit: false
    };
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    if (nextProps.technology !== this.props.technology) {
      return true;
    }
    return (this.state.value !== nextState.value || this.state.edit !== nextState.edit);
  },

  updateTechnology: function(e) {
    e.preventDefault();

    this.props.flux.getActions('technologies').update(this.props.technology.id, {
      name: this.state.value
    });

    this.setState({ edit: false  });
  },

  edit: function() {
    this.setState({
      edit: true,
      value: this.props.technology.name
    });
  },

  cancelEdit: function(e) {
    e.preventDefault();
    this.setState({
      edit: false
    });
  },

  handleChange: function(e) {
    this.setState({
      value: e.target.value
    });
  },

  delete: function(e) {
    e.preventDefault();
    this.props.flux.getActions('technologies').delete(this.props.technology.id);
  },

  render: function() {
    if (this.state.edit) {
      return (
        <form onSubmit={this.updateTechnology}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button type="submit" disabled={!this.state.value}>Save</button>
          <button className="cancel" onClick={this.cancelEdit}>Cancel</button>
        </form>
      );
    }

     return (
      <div className="technology">
        <span className="name">{this.props.technology.name}</span>
        <button onClick={this.edit}>Edit</button>
        <button className="cancel" onClick={this.delete}>Delete</button>
      </div>
    );
  }
});

export default Technology;
