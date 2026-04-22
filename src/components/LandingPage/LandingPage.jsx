import styles from "./LandingPage.module.css";
import Button1 from "../Button1/Button1";
import Button2 from "../Button2/Button2";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container">
      <div className={styles.landingpage_content}>
        <div className={styles.landingpage_text}>
          <h1>Welcome to PopX</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>

        <div className={styles.landingpage_btns}>
          <Link to="/signup">
            <Button1 />
          </Link>
          <Link to="/login">
            <Button2 />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
