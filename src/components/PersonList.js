import React from 'react';
import Axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    person: null,
    persons: [],
    loading: true,
    data: []
  };

  async componentDidMount() {
    await Axios.get(`https://randomuser.me/api/`).then(res => {
      console.log(res);
      this.setState({ person: res.data.results[0], loading: false });

      console.log(this.state.person.name);
    });
  }

  render() {
    return (
      <ul>
        {this.state.loading || !this.state.person ? (
          <div>Loading...</div>
        ) : (
          <div>
            <img src={this.state.person.picture.large} />
            <div>{this.state.person.name.first}</div>
            <div>{this.state.person.name.last}</div>
          </div>
        )}
      </ul>
    );
  }
}
