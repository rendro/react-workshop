import React from 'react';
import TechnologyList from './technology-list.jsx!';

export default class FilterableTechnologyList extends React.Component {

  static defaultProps: {
    technologies: []
  };

  constructor(props) {
    super(props);

    this.state = { filter: '' };

    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter(filter) {
    this.setState({ filter });
  }

  render() {
    let technologies = this.props.technologies;

    if (this.state.filter) {
      technologies = technologies.filter((t) => t.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1)
    }

    let info;
    if (this.state.filter) {
      info = <p className="info">Showing {technologies.length} of {this.props.technologies.length} Technologies</p>;
    } else {
      info = <p className="info">{this.props.technologies.length} Technologies</p>;
    }

    if (!technologies.length) {
      info = null;
    }

    let list = <p className="info">No Technologies match your filter</p>;
    if (technologies.length) {
      list = <TechnologyList technologies={technologies} />;
    }

    return (
      <div>
        <form>
          <input type="text" placeholder="Filter..." value={this.state.filter} onChange={ e => this.updateFilter(e.target.value) } />
          <button className="cancel" onClick={ e => { e.preventDefault(); this.updateFilter(''); } } disabled={!this.state.filter}>Clear</button>
        </form>
        {info}
        {list}
      </div>
    );
  }

}
