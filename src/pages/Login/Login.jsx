import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    const result = login(
      formData.email,
      formData.password
    );

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/");
  };

  return (
    <main className="login-page">
      <div className="login-wrapper">

        <div className="login-brand">
          <span>NOURAN</span>
          <p>CONSIDERED BEAUTY</p>
        </div>

        <div className="login-card">
          <div className="login-header">
            <span>WELCOME BACK</span>

            <h1>Sign In</h1>

            <p>
              Enter your details to access your Nouran account.
            </p>
          </div>

          <form
            className="login-form"
            onSubmit={handleSubmit}
          >
            <div className="login-field">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="login-field">
              <div className="login-label-row">
                <label htmlFor="password">
                  Password
                </label>

                <button type="button">
                  Forgot password?
                </button>
              </div>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {error && (
              <p className="login-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="login-button"
            >
              Sign In
              <i className="bi bi-arrow-right"></i>
            </button>
          </form>

          <div className="login-divider">
            <span>OR</span>
          </div>

          <p className="register-text">
            Don't have an account?
            <Link to="/register"> Create one</Link>
          </p>
        </div>

      </div>
    </main>
  );
}

export default Login;