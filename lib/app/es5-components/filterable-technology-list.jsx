import React from 'react';
import TechnologyList from './technology-list.jsx!';

function hasName(needle) {
  var needle = ('' + needle).toLowerCase();
  return function(haystack) {
    return haystack.name.toLowerCase().indexOf(needle) > -1;
  };
}

var FilterableTechnologyList = React.createClass({

  getInitialState: function() {
    return {
      filter: ''
    };
  },

  updateFilter: function(filter) {
    this.setState({
      filter: filter
    });
  },

  handleChange: function(e) {
    this.updateFilter(e.target.value);
  },

  handleCancel: function(e) {
     e.preventDefault();
     this.updateFilter('');
  },

  render: function() {
    let technologies = this.props.technologies;

    if (this.state.filter) {
      technologies = technologies.filter(hasName(this.state.filter));
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
          <input type="text" placeholder="Filter..." value={this.state.filter} onChange={this.handleChange} />
          <button className="cancel" onClick={this.handleCancel} disabled={!this.state.filter}>Clear</button>
        </form>
        {info}
        {list}
      </div>
    );
  }

});

export default FilterableTechnologyList;
