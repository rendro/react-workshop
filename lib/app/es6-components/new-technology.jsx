import React from 'react';

export default class NewTechnology extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    let name = this.state.name.trim();

    if (name) {
      this.props.flux.getActions('technologies').add({ name });
      this.setState({ name: '' });
    }
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <form className="new-technology" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="New technology..." value={this.state.name} onChange={this.handleChange} />
        <button type="submit" disabled={!this.state.name}>Save</button>
        <button className="cancel" onClick={ e => this.setState({ name: '' }) } disabled={!this.state.name}>Clear</button>
      </form>
    );
  }
}
