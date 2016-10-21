import React from 'react';
import Select from 'react-select';
import fetch from 'isomorphic-fetch';
import 'react-select/dist/react-select.css';


export default class GithubUsers extends React.Component{
  state = {
    value: []
  };

  onChange(value) {
    this.setState({value});
  }

  getUsers(input) {
    if (!input || input.length < 3) {
      return Promise.resolve({ options: [] });
    }

    return fetch(`https://api.github.com/search/users?q=${input}`)
      .then((response) => response.json())
      .then((json) => {
        return { options: json.items };
      });
  }

  render () {

    return (
      <div className="section">
        <h3 className="section-heading">{this.props.label}</h3>
        <Select
          searchPromptText="Type to search, minimum 3 characters.."
          multi={true}
          value={this.state.value}
          onChange={(value) => this.onChange(value)}
          valueKey="login"
          labelKey="login"
          asyncOptions={(input) => this.getUsers(input)} />
      </div>
    );
  }
}
