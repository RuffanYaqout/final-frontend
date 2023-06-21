import React from "react";
import { Routes, Route, BrowserRouter as Router, useNavigate } from "react-router-dom";
import Home from './Pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";

import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";
import Registration from "./Pages/signin";
import Signup from "./Pages/signup";

function App(props) {
  return (
      <Router>
        <ClerkProviderWithNavigate >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Registration/>}/>
          <Route path='/signup' element={<Signup/>}/>
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
