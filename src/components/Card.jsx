import React from "react";
import { MDBCard, MDBCardBody, MDBCardGroup, MDBCardText, MDBCardTitle, MDBContainer, MDBRow, MDBTooltip } from 'mdb-react-ui-kit'
import { CatFact } from "../utils/CatFact";
import '../assets/styles/CardStyles.css'
import SpinnerPage from "./SpinerPage";

const Card = (props) => {


    const handleMouseEnter = () => {
        const getFact = CatFact({ setFact: props.setFact })
    }

    const handleMouseLeave = () => {
        props.setFact([])
    }

    return (
        <MDBContainer className="py-lg-5">
            <MDBRow>
                {
                    props.catsList != 0
                        ?
                        props.catsList.map((e, i) => {
                            return (
                                <MDBCardGroup key={i} className='col-md-4 col-9 my-4'>
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
                                            <MDBCardBody className="text-white text-center">
                                                <MDBRow>
                                                    <div className="col-6">
                                                        <div className="py-3">
                                                            <MDBCardText className="font-weight-bold">
                                                                Breed
                                                            </MDBCardText>
                                                            {
                                                                e.breed
                                                                    ?
                                                                    <MDBCardText className="font-weight-light mb-0">{e.breed}</MDBCardText>
                                                                    :
                                                                    <MDBCardText className="font-weight-light mb-0">Not Found !</MDBCardText>
                                                            }
                                                        </div>
                                                    </div>

                                                    <div className="col-6">
                                                        <div className="py-3">
                                                            <MDBCardText className="font-weight-bold">
                                                                Coat
                                                            </MDBCardText>
                                                            {
                                                                e.coat
                                                                    ?
                                                                    <MDBCardText className="font-weight-light mb-0">{e.coat}</MDBCardText>
                                                                    :
                                                                    <MDBCardText className="font-weight-light mb-0">Not Found !</MDBCardText>
                                                            }
                                                        </div>
                                                    </div>
                                                </MDBRow>
                                                <MDBRow>
                                                    <div className="col-6">
                                                        <div className="py-3  block-example border-top border-gray">
                                                            <MDBCardText className="font-weight-bold">
                                                                Origin
                                                            </MDBCardText>
                                                            {
                                                                e.origin
                                                                    ?
                                                                    <MDBCardText className="font-weight-light mb-0">{e.origin}</MDBCardText>
                                                                    :
                                                                    <MDBCardText className="font-weight-light mb-0">Not Found !</MDBCardText>
                                                            }
                                                        </div>
                                                    </div>

                                                    <div className="col-6">
                                                        <div className="py-3  block-example border-top border-gray">
                                                            <MDBCardText className="font-weight-bold">
                                                                Pattern
                                                            </MDBCardText>
                                                            {
                                                                e.pattern
                                                                    ?
                                                                    <MDBCardText className="font-weight-light mb-0">{e.pattern}</MDBCardText>
                                                                    :
                                                                    <MDBCardText className="font-weight-light mb-0">Not Found !</MDBCardText>
                                                            }
                                                        </div>

                                                    </div>
                                                </MDBRow>
                                                <div className="py-3 text-center block-example border-top border-gray">
                                                    <MDBCardText className="font-weight-bold">
                                                        Country
                                                    </MDBCardText>

                                                    {
                                                        e.country
                                                            ?
                                                            <MDBCardText className="font-weight-light mb-0">{e.country}</MDBCardText>
                                                            :
                                                            <MDBCardText className="font-weight-light mb-0">Not Found !</MDBCardText>
                                                    }
                                                </div>
                                            </MDBCardBody>
                                        </MDBTooltip>
                                    </MDBCard>
                                </MDBCardGroup>
                            )
                        })
                        :
                        <SpinnerPage />
                }
            </MDBRow>
        </MDBContainer >

    );
}

export default Card;