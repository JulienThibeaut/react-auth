import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const SignUpForm = ({ onSubmit, onChange, errors, user }) => (
  <div className="centerv centerh wrapper-auth">
    <form action="/" onSubmit={onSubmit} >
      <h2 className="text-center title-auth"><span className="ui-title">Sign Up</span></h2>

      <div>

        {errors.summary && <p className="errors-form">{errors.summary}</p>}

        <div className="fcol">
          <input
            type="text"
            name="name"
            placeholder="Username"
            errortext={errors.name}
            onChange={onChange}
            value={user.name}
            autoFocus
          />
          <p className="errors-form">{errors.name}</p>
        </div>

        <div className="fcol">
          <input
            type="text"
            name="email"
            placeholder="Email"
            errortext={errors.email}
            onChange={onChange}
            value={user.email}
          />
          <p className="errors-form">{errors.email}</p>
        </div>

        <div className="fcol">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            errortext={errors.password}
            value={user.password}
          />
          <p className="errors-form">{errors.password}</p>
        </div>

      </div>

      <div>
        <input className="btn btn-auth" type="submit" value="Sign up" primary />
        <Link to="/login">
          <p>I have an account</p>
        </Link>
      </div>

    </form>
  </div>
)

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default SignUpForm;
