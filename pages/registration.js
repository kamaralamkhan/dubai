import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        console.log('Registration successful:', data);
        // Redirect to login page
        router.push('/login');
      } else {
        console.error('Registration failed:', data.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="auth-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="auth-form">
              <h2 className="form-title">Create New Account</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <div className="password-input">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      placeholder="Enter password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i className={`ti-eye${showPassword ? '-off' : ''}`} />
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="main-btn btn-block">
                    Create Account
                  </button>
                </div>

                <div className="form-footer text-center">
                  <p>
                    Already have an account?{' '}
                    <Link href="/login" className="link">
                      Login Here
                    </Link>
                  </p>
                </div>
              </form>

              <div className="social-login">
                <p className="divider">Or sign up with</p>
                <div className="social-buttons">
                  <button className="social-btn facebook">
                    <i className="ti-facebook" />
                  </button>
                  <button className="social-btn google">
                    <i className="ti-google" />
                  </button>
                  <button className="social-btn twitter">
                    <i className="ti-twitter-alt" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;