import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//importing bootstrap components
import { Form, Button } from 'react-bootstrap';

//importing icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {  faFacebookF, faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className='footer p-3'>
            <div className="container-fluid">
                <div className="row justify-content-center">

                <div className="col-sm-4 col-md-4 text-center">
                        <h4 className='footerHeaders'>Contact Us</h4>
                        <ul className="list-unstyled" style={{padding:0}}>
                            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Louran-Alexandria </li>
                            <li><FontAwesomeIcon icon={faEnvelope} /> help@info.com</li>
                            <li><FontAwesomeIcon icon={faPhoneAlt} /> 1623</li>
                        </ul>
                    </div>

                    <div className="col-sm-4 col-md-4 text-center">
                        <h4 className='footerHeaders'>Are you a doctor?</h4>
                        <p>Join HELP doctors</p>
                    </div>

                    <div className="col-sm-4 col-md-4 text-center">
                        <h4 className='footerHeaders'>Newsletter</h4>
                        <Form inline>
                            <div className="d-inline-block">
                                <Form.Group controlId="email-input" className="mb-2 mr-sm-2">
                                    <Form.Label className="sr-only">Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" className="custom-input mr-sm-2" />
                                </Form.Group>
                            </div>
                            <div className="d-inline-block">
                                <Button type="submit" href='http://localhost:3000/register' id="joinbutton">Join Newsletter</Button>
                            </div>
                        </Form>
                        <div style={{marginTop: '10px'}}>
                        <a href="https://www.facebook.com"> <FontAwesomeIcon icon={faFacebookF} size="2x" style={{ color: '#c32aa3', marginRight: '10px' }}/></a>
                        <a href="https://www.instagram.com"> <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#c32aa3', marginRight: '10px' }}/></a>
                        <a href="https://www.twitter.com">   <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: '#1da1f2', marginRight: '10px' }} /></a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;