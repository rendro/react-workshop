import React from 'react'
import FluxComponent from 'flummox/component'
import Technologies from './components/technologies.jsx!'

export default class App extends React.Component {

  render() {
    return (
      <FluxComponent flux={this.props.flux}>
        <Technologies />
      </FluxComponent>
    );
  }
}
