import React, { Component } from 'react';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({email: '', password: ''});
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span className="subtitle">Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            value={this.state.email} 
            handleChange={this.handleChange}
            label="email"
            required />

          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password} 
            handleChange={this.handleChange}
            label="password"
            required />

          <div className="buttons">
            <CustomButton type="submit">
              Submit Form
            </CustomButton>

            <CustomButton isGoogleSignIn onClick={() => signInWithGoogle()}>
              {' '}Sign in With Google{' '}
            </CustomButton>
          </div>

        </form>
      </div>
    );
  }
}

export default SignIn;
