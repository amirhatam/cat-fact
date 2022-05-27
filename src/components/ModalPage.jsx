import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function ModalPage(props) {
    const [basicModal, setBasicModal] = useState(true);


    // const toggleShow = () => setBasicModal(!basicModal);


    // const hanldeClick = () => {
    //     if (basicModal == true) {
    //         setBasicModal(false)
    //         props.setFact([])
    //     }

    //     // window.location.reload(false); //Refresh a Page
    // }

    // console.log(props.fact);

    return (
        <>
            {/* <MDBBtn onClick={toggleShow}>LAUNCH DEMO MODAL</MDBBtn> */}
            <MDBModal show={basicModal} tabIndex='-1' >
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader className='d-block'>
                            <MDBModalTitle >FACT</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            {props.fact}
                        </MDBModalBody>

                        <MDBModalFooter className='d-block'>
                            {/* <MDBBtn color='dark' id="btn"
                                onClick={hanldeClick}
                            >
                                Close
                            </MDBBtn> */}
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}