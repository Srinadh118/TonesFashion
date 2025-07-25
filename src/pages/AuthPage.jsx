import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/pages/AuthPage.css";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="auth-page"
    >
      <div className="auth-container">
        <div className="auth-toggle">
          <button
            onClick={() => setIsLogin(true)}
            className={`toggle-button ${isLogin ? "active" : ""}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`toggle-button ${!isLogin ? "active" : ""}`}
          >
            Sign Up
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? "login" : "signup"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {isLogin ? <LoginForm /> : <SignUpForm />}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const FormInput = ({ id, type, placeholder }) => (
  <input id={id} type={type} placeholder={placeholder} className="form-input" />
);

const LoginForm = () => (
  <form className="auth-form">
    <FormInput id="login-email" type="email" placeholder="Email Address" />
    <FormInput id="login-password" type="password" placeholder="Password" />
    <button type="submit" className="submit-button">
      Sign In
    </button>
    <p className="forgot-password">
      <a href="#">Forgot your password?</a>
    </p>
  </form>
);

const SignUpForm = () => (
  <form className="auth-form">
    <FormInput id="signup-name" type="text" placeholder="Full Name" />
    <FormInput id="signup-email" type="email" placeholder="Email Address" />
    <FormInput
      id="signup-password"
      type="password"
      placeholder="Create Password"
    />
    <button type="submit" className="submit-button">
      Create Account
    </button>
  </form>
);

export default AuthPage;
