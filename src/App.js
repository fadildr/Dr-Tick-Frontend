import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn/index";
import SignIn2 from "./pages/SignIn/index2";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Detail from "./pages/Detail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignIn2" element={<SignIn2 />} />
        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/" element={<LandingPage />} />
        {/* page not found */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
