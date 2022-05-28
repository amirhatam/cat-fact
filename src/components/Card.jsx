import React from "react";
import { MDBCard, MDBCardBody, MDBCardGroup, MDBCardText, MDBCardTitle, MDBContainer, MDBRow, MDBTooltip } from 'mdb-react-ui-kit'
import { CatFact } from "../utils/CatFact";

const Card = (props) => {


    const handleMouseEnter = () => {
        const getFact = CatFact({ setFact: props.setFact })
    }

    const handleMouseLeave = () => {
        props.setFact([])
    }

    return (
        <MDBContainer>
            <MDBRow>
                {
                    props.catsList.map((e, i) => {
                        return (
                            <MDBCardGroup key={i} className='col-md-3 col-9 my-4'>
                                <MDBCard background={props.boxColor[i]}>
                                    <MDBTooltip
                                        tag='a'
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        title={
                                            props.fact != 0
                                                ?
                                                props.fact
                                                :
                                                <div className="spinner-border" role="status" />
                                        }
                                    >
                                        <MDBCardBody className="text-white">
                                            <MDBCardTitle className="font-weight-light mt-3 mb-2">
                                                Breed
                                            </MDBCardTitle>
                                            <MDBCardText className="font-weight-bold px-2 pb-3 block-example border-bottom border-gray">{e.breed}</MDBCardText>

                                            <MDBCardText className="font-weight-light mb-2">
                                                Coat
                                            </MDBCardText>
                                            <MDBCardText className="font-weight-bold px-2 pb-3 block-example border-bottom border-gray">{e.coat}</MDBCardText>

                                            <MDBCardText className="font-weight-light mb-2">
                                                Country
                                            </MDBCardText>
                                            <MDBCardText className="font-weight-bold px-2 pb-3 block-example border-bottom border-gray">{e.country}</MDBCardText>

                                            <MDBCardText className="font-weight-light mb-2">
                                                Origin
                                            </MDBCardText>
                                            <MDBCardText className="font-weight-bold px-2 pb-3 block-example border-bottom border-gray">{e.origin}</MDBCardText>

                                            <MDBCardText className="font-weight-light mb-2">
                                                Pattern
                                            </MDBCardText>
                                            <MDBCardText className="font-weight-bold px-2 pb-3">{e.pattern}</MDBCardText>

                                        </MDBCardBody>
                                    </MDBTooltip>
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