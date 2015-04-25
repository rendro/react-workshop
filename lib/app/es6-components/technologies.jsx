import React from 'react';
import FluxComponent from 'flummox/component';
import NewTechnology from './new-technology.jsx!';
import FilterableTechnologyList from './filterable-technology-list.jsx!';

export default class Technologies extends React.Component {

  componentDidMount() {
    this.props.flux.getActions('technologies').getAll();
  }

  render() {
    return (
      <FluxComponent  connectToStores={['technologies']}>
        <NewTechnology />
        <FilterableTechnologyList />
      </FluxComponent>
    );
  }
}
