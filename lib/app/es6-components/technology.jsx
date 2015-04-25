import React from 'react';

export default class Technology extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      edit: false
    };

    this.updateTechnology = this.updateTechnology.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.technology !== this.props.technology) {
      return true;
    }
    return (this.state.value !== nextState.value || this.state.edit !== nextState.edit);
  }

  updateTechnology(e) {
    e.preventDefault();

    this.props.flux.getActions('technologies').update(this.props.technology.id, {
      name: this.state.value
    });

    this.setState({ edit: false  });
  }

  edit() {
    this.setState({
      edit: true,
      value: this.props.technology.name
    });
  }

  cancelEdit(e) {
    e.preventDefault();
    this.setState({
      edit: false
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  delete(e) {
    e.preventDefault();
    this.props.flux.getActions('technologies').delete(this.props.technology.id);
  }

  render() {
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
}
