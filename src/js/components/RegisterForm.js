import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/auth';

export default function RegisterForm() {
    const email=useRef();
    const username= useRef();
    const avatar = useRef();
    const password = useRef();
    const dispatch = useDispatch();
    const handleSubmit=(e)=>{
      e.preventDefault();
      const data={email:email.current.value,password:password.current.value,username:username.current.value,avatar:avatar.current.value};
      dispatch(registerUser(data))
      
    }
  return (
    <form onSubmit={handleSubmit} className="centered-container-form">
    <div className="header">Create an account</div>
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
        ref={email}
          type="email"
          className="form-control"
          name="email"
          id="email"
          aria-describedby="emailHelp" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
        ref={username}
          type="text"
          name="username"
          className="form-control"
          id="username"
          aria-describedby="emailHelp" />
      </div>
      <div className="form-group">
        <label htmlFor="avatar">Avatar</label>
        <input
          ref={avatar}
          type="text"
          name="avatar"
          className="form-control"
          id="avatar"
          aria-describedby="emailHelp" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          ref={password}
          name="password"
          type="password"
          className="form-control"
          id="password" />
      </div>
      { false && <div className="alert alert-danger small">Some Error</div>}
      <button type="submit" className="btn btn-outline-primary">Register</button>
    </div>
  </form>
  )
}