import React from "react";
import { Routes, Route, BrowserRouter as Router, useNavigate } from "react-router-dom";
import Home from './Pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import Registerform from './Pages/register';
import Login from './Pages/login';

import { ClerkProvider, SignIn } from "@clerk/clerk-react";

function App(props) {
  return (
      <Router>
        <ClerkProviderWithNavigate >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>
        </ClerkProviderWithNavigate>
       
      </Router>
  );
}

function ClerkProviderWithNavigate({ children }) {
  const navigate = useNavigate();
  return (
    <ClerkProvider
    publishableKey="pk_test_c2V0dGxlZC1pbXBhbGEtMS5jbGVyay5hY2NvdW50cy5kZXYk"
    navigate={navigate}
    >
      {children}
    </ClerkProvider>
  );
}

export default App;
