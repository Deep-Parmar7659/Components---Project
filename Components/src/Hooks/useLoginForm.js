import { useState } from "react";

const useLoginForm = (setToast) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  // Show / Hide password toggle
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Submit button logic
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Email Validation
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      // Simple email regex pattern.
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    // Password Validation
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 6) {
      // Simple password regex pattern.
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    } else {
      setPasswordError("");
    }

    // Stop submit if validation fails
    if (!valid) return;

    // Loading state logic
    setLoading(true);

    // Simulate API Call
    setTimeout(() => {
      console.log("Email:", email);
      console.log("Password:", password);
      // Toast message
      setToast("Login Successfully! ✅");
      setLoading(false);
      // Reset Form
      setEmail("");
      setPassword("");
    }, 2000);
  };

  // Handle Email Validations
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError) setEmailError("");
  };

  // Handle Password Validations
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (passwordError) setPasswordError("");
  };

  return {
    email,
    password,
    emailError,
    passwordError,
    showPassword,
    togglePassword,
    loading,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
  };
};

export default useLoginForm;
