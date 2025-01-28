import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success) {
        console.log('Login successful:', data);
        // Redirect to home page or dashboard
        router.push('/index-3');
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="auth-section">
      <div className="container pt-[400px]">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="auth-form">
              <h2 className="form-title">Login to Your Account</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Password</label>
                  <div className="password-input">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                  <button type="submit" className="main-btn btn-block">
                    Sign In
                  </button>
                </div>

                <div className="form-footer text-center">
                  <p>
                    Don't have an account?{' '}
                    <Link href="/registration" className="link">
                      Create Account
                    </Link>
                  </p>
                  <p>
                    <Link href="/forgot-password" className="link">
                      Forgot Password?
                    </Link>
                  </p>
                </div>
              </form>

              <div className="social-login">
                <p className="divider">Or continue with</p>
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

export default Login;