import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogIn = () => {
  // if there - is an error  - is loading
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [loading, setLoading] = useState(null);

  const navigate = useNavigate();

  const { dispatch } = useAuthContext();

  //sending data to databse using a post request
  const login = async (user) => {
    // starting request - so is loading & reset errors to null
    setLoading(true);
    setErrorEmail(null);
    setErrorPassword(null);

    const response = await fetch("http://localhost:8000/api/user/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });

    // send back webtoken if sucessful
    const json = await response.json();

    if (!response.ok) {
      // if not sucessful - send back error and finished loading
      setLoading(false);
      setErrorEmail(json.emailError);
      console.log(json.passwordError);
      setErrorPassword(json.passwordError);
    }
    if (response.ok) {
      // if sucessful - save user to local storage - (log user in)
      // userController.js returns in json email and token, from backend
      localStorage.setItem("user", JSON.stringify(json));

      // update authContext using authContext hook
      dispatch({ type: "LOGIN", paylaod: json });

      // finsihed loading now false
      setLoading(false);
      navigate("/");
    }
  };

  return { login, loading, errorEmail, errorPassword };
};
