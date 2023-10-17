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

// Icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccessFooter from "../components/footers/AcessFooter";

const Profile = () => {
  const [email, setEmail] = useState();
  const [ID, setID] = useState();

  const { logout } = useLogout();
  // const { userDetails, email, ID } = useGetUser();

  const isAuthenticated = useAuth();

  const { user } = useAuthContext();

  // if (user) {
  //   const userEmail = user.email;
  //   console.log(userEmail);
  // }

  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      {isAuthenticated ? (
        <div className="page page--profile">
          <div className="profile__user">
            <div className="user__profile-image"></div>
            <h4>{user.email}</h4>
          </div>

          <div className="profile__container">
            <h3>Profile</h3>
            <NavLink className="link--profile" to="/add-property">
              Personal information
              <span>
                <ChevronRightIcon />
              </span>
            </NavLink>
            <NavLink className="link--profile" to="/add-property">
              My trips
              <span>
                <ChevronRightIcon />
              </span>
            </NavLink>
            <NavLink className="link--profile" to="/add-property">
              Notifications
              <span>
                <ChevronRightIcon />
              </span>
            </NavLink>
          </div>

          <div className="profile__container">
            <h3>Add a listing</h3>
            <NavLink className="link--profile" to="/add-property">
              Create a property listing
              <span>
                <ChevronRightIcon />
              </span>
            </NavLink>
            <NavLink className="link--profile" to="/add-property">
              Create an experience listing
              <span>
                <ChevronRightIcon />
              </span>
            </NavLink>
          </div>

          <div className="profile__container">
            <h3>Support</h3>
            <NavLink className="link--profile" to="/add-property">
              Personal information
              <span>
                <ChevronRightIcon />
              </span>
            </NavLink>
            <NavLink className="link--profile" to="/add-property">
              My trips
              <span>
                <ChevronRightIcon />
              </span>
            </NavLink>
            <NavLink className="link--profile" to="/add-property">
              Notifications
              <span>
                <ChevronRightIcon />
              </span>
            </NavLink>
          </div>

          <div className="profile__container--bottom">
            <p>$NZD</p>
            <p>English (UK)</p>
          </div>
          <button className="btn-outline" onClick={handleLogOut}>
            Log out
          </button>
        </div>
      ) : (
        <Access />
      )}
      <NavFooter />
    </>
  );
};

export default Profile;
