import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn/index";
import Detail from "./pages/Detail";
import SignUp from "./pages/SignUp";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Card from "./components/Card";
// import Detail from "./pages/Detail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/Header" element={<Header />} />
        <Route path="/Card" element={<Card />} /> */}
        <Route path="/Detail/:id" element={<Detail />} />
        {/* <Route path="/Footer" element={<Footer />} /> */}
        <Route path="/Order/:id" element={<Order />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />
        {/* page not found */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
