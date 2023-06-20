import { Routes, Route } from "react-router-dom";
import '../App.css';
import Home from './Pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import Registerform from './Pages/register';
import Login from './Pages/login';

function App(props) {

  return (
    <Routes>
      <Route path="/" element={<Home db={props.db} auth={props.auth} />} />
      <Route path="/register" element={<Registerform db={props.db} auth={props.auth} />} />
      <Route path="/login" element={<Login db={props.db} auth={props.auth} />} />
    </Routes>
  );
}

export default App;