import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    //Login Flow:
    //1. make an axios call to login endpoint.
    //2. pass in our current credentials
    //3. If request is successful, save out token to localStorage.
    //4. If not successful, console.log an error.
    console.log(this.props);
    
    axios.post("http://localhost:5000/api/login", this.state.credentials)
      .then(resp => {
        localStorage.setItem("token", resp.data.token);
      })
      .catch(err => {
        console.log(err);
      })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;