// React
import { useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import AccessFooter from "../../components/footers/AcessFooter";
import PageNavHeader from "../../components/headers/PageNavHeader";
import TextInput from "../../components/inputs/TextInput";
import TextInputIcon from "../../components/inputs/TextInputIcon";

// Hooks
import { useLogIn } from "../../hooks/useLogIn";

function LogIn() {
  const [user, setUser] = useState({ email: "", password: "" });

  // const { login, error, loading } = useLogIn();

  // Log in user
  const handleLogIn = async (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <PageNavHeader />
      <div className="page page--signup">
        <header className="section__header">
          <h2>Welcome back</h2>
          <p>Please sign into your account.</p>
        </header>
        <form className="form" action="" onSubmit={handleLogIn}>
          <TextInput
            id="email"
            type="text"
            label="Email address"
            error="error message"
            setInputValue={(value) => setUser({ ...user, email: value })}
          />
          {/* Password Input */}
          <TextInputIcon
            id="password"
            type="password"
            label="Password"
            error="error message"
            setInputValue={(value) => setUser({ ...user, password: value })}
          />
          <button className="btn-primary">Continue</button>
        </form>
        <p>
          Already have an account? {""}
          <span>
            <NavLink to="/access/sign-up">Sign up</NavLink>
          </span>
        </p>
      </div>
      <AccessFooter />
    </>
  );
}

export default LogIn;
