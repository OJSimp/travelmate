import { useEffect, useState } from "react";

export const useGetUser = () => {
  const [email, setEmail] = useState();
  const [ID, setID] = useState();

  // useEffect(() => {
  //   var token = localStorage.getItem("user");
  //   token = JSON.parse(token);

  //   const userEmail = token.email;
  //   setEmail(userEmail);
  // }, []);

  const userDetails = (userEmail) => {
    const getUserDetails = async () => {
      const response = await fetch(
        `http://localhost:8000/api/user/${userEmail}`,
        {
          method: "GET",
        }
      );

      const userResponse = await response.json();

      console.log(userResponse);
      const user = userResponse[0];
      setEmail(user.email);
      setID(user._id);
    };

    getUserDetails();
  };

  return { userDetails, email, ID };
};
