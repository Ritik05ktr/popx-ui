import { useNavigate } from "react-router-dom";
import Button1 from "../Button1/Button1";
import styles from "./Signup.module.css";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit phone number";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    if (!formData.company) {
      newErrors.company = "Company name is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      const updatedUsers = [...existingUsers, formData];

      localStorage.setItem("users", JSON.stringify(updatedUsers));

      localStorage.setItem("currentUser", JSON.stringify(formData));

      navigate("/account");
    }
  };

  return (
    <div className="container">
      <div className={styles.signup_content}>
        <h1>Create your PopX account</h1>

        <form className={styles.signup_form} onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <label>
              Full Name<span className={styles.required}>*</span>
            </label>
            <input
              placeholder="Enter name"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className={styles.error}>{errors.fullName}</p>
            )}
          </div>

          <div className={styles.input_group}>
            <label>
              Phone number<span className={styles.required}>*</span>
            </label>
            <input
              placeholder="Enter phone number"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className={styles.error}>{errors.phone}</p>}
          </div>

          <div className={styles.input_group}>
            <label>
              Email address<span className={styles.required}>*</span>
            </label>
            <input
              placeholder="Enter email address"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>

          <div className={styles.input_group}>
            <label>
              Password<span className={styles.required}>*</span>
            </label>
            <input
              placeholder="Enter password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password}</p>
            )}
          </div>

          <div className={styles.input_group}>
            <label>
              Company name<span className={styles.required}>*</span>
            </label>
            <input
              placeholder="Enter company name"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
            {errors.company && <p className={styles.error}>{errors.company}</p>}
          </div>

          <div className={styles.agency_selection}>
            <p>Are you an agency?</p>
            <div className={styles.radio_group}>
              <label className={styles.radio_container}>
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={formData.agency === "yes"}
                  onChange={handleChange}
                />
                <span className={styles.custom_radio}></span>
                Yes
              </label>
              <label className={styles.radio_container}>
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={formData.agency === "no"}
                  onChange={handleChange}
                />
                <span className={styles.custom_radio}></span>
                No
              </label>
            </div>
          </div>

          <button type="submit" style={{ border: "none", background: "none" }}>
            <Button1 />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
