import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn/index";
import Detail from "./pages/Detail";
import SignUp from "./pages/SignUp";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import CreateEvent from "./pages/CreateEvent";
import NotFound from "./pages/NotFound";
import PublicRoute from "./utils/routes/PublicRoute";
import PrivateRoute from "./utils/routes/PrivateRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route element={<PublicRoute />}>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Route>
        {/* MAIN */}
        <Route path="/" element={<LandingPage />} />
        {/* PRIVATE ROUTE */}
        <Route element={<PrivateRoute />}>
          <Route path="Profile" element={<Profile />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="/Order/:id" element={<Order />} />
          <Route path="/CreateEvent" element={<CreateEvent />} />
        </Route>

        {/* PRIVATE ADMIN ROUTE */}
        <Route element={<PrivateRoute isAdmin={true} />}></Route>
        {/* PAGE NOT FOUND */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
