import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassord: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassord } = this.state;

    if (password !== confirmPassord) {
      alert('Password don\'t match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassord: '',
      });

    } catch(error) {
      console.error(error);
    } 
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const {displayName, email, password, confirmPassord} = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput 
            type="text" 
            name="displayName" 
            value={displayName}
            label="name"
            onChange={this.handleChange}
          />

          <FormInput 
            type="email" 
            name="email" 
            value={email}
            label="email"
            onChange={this.handleChange}
          />

          <FormInput 
            type="password" 
            name="password" 
            value={password}
            label="password"
            onChange={this.handleChange}
          />

          <FormInput 
            type="password" 
            name="confirmPassord" 
            value={confirmPassord}
            label="confirm password"
            onChange={this.handleChange}
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>

    );
  }
}

export default SignUp;
