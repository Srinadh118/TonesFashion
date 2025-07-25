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
      className="container"
    >
      <div className="auth-wrapper">
        <div className="auth-toggle">
          <button
            onClick={() => setIsLogin(true)}
            className={isLogin ? "active" : "inactive"}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={!isLogin ? "active" : "inactive"}
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
  <input id={id} type={type} placeholder={placeholder} className="input" />
);

const LoginForm = () => (
  <form>
    <div>
      <label htmlFor="login-email" className="sr-only">
        Email
      </label>
      <FormInput id="login-email" type="email" placeholder="Email Address" />
    </div>
    <div>
      <label htmlFor="login-password" className="sr-only">
        Password
      </label>
      <FormInput id="login-password" type="password" placeholder="Password" />
    </div>
    <button type="submit" className="submit-btn">
      Sign In
    </button>
    <p className="forgot-password">
      <a href="#">Forgot your password?</a>
    </p>
  </form>
);

const SignUpForm = () => (
  <form>
    <div>
      <label htmlFor="signup-name" className="sr-only">
        Full Name
      </label>
      <FormInput id="signup-name" type="text" placeholder="Full Name" />
    </div>
    <div>
      <label htmlFor="signup-email" className="sr-only">
        Email
      </label>
      <FormInput id="signup-email" type="email" placeholder="Email Address" />
    </div>
    <div>
      <label htmlFor="signup-password" className="sr-only">
        Password
      </label>
      <FormInput
        id="signup-password"
        type="password"
        placeholder="Create Password"
      />
    </div>
    <button type="submit" className="submit-btn">
      Create Account
    </button>
  </form>
);

export default AuthPage;
