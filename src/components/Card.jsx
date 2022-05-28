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
                                            <MDBCardBody className="text-white">

                                                {
                                                    e.breed
                                                        ?
                                                        <div className="py-3">
                                                            <MDBCardTitle className="font-weight-light mb-2">
                                                                Breed
                                                            </MDBCardTitle>
                                                            <MDBCardText className="font-weight-bold px-2">{e.breed}</MDBCardText>
                                                        </div>
                                                        :
                                                        null

                                                }

                                                {
                                                    e.coat
                                                        ?
                                                        <div className="py-3 block-example border-top border-gray">

                                                            <MDBCardText className="font-weight-light">
                                                                Coat
                                                            </MDBCardText>
                                                            <MDBCardText className="font-weight-bold px-2">{e.coat}</MDBCardText>
                                                        </div>
                                                        :
                                                        null
                                                }
                                                {
                                                    e.country
                                                        ?
                                                        <div className="py-3 block-example border-top border-gray">
                                                            <MDBCardText className="font-weight-light">
                                                                Country
                                                            </MDBCardText>
                                                            <MDBCardText className="font-weight-bold px-2">{e.country}</MDBCardText>
                                                        </div>
                                                        :
                                                        null
                                                }
                                                {
                                                    e.origin
                                                        ?
                                                        <div className="py-3 block-example border-top border-gray">
                                                            <MDBCardText className="font-weight-light">
                                                                Origin
                                                            </MDBCardText>
                                                            <MDBCardText className="font-weight-bold px-2">{e.origin}</MDBCardText>
                                                        </div>
                                                        :
                                                        null
                                                }
                                                {
                                                    e.pattern
                                                        ?
                                                        <div className="py-3 block-example border-top border-gray">
                                                            <MDBCardText className="font-weight-light">
                                                                Pattern
                                                            </MDBCardText>
                                                            <MDBCardText className="font-weight-bold px-2">{e.pattern}</MDBCardText>
                                                        </div>
                                                        :
                                                        null
                                                }
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