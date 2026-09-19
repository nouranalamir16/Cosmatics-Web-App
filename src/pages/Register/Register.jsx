import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Register.css";

function Register() {
    const navigate = useNavigate();
    const { register } = useAuth();
    
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptedTerms: false,
    });

  const [error, setError] = useState("");

  const handleChange = (event) => {
  const { name, value, type, checked } = event.target;

  setFormData((previous) => ({
    ...previous,
    [name]: type === "checkbox" ? checked : value,
  }));
};

const handleSubmit = (event) => {
  event.preventDefault();

  setError("");

  if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    setError("Please fill in all fields.");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  if (!formData.acceptedTerms) {
    setError("Please accept the terms and privacy policy.");
    return;
  }

  register({
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    password: formData.password,
  });

  navigate("/");
};
    return (
      <main className="register-page">
        <div className="register-wrapper">
  
          <div className="register-brand">
            <span>NOURAN</span>
            <p>CONSIDERED BEAUTY</p>
          </div>
  
          <div className="register-card">
            <div className="register-header">
              <span>JOIN NOURAN</span>
  
              <h1>Create Account</h1>
  
              <p>
                Create your account and discover considered beauty.
              </p>
            </div>
  
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="register-row">
                <div className="register-field">
                  <label htmlFor="firstName">
                    First Name
                  </label>
  
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
  
                <div className="register-field">
                  <label htmlFor="lastName">
                    Last Name
                  </label>
  
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
  
              <div className="register-field">
                <label htmlFor="registerEmail">
                  Email Address
                </label>
  
                <input
                  id="registerEmail"
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
  
              <div className="register-field">
                <label htmlFor="registerPassword">
                  Password
                </label>
  
                <input
                  id="registerPassword"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
  
              <div className="register-field">
                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>
  
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
  
              <label className="register-terms">
                <input 
                  type="checkbox"
                  name="acceptedTerms"
                  checked={formData.acceptedTerms}
                  onChange={handleChange} />
  
                <span>
                  I agree to the terms and privacy policy.
                </span>
              </label>
              {error && (
                <p className="register-error">
                    {error}
                </p>
            )}
              <button
                type="submit"
                className="register-button"
              >
                Create Account
                <i className="bi bi-arrow-right"></i>
              </button>
            </form>
  
            <div className="register-divider">
              <span>OR</span>
            </div>
  
            <p className="login-text">
              Already have an account?
              <Link to="/login"> Sign in</Link>
            </p>
          </div>
  
        </div>
      </main>
    );
}

export default Register;