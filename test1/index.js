import React from 'react';

import GithubUserSearch from './GitHubUserSearch';

class Test1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }
  setUsername = (username) => {
    this.setState(() => {
      return {
        username
      }
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    const username = this.usernameField.value;
    this.setUsername(username);
    return false;
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <h1>Github Username Search</h1>
        <form onSubmit={this.onSubmit}>
          <label>Github Username</label>
          <input ref={(node) => this.usernameField = node}type="text" className="" placeholder="Please enter a github username" />
          <button type="submit" className="" >Search Github</button>
        </form>
        {
          username
          ? <GithubUserSearch username={username} />
          : <p>Please enter a username to search for</p>
        }
      </div>
    )
  }
}

export default Test1;