import { useState } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Button from "../ui/Button.jsx";
import FormField from "./FormField.jsx";
import Toast from "../ui/Toast/Toast.jsx";
import useLoginForm from "../../hooks/useLoginForm.js";
import ViewPassword from "../../assets/ViewPassword.png";
import HidePassword from "../../assets/HidePassword.png";

function LoginForm() {
  const [toast, setToast] = useState(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const {
    email,
    password,
    emailError,
    passwordError,
    loading,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
  } = useLoginForm(setToast);

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    // Removed min-h-screen — no more huge empty space!
    <div className="p-4 flex justify-center">
      <div className="w-full max-w-sm">
        {/* Toast shows above form */}
        {toast && (
          <div className="mb-4">
            <Toast
              message={toast}
              type="success"
              onClose={() => setToast(null)}
            />
          </div>
        )}

        {/* Login Card */}
        <div
          className="rounded-xl shadow-md p-6 w-full space-y-4"
          style={{
            background: isDark ? "rgba(255,255,255,0.05)" : "#ffffff",
            border: isDark
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid #e5e7eb",
          }}
        >
          <h2
            className="text-xl font-semibold text-center"
            style={{ color: isDark ? "#ffffff" : "#111827" }}
          >
            Login
          </h2>

          <FormField
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
          />

          <div className="relative">
            <FormField
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <img
                src={showPassword ? ViewPassword : HidePassword}
                alt="toggle password"
                className="w-5 h-5"
              />
            </button>
          </div>

          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}

          <Button type="submit" loading={loading} onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
