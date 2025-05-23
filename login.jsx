import { useState } from "react";
import Loginform1 from "./login.module.css"; 

const LoginForm = () => {
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState(""); 
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  
    if (e.target.name === "identifier") setEmailError("");
    if (e.target.name === "password") setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!formData.identifier) {
      setEmailError("Enter Email or Phone Number!");
      valid = false;
    }

   else if (!formData.password) {
      setPasswordError("Enter Password!");
      valid = false;
    }

    if (!valid) return; 


    if (
      (formData.identifier === "maheshdhulipudi45@gmail.com" || formData.identifier === "9876543210") &&
      formData.password === "Mahesh123"
    ) {
      setMessage("Login successful!");
    } else {
      setMessage("Invalid email or phone number!");
    }
  };

  return (
    <div className={Loginform1.loginform1}>
      <form onSubmit={handleSubmit}>
        <label className={Loginform1.label}>Email or Phone:</label>
        {/* forms */}
        <input
          type="text"
          name="identifier"
          value={formData.identifier}
          onChange={handleChange}
          className={Loginform1.input}
          placeholder="Enter email or phone number"
        />
        {emailError && <p className={Loginform1.para1}>{emailError}</p>} 
        
        <label className={Loginform1.label}>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={Loginform1.input}
        />
        {passwordError && <p className={Loginform1.para2}>{passwordError}</p>} 
  {/* button */}
        <button type="submit" className={Loginform1.button}>Login</button>
         <p className={Loginform1.signuppara}>
          Don't have an account?{" "}
          <span className={Loginform1.linkspan} onClick={() => navigate("/signup")}>
            Singup.
          </span>
        </p>
        <p className={Loginform1.message}>{message}</p>
      </form>
    </div>
  );
};

export default LoginForm;
