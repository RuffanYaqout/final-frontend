import { Routes, Route } from "react-router-dom";
import '../App.css';
import Home from './Pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import Registerform from './Pages/register';
import Login from './Pages/login';
import { ClerkProvider, SignIn, SignedIn } from "@clerk/clerk-react";
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App(props) {
  return (
    <ClerkProvider frontendApi={clerkConfig}>
      <Routes>
        <Route path="/" element={<Home db={props.db} auth={props.auth} />} />
        <Route path="/register" element={<Registerform db={props.db} auth={props.auth} />} />
        <Route path="/login" element={<Login db={props.db} auth={props.auth} />} />
        <Route
          path="/dashboard"
          element={
            <SignedIn>
              <Dashboard db={props.db} auth={props.auth} />
            </SignedIn>
          }
        />
        <Route
          path="/profile"
          element={
            <SignedIn>
              <Profile db={props.db} auth={props.auth} />
            </SignedIn>
          }
        />
        <Route
          path="/signin"
          element={
            <SignedOut>
              <SignIn />
            </SignedOut>
          }
        />
        <Route
          path="/signup"
          element={
            <SignedOut>
              <SignUp />
            </SignedOut>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}



export default App;