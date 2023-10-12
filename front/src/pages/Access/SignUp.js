//

//
import { useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import AccessFooter from "../../components/footers/AcessFooter";
import PageNavHeader from "../../components/headers/PageNavHeader";
import TextInput from "../../components/inputs/TextInput";
import TextInputIcon from "../../components/inputs/TextInputIcon";

//

//Hooks
import { useSignUp } from "../../hooks/useSignUp";

function SignUp() {
  const [user, setUser] = useState({ email: "", password: "" });

  const { signup, error, loading } = useSignUp();

  // Sign up user
  const handleSignUp = async (e) => {
    e.preventDefault();

    await signup(user);
  };

  return (
    <>
      <PageNavHeader />
      <div className="page page--signup">
        <header className="section__header">
          <h2>Create an account</h2>
          <p>With an account we will have you traveling in no time.</p>
        </header>
        <form className="form" action="" onSubmit={handleSignUp}>
          <TextInput
            id="email"
            type="text"
            label="Email address"
            error={error}
            setInputValue={(value) => setUser({ ...user, email: value })}
          />
          <TextInputIcon
            id="password"
            type="password"
            label="Password"
            // error={error}
            setInputValue={(value) => setUser({ ...user, password: value })}
          />
          <button className="btn-primary">Continue</button>
        </form>
        <p>
          Already have an account?{" "}
          <span>
            <NavLink to="/access/log-in">Log in</NavLink>
          </span>
        </p>
      </div>
      <AccessFooter />
    </>
  );
}

export default SignUp;
