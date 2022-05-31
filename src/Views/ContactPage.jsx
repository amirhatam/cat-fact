import { MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import GoogleMap from "../components/contact/GoogleMap";
import "../assets/styles/Contact.css";
import Coordonnees from "../components/contact/Coordonnees";
import Form from "../components/contact/Form";


const ContactPage = () => {

  return (

    <div id="Contact" className="gray-container" >
      <MDBContainer className="pt-md-5 pt-2">
        <h1 className="titre-fs text-center font-weight-light py-lg-5 py-3">Contact</h1>
        <MDBRow className="justify-content-around">
          <Form />
          <Coordonnees />
        </MDBRow>
      </MDBContainer>
      <GoogleMap />
    </div >

  );
}

export default ContactPage;

