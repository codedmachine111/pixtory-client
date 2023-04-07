import "./HomePage.scss";
import { Button } from "../../components/Button/Button";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="content">
            <h1>Pixtory</h1>
            <p>
              Every picture tells a story. What's yours? Join pixtory today and
              share you stories with your friends.
            </p>
            <Link to="/auth">
              <Button title="get started" />
            </Link>
          </div>
        </div>
        <div className="home-timer-container">
          <img src={logo} alt="" id="logo-icon" />
          <LoginForm />
        </div>
      </div>
    </>
  );
};
