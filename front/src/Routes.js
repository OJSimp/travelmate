import { Route, Routes } from "react-router-dom";

// Index page
import Home from "./pages/Home";
// Access Pages
import Access from "./pages/Access/Access";
import SignUp from "./pages/Access/SignUp";
import LogIn from "./pages/Access/LogIn";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import AddProperty from "./pages/AddProperty";
// Search Pages

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      {/* Access Routes */}
      <Route path="/access" element={<Access />}></Route>
      <Route path="access/sign-up" element={<SignUp />}></Route>
      <Route path="access/log-in" element={<LogIn />}></Route>

      {/* Profile */}
      <Route path="/profile" element={<Profile />}></Route>

      {/* Add Property */}
      <Route path="/add-property" element={<AddProperty />}></Route>

      {/* Search Routes */}
      <Route path="/search" element={<Search />}></Route>
    </Routes>
  );
}

export default AppRoutes;
