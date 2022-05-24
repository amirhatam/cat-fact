import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'


const Card = (props) => {

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCardTitle className='text-center my-md-5 my-4 display-5'>The Cats</MDBCardTitle>

                {
                    props.cats.map((e, i) => {
                        console.log(e);
                        return (
                            <MDBCardGroup key={i} className='col-md-4 col-9 my-4'>
                                <MDBCard>
                                    <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/49.webp" alt="MDBCard image cap"
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">Breed : {e.breed}</MDBCardTitle>
                                        <MDBCardText>
                                            Coat :  {e.coat}
                                        </MDBCardText>
                                        <MDBCardText>
                                            Country :  {e.country}
                                        </MDBCardText>
                                        <MDBCardText>
                                            Origin :  {e.origin}
                                        </MDBCardText>
                                        <MDBCardText>
                                            Pattern :  {e.pattern}
                                        </MDBCardText>
                                        <MDBBtn color="primary" size="md">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCardGroup>
                        )

                    })
                }

            </MDBRow>
        </MDBContainer >

    );
}

export default Card;