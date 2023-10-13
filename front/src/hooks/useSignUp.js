import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  //if there is an error  // is loading
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [loading, setLoading] = useState(null);

  const navigate = useNavigate();

  // use the dispatch function to fire the right "case"
  const { dispatch } = useAuthContext();

  //sending data to databse using a post request
  const signup = async (user) => {
    // starting request - so is loading & reset errors to null
    setLoading(true);
    setErrorEmail(null);
    setErrorPassword(null);

    const response = await fetch("http://localhost:8000/api/user/signup/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });

    // // send back webtoken if sucessful
    const json = await response.json();

    // console.log(json);

    if (!response.ok) {
      // if not sucessful - send back error and finished loading
      setLoading(false);

      if (json.emailError) {
        setErrorEmail(json.emailError);
      }
      if (json.passwordError) {
        setErrorPassword(json.passwordError);
      }
    }
    if (response.ok) {
      // if sucessful - save user to local storage - (log user in)
      localStorage.setItem("user", JSON.stringify(json));

      // update authContext using authContext hook
      console.log("sent as payload", json);
      dispatch({ type: "LOGIN", paylaod: json });

      // finsihed loading now false
      setLoading(false);

      // navigate to search page after finished
      navigate("/");
    }
  };

  // we need to return the "signup function", the "loading state" and the "error state"
  return { signup, loading, errorEmail, errorPassword };
};
