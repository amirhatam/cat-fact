import React from "react";
import { MDBCard, MDBCardBody, MDBCardGroup, MDBCardImage, MDBCardText, MDBContainer, MDBRow, MDBTooltip } from 'mdb-react-ui-kit'
import { CatFact } from "../../utils/CatFact";
import '../../assets/styles/CardStyles.css'
import SpinnerPage from "../SpinerPage";

const Card = (props) => {

    const handleMouseEnter = () => {
        const getFact = CatFact({ setFact: props.setFact })
    }

    const handleMouseLeave = () => {
        props.setFact([])
    }
    // console.log(props.catsList);

    return (
        <MDBContainer className="py-lg-5">
            <MDBRow className="justify-content-center">
                {
                    props.catsList != 0
                        ?
                        props.catsList.map((e, i) => {
                            return (
                                <MDBCardGroup key={i} className='col-md-8 col-9 my-5'>
                                    <MDBCard background={props.boxColor[i]}>
                                        <MDBRow style={{ cursor: "pointer" }}>
                                            <div className='col-12 bg-image hover-overlay'>
                                                {
                                                    e.image
                                                        ?
                                                        <div className="text-center">
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
                                                                <MDBCardImage src={e.image.url} fluid alt='...' />
                                                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                            </MDBTooltip>
                                                        </div>
                                                        :
                                                        <>
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
                                                                <MDBCardImage src='https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg' fluid alt='...' />
                                                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                            </MDBTooltip>
                                                        </>
                                                }
                                            </div>
                                        </MDBRow>

                                        <MDBCardBody className="text-white text-center">
                                            <MDBRow>
                                                <div className="col-6">
                                                    <div className="py-3">
                                                        <MDBCardText className="font-weight-bold">
                                                            Breed
                                                        </MDBCardText>
                                                        {
                                                            e.name
                                                                ?
                                                                <MDBCardText className="font-weight-light mb-0">{e.name}</MDBCardText>
                                                                :
                                                                <MDBCardText className="font-weight-light mb-0">Not Found !</MDBCardText>
                                                        }
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="py-3">
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
                                            </MDBRow>
                                            <MDBRow>
                                                <div className="col-6">
                                                    <div className="py-3  block-example border-top border-gray">
                                                        <MDBCardText className="font-weight-bold">
                                                            Temperament
                                                        </MDBCardText>
                                                        {
                                                            e.temperament
                                                                ?
                                                                <MDBCardText className="font-weight-light mb-0">{e.temperament}</MDBCardText>
                                                                :
                                                                <MDBCardText className="font-weight-light mb-0">Not Found !</MDBCardText>
                                                        }
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="py-3  block-example border-top border-gray">
                                                        <MDBCardText className="font-weight-bold">
                                                            Life Span
                                                        </MDBCardText>
                                                        {
                                                            e.life_span
                                                                ?
                                                                <MDBCardText className="font-weight-light mb-0">{e.life_span}</MDBCardText>
                                                                :
                                                                <MDBCardText className="font-weight-light mb-0">Not Found !</MDBCardText>
                                                        }
                                                    </div>

                                                </div>
                                            </MDBRow>
                                            <div className="py-3 text-center block-example border-top border-gray">
                                                <MDBCardText className="font-weight-bold">
                                                    Description
                                                </MDBCardText>

                                                {
                                                    e.description
                                                        ?
                                                        <MDBCardText className="font-weight-light mb-0">{e.description}</MDBCardText>
                                                        :
                                                        <MDBCardText className="font-weight-light mb-0">Not Found !</MDBCardText>
                                                }
                                            </div>
                                        </MDBCardBody>
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