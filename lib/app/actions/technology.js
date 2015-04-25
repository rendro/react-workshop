import 'fetch';
import {Actions} from 'flummox';

const API_URL = '//localhost:3001/technologies';

export default class TechnologyActions extends Actions {

  async add(technology) {
    let options = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(technology)
    };

    try {
      return await fetch(API_URL, options).then(response => response.json());
    } catch (err) {
      console.log(err);
    }
  }

  async getAll() {
    try {
      return await fetch(API_URL).then(response => response.json());
    } catch (err) {
      console.log(err);
    }
  }

  async update(id, props) {
    let url = `${API_URL}/${id}`;

    let options = {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(props)
    };

    try {
      return await fetch(url, options).then(response => response.json());
    } catch (err) {
      console.log(err);
    }
  }

  async delete(id) {
    let url = `${API_URL}/${id}`;

    let options = {
      method: 'delete'
    };

    try {
      await fetch(url, options);
      return id;
    } catch (err) {
      console.log(err);
    }
  }
}
