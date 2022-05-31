import { MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'

export default function Form() {
    return (
        <MDBCol className="align-self-center col-lg-5 col-8 lg-0 mb-4">
            <MDBCard>
                <MDBCardHeader className="form-header text-center bg-info rounded">
                    <h3 className="my-3 text-white">
                        Contactez-moi <MDBIcon fab icon="telegram-plane" />
                    </h3>
                </MDBCardHeader>
                <MDBCardBody className="mb-lg-3 px-sm-4 px-0" >
                    <form action="https://formsubmit.co/amirhatam136@gmail.com" method="POST" className="px-3">
                        <div className="my-sm-3 my-2">
                            <input type="email" name="email" placeholder="Your Email" required className="h6-fs form-control col" />
                        </div>
                        <div className="my-sm-3 my-2">
                            <input type="text" name="Nom" placeholder="Your Name" required className="h6-fs form-control col" />
                        </div>
                        <div className="my-sm-3 my-2">
                            <textarea rows="5" cols="33" type="text" name="message" placeholder="Your Message" required className="h6-fs form-control col" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-info rounded-pill px-3 p-fs py-md-2 px-md-3 py-1 px-2  text-white" >Send</button>
                        </div>
                    </form>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}
