import React, { useRef, useState } from 'react';
import {useForm} from 'react-hook-form'

export default function LoginForm() {
    const email=useRef();
    const password=useRef();

    const handleSubmit= ()=>{
        alert(email.current.value);
        alert(password.current.value)
    }
  return (
    <form onSubmit={handleSubmit} className="centered-container-form">
      <div className="header">Welcome here!</div>
      <div className="subheader">Login and chat with other people!</div>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            ref= {email}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            ref={password}
            type="password"
            name="password"
            className="form-control"
            id="password" />
        </div>
        { false && <div className="alert alert-danger small">Some error</div>}
        <button type="submit" className="btn btn-outline-primary">Login</button>
      </div>
    </form>
  )
}