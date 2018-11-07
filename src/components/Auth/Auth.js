import React, { Component } from 'react';
import {connect} from 'react-redux'
import './Auth.css'
import { updateID, updateUsername, updatePassword, updateProfilePicture } from '../../ducks/reducer';
import axios from 'axios';

class Auth extends Component {
  
  loginUser = () => {
    axios.post("http://localhost:5001/api/login", {
      user_login_name: this.props.username,
      user_password: this.props.password
    })
    .then((response) => {
      if (response.data) {
        this.props.updateProfilePicture(response.data[0].profile_pic);
        this.props.updateID(response.data[0].id);
        this.props.history.push('/dashboard');
      } else {
        window.alert('Incorrect username or password');
      }
    })
  }
  registerUser = () => {
    axios.post("http://localhost:5001/api/register", {
      user_login_name: this.props.username,
      user_password: this.props.password,
      user_photo: `https://robohash.org/${this.props.username}`
    })
    .then(() => {
      this.loginUser();
    })
  }
  render() {
    const { updateUsername, updatePassword } = this.props;
    return (
      <div className = "Auth">
          <div className="auth_container">
          <div className="auth_header"><h1>Helo</h1></div>
          <div className="login_inputs"><p>Username:<input type="text" onChange={(e) => updateUsername(e.target.value)} value={this.props.username} placeholder='username'></input></p>
          <p>Password: <input type="password" onChange={(e) => updatePassword(e.target.value)} value={this.props.password} placeholder='password'></input></p></div>
          <div className="buttons_line">
              <button onClick={this.loginUser}>Login</button>
              <button onClick={this.registerUser}>Register</button>
          </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { id, username, password, profilePicture } = state;
  return {
    id,
    username,
    password,
    profilePicture
  }
}

export default connect(mapStateToProps, {updateID, updateUsername, updatePassword, updateProfilePicture})(Auth);

/*
import React, { Component } from 'react';
import './Auth.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateID, updateUsername, updatePassword, updateProfilePicture } from '../../ducks/reducer';

class Auth extends Component {

  loginUser = () => {
    axios.post("http://localhost:8080/login", {
      username: this.props.username,
      password: this.props.password
    })
    .then((response) => {
      if (response.data) {
        this.props.updateProfilePicture(response.data[0].profile_pic);
        this.props.updateID(response.data[0].id);
        this.props.history.push('/dashboard');
      } else {
        window.alert('Incorrect username or password');
      }
    })
  }

  registerUser = () => {
    axios.post("http://localhost:8080/register", {
      username: this.props.username,
      password: this.props.password,
      profile_pic: `https://robohash.org/${this.props.username}`
    })
    .then(() => {
      this.loginUser();
    })
  }

  render() {
    const { updateUsername, updatePassword } = this.props;
    return (
      <div className="auth-background">
        <div className="auth-container">
          <h1>Helo</h1>
          <div className="auth-input">
           Username: <input type='text' onChange={(e) => updateUsername(e.target.value)} value={this.props.username} placeholder='username' />
          </div>
          <div className="auth-input">
            Password: <input type='password' onChange={(e) => updatePassword(e.target.value)} value={this.props.password} placeholder='password' />
          </div>
          <div className="buttons">

              <button onClick={this.loginUser}>Login</button>

              <button onClick={this.registerUser}>Register</button>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { id, username, password, profilePicture } = state;
  return {
    id,
    username,
    password,
    profilePicture
  }
}

export default connect(mapStateToProps, {updateID, updateUsername, updatePassword, updateProfilePicture})(Auth);
*/