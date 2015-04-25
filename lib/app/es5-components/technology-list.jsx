import React from 'react';
import FluxComponent from 'flummox/component';
import Technology from './technology.jsx!';

function byName(a, b) {
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  return 0;
};

function invert(fn) {
  var ctx = this;
  return function() {
    return !fn.apply(ctx, arguments);
  };
};

var TechnologyList = React.createClass({

  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.technologies !== this.props.technologies;
  },

  renderTechnology: function(technology) {
    return (
      <li key={technology.id}>
        <FluxComponent>
          <Technology technology={technology} />
        </FluxComponent>
      </li>
    );
  },

  render: function() {
    var technologies = this.props.technologies.sort(byName).map(this.renderTechnology);

    return (
      <ul>
        { technologies }
      </ul>
    );
  }
});

export default TechnologyList;
