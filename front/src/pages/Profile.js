import "./Profile.scss";

import { NavLink, Redirect, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//Hooks
import NavFooter from "../components/footers/NavFooter";
import { useLogout } from "../hooks/useLogOut";
import { useGetUser } from "../hooks/useGetUser";
import { useAuthContext } from "../hooks/useAuthContext";

import useAuth from "../hooks/useAuth";
import Access from "./Access/Access";

const Profile = () => {
  const [email, setEmail] = useState();
  const [ID, setID] = useState();

  const { logout } = useLogout();
  // const { userDetails, email, ID } = useGetUser();

  const isAuthenticated = useAuth();

  const { user } = useAuthContext();

  if (user) {
    const userEmail = user.email;
    console.log(userEmail);
  }

  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      {isAuthenticated ? (
        <div>
          <h4>{}</h4>
          <button className="btn-primary" onClick={handleLogOut}>
            LOG OUT
          </button>
          <NavLink className="link--profile" to="/add-property">
            Create a property Listing
          </NavLink>
        </div>
      ) : (
        <Access />
      )}
      <NavFooter />
    </>
  );
};

export default Profile;
