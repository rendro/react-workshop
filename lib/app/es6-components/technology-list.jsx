import React from 'react';
import FluxComponent from 'flummox/component';
import Technology from './technology.jsx!';

let byName = (a, b) => {
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  return 0;
};

let invert = (fn) => (...args) => !fn(...args);

export default class TechnologyList extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.technologies !== this.props.technologies;
  }

  render() {
    let technologies = this.props.technologies
      .sort(byName)
      .map(technology => (
        <li key={technology.id}>
          <FluxComponent>
            <Technology technology={technology} />
          </FluxComponent>
        </li>
      ));

    return (
      <ul>
        { technologies }
      </ul>
    );
  }
}
