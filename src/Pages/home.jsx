import React ,{ useState }from 'react';
 import '../App.css';
//components
import Navi from '../components/navi';
import Footer from '../components/foot';
//Bootsrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//IMPORT IMGS
import map from '../images/maps.jpg';
import ambualancePic from '../images/ambulance.png';
import customer from '../images/customer-support.png';
import get from '../images/rescue-by-one-click.png';
import patient from '../images/patient.png';
import { Helmet } from 'react-helmet';
import hospital3 from "../images/hospital3.jpeg"
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,faLocationDot} from '@fortawesome/free-solid-svg-icons';
//hi
    function Home() {
      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [display, setDisplay] = useState(false);

  const handleHide = () => setDisplay(false);
  const handleDisplay = () => setDisplay(true);

        return (

          <div>
            <Helmet>
  <title>Book ambulance and find nearest hospital to your location | HELP</title>
  <meta name="description" content="HELP | Health emergency website to book ambulance for emergencies and Find the nearest hospital to your location: its address, 
phone number" />
</Helmet>
            <Navi/>
      
            <div>
              <div className="container-fluid">
                <img src={map} alt="find nearest hospital to my location" width='100%' height='450px' />
                <Button  class="btn" id="findButton" onClick={handleShow}>FIND NEAREST HOSPITAL</Button>

    </div>
  
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <span class="Mheadings">Nearest Hospitals</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Louran Hospital</h5>
          <div class="modals">
           <b>230 m </b> <br></br><br></br>
           <a href='https://www.google.com/maps/place/%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89+%D9%84%D9%88%D8%B1%D8%A7%D9%86%E2%80%AD/@31.247208,29.9740562,15z/data=!4m2!3m1!1s0x0:0xea6fad06dfe061cc?sa=X&ved=2ahUKEwjNx87ni9D_AhUKhv0HHQOcAZQQ_BJ6BAhKEAg'>  <FontAwesomeIcon href=""icon={faLocationDot} color="blue" size='3x'/>
           
           </a>
       <br></br>
          </div>
          3<FontAwesomeIcon icon={faStar} color="yellow"className="mr-2"/>  <FontAwesomeIcon icon={faStar} color="yellow"className="mr-2"/> <FontAwesomeIcon icon={faStar} color="yellow"className="mr-2"/>

         <br></br>

          17 Shaarawy St | 03 588289 <br></br>
          Open 24 hours 
          <hr></hr>
          
          <h5>Al-Madina Hospital</h5>
          <div class="modals">
           <b>950 m </b> <br></br><br></br>
           <a href='https://www.google.com/maps/place/%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89+%D9%84%D9%88%D8%B1%D8%A7%D9%86%E2%80%AD/@31.247208,29.9740562,15z/data=!4m2!3m1!1s0x0:0xea6fad06dfe061cc?sa=X&ved=2ahUKEwjNx87ni9D_AhUKhv0HHQOcAZQQ_BJ6BAhKEAg'>  <FontAwesomeIcon href=""icon={faLocationDot} color="blue" size='3x'/>
           </a>
        <br></br>
          </div>
<div>
          5<FontAwesomeIcon icon={faStar} color="yellow"className="mr-2"/><FontAwesomeIcon icon={faStar} color="yellow"className="mr-2"/><FontAwesomeIcon icon={faStar} color="yellow"className="mr-2"/><FontAwesomeIcon icon={faStar} color="yellow"className="mr-2"/><FontAwesomeIcon icon={faStar} color="yellow"className="mr-2"/> <br></br>
          21 Fawzy Moaaz St | 03 480494 <br></br>
          Open 24 hours
        </div>
        </Modal.Body>
        
      </Modal>
       
    
      
  



      
{/*Ambulance */}

      <br/>
      <div  id="xys"className="d-flex justify-content-center mx-3">
        <Card style={{ width: '50%', border: '2px solid #AC1018' }}>
        <div className="p-2 -circle d-flex align-items-center justify-content-center">
          <Card.Img variant="top" src={ambualancePic} id="ambulancePic" className="rounded-circle" />
        </div>
        <Card.Body className="d-flex flex-column align-items-center" id="benefit">
          <Card.Title>24/7 AMBULANCE</Card.Title>
          <Button variant="primary"onClick={handleDisplay} style={{ backgroundColor: '#AC1018', borderColor: '#AC1018' }}>ORDER NOW</Button>
    
          <Modal show={display} onHide={handleHide}>
          <Modal.Header closeButton>
          <Modal.Title> <span class="Mheadings">Nearest Ambulance</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img variant="top" src={hospital3} id="ambulancePic" alt="hospital ambulance logo"className="rounded-circle"  />
        <div id='drivers'>
           <h5>Louran Hospital </h5>
            Estimated time : 4 minutes <br></br> <br></br>
            <Button variant="primary"onClick={handleDisplay} style={{ backgroundColor: '#AC1018', borderColor: '#AC1018' }}>ORDER NOW</Button>

        </div>

        </Modal.Body>
          </Modal>

                   

        </Card.Body>
        </Card>
      </div>
      <br></br>
      
              {/*benefits section*/}
              <div class="text-center">
                <h3>H.E.L.P Features</h3> <br />
              </div>
      
              <div class="container" id='edit'>
                <div class="row justify-content-center">
                  <div class="col-md-4 mb-3 d-flex align-items-stretch">
                    <div class="card" style={{ width: '18rem', border: '0px solid #AC1018' }}>
                      <div class="p-2  d-flex align-items-center justify-content-center">
                        <img src={customer} class="card-img-top" style={{ height: '100px', width: '100px', boxShadow: 'none' }} alt="24/7 Customer Support for emergencies" />
                      </div>
                      <div class="card-body d-flex flex-column align-items-center">
                        <h5 class="card-title font-weight-light">24/7 Customer Support</h5>
                      </div>
                    </div>
                  </div>
      
                  <div class="col-md-4 mb-3 d-flex align-items-stretch">
                    <div class="card" style={{ width: '18rem', border: '0px solid #AC1018' }}>
                      <div class="p-2 d-flex align-items-center justify-content-center">
                        <img src={get} class="card-img-top" style={{ height: '100px', width: '100px', boxShadow: 'none' }} alt="24/7 Technical Assistance for emergency" />
                      </div>
                      <div class="card-body text-center flex-column">
                        <h5 class="card-title font-weight-light">Get Rescued By A Click</h5>
                      </div>
                    </div>
                  </div>
      
                  <div class="col-md-4 mb-3 d-flex align-items-stretch">
                    <div class="card" style={{ width: '18rem', border: '0px solid #AC1018' }}>
                      <div class="p-2 d-flex align-items-center justify-content-center">
                        <img src={patient} class="card-img-top" style={{ height: '100px', width: '100px', boxShadow: 'none' }} alt="patient emergency first" />
                      </div>
                      <div class="card-body text-center flex-column">
                        <h5 class="card-title font-weight-light">Patient First Policy</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
              <Footer />
            </div>
          </div>
        );
      }
      export default Home;