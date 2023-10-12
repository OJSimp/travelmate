import { Route, Routes } from "react-router-dom";

// Index page
import Home from "./pages/Home";
// Access Pages
import Access from "./pages/Access/Access";
import SignUp from "./pages/Access/SignUp";
import LogIn from "./pages/Access/LogIn";
import Search from "./pages/Search";
// Search Pages

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      {/* Access Routes */}
      <Route path="/access" element={<Access />}></Route>
      <Route path="access/sign-up" element={<SignUp />}></Route>
      <Route path="access/log-in" element={<LogIn />}></Route>

      {/* Search Routes */}
      <Route path="/search" element={<Search />}></Route>
    </Routes>
  );
}

export default AppRoutes;
