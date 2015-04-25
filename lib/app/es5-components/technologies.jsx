import React from 'react';
import FluxComponent from 'flummox/component';
import NewTechnology from './new-technology.jsx!';
import FilterableTechnologyList from './filterable-technology-list.jsx!';

var Technologies = React.createClass({

  componentDidMount: function() {
    this.props.flux.getActions('technologies').getAll();
  },

  render: function() {
    return (
      <FluxComponent  connectToStores={['technologies']}>
        <NewTechnology />
        <FilterableTechnologyList />
      </FluxComponent>
    );
  }
});

export default Technologies;
