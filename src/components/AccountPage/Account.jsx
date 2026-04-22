import { useEffect, useState } from "react";
import styles from "./Account.module.css";

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(storedUser);
  }, []);

  return (
    <div className="container">
      <div className={styles.account_topsection}>
        <p>Account Settings</p>
      </div>
      <div className={styles.account_content}>
        <div className={styles.account_profile}>
          <div className={styles.image}>
            <img
              className={styles.img1}
              src="./Profile.png"
              alt="profile-image"
            />
            <img
              className={styles.img2}
              src="./Camera.svg"
              alt="camera-image"
            />
          </div>
          <div className={styles.text}>
            <h3>{user?.fullName || "User Name"}</h3>
            <p>{user?.email || "user@email.com"} </p>
          </div>
        </div>
        <div className={styles.account_description}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            eligendi quam saepe? Vitae, aliquam nulla quasi in necessitatibus
            alias quibusdam.
          </p>
        </div>
        <div className={styles.divider}></div>
      </div>
    </div>
  );
};

export default Account;
