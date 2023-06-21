
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Navi from '../components/navi';
import Footer from '../components/foot';
//Bootstrap
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { firestore } from '../firebase';
import '../styles/index.css';
import { Helmet } from 'react-helmet';
import { SignIn, SignUp } from '@clerk/clerk-react';


function Signup(props) {
  const [error, setError] = useState(null);

  const auth = getAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      // Save the user's username to Firestore
      const userDocRef = doc(firestore, 'users', userCredential.user.uid);
      await setDoc(userDocRef, { username });
  
      // Navigate to the home page
      navigate('/');
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };
  

  return (
    <div>
      <Helmet>
  <title>Register | HELP</title>
  <meta name="description" content="HELP | Health emergency website book ambulance for emergency and to Find the 
nearest hospital to your location: its address, 
phone number, and ratings." />
</Helmet>  
  <div>

      <Navi />
        

          <div className='login-clerk'>
        <SignUp signInUrl='/signin' />

            </div>  

            
      </div>
      <Footer />
      
    </div>
  );
}
export default Signup;
