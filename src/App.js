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
import { useEffect } from "react";
import axios from 'axios';



function App() {
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      console.log('user is Logged in');
      axios.get('http://127.0.0.1:8000/api/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        console.log(response.data);
      }).catch(err => {
        console.log(err);
      })
    } else {
      console.log('user is NOT logged in');
    }
  }, []);

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
