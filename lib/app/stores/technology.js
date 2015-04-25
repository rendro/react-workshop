import {Store} from 'flummox';

export default class TechnologyStore extends Store {

  constructor(flux) {
    super();

    const technologyActionIds = flux.getActionIds('technologies');

    this.register(technologyActionIds.add, this.add);
    this.register(technologyActionIds.getAll, this.populate);
    this.register(technologyActionIds.update, this.update);
    this.register(technologyActionIds.delete, this.delete);

    this.state = {
      technologies: []
    };
  }

  populate(technologies) {
    this.setState({ technologies });
  }

  add(technology) {
    this.setState({
      technologies: this.state.technologies.concat(technology)
    });
  }

  update(technology) {
    this.setState({
      technologies: this.state.technologies.map((t) => {
        if (t.id === technology.id) return technology;
        return t;
      })
    });
  }

  delete(id) {
    this.setState({
      technologies: this.state.technologies.filter((t) => t.id !== id)
    });
  }
}
