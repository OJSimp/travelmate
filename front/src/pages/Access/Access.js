// Styles
import "./Access.scss";

// Icons
import { BiCheck } from "react-icons/bi";
import { BsGoogle, BsFacebook, BsApple } from "react-icons/bs";

import { NavLink } from "react-router-dom";

// Components
import PageNavHeader from "../../components/headers/PageNavHeader";
import AccessFooter from "../../components/footers/AcessFooter";

function Access() {
  return (
    <>
      <PageNavHeader />
      <section className="page page--access max-width">
        <header className="section__header">
          <h2>Getting started</h2>
          <p>Sign up to TravelMate and discover your next holiday! </p>
        </header>
        <ul className="access__body">
          <li className="icon--list-item">
            <span>
              <BiCheck className="icon green" />
            </span>
            Free to use
          </li>
          <li className="icon--list-item">
            <span>
              <BiCheck className="icon green" />
            </span>
            Book a trip with friends
          </li>
          <li className="icon--list-item">
            <span>
              <BiCheck className="icon green" />
            </span>
            Plan a custom or recommended travel route
          </li>
        </ul>

        <div className="column--full-width">
          <NavLink className="btn-primary" to="sign-up">
            Sign up with email
          </NavLink>

          <div className="devider">
            <hr />
            <p>or</p>
            <hr />
          </div>

          <button className="btn-outline--grey">
            <BsGoogle />
            Sign up with Google
          </button>
          <button className="btn-outline--grey">
            <BsFacebook />
            Sign up with Facebook
          </button>
          <button className="btn-outline--grey">
            <BsApple />
            Sign up with Apple
          </button>
        </div>

        <div>
          <p>
            Already have an account?{" "}
            <span>
              <NavLink to="log-in">Log in</NavLink>
            </span>
          </p>
        </div>
      </section>
      <AccessFooter />
    </>
  );
}

export default Access;
