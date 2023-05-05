import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import WelcomePage from "./pages/WelcomePage";
import Plans from "./pages/Plans";
import Navbar from "./components/Navbar";
import Workspace from "./pages/Workspace";
import Dashboard from "./pages/Dashboard";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/welcomePage" element={<WelcomePage />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
