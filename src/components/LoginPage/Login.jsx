import { useNavigate } from "react-router-dom";
import Button3 from "../Button3/Button3";
import styles from "./Login.module.css";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateErrors = validate();

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      setErrors({});

      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
        localStorage.setItem("currentUser", JSON.stringify(storedUser));

        navigate("/account");
      } else {
        setErrors({ general: "Invalid credentials" });
      }
    }
  };

  return (
    <div className="container">
      <div className={styles.login_content}>
        <div className={styles.login_text}>
          <h1>Signin to your PopX account</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.login_form}>
          <div className={styles.input_group}>
            <label htmlFor="email">Email Address</label>
            <input
              placeholder="Enter email address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></input>
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          <div className={styles.input_group}>
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            ></input>
            {errors.password && (
              <p className={styles.error}>{errors.password}</p>
            )}
          </div>

          {errors.general && <p className={styles.error}>{errors.general}</p>}

          <button type="submit" style={{ border: "none", background: "none" }}>
            <Button3 />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
