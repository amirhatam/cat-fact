import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardGroup, MDBCardImage, MDBCardText, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTooltip } from 'mdb-react-ui-kit'
import { CatFact } from "../../utils/CatFact";
import '../../assets/styles/CardStyles.css'
import SpinnerPage from "../SpinerPage";
import FiveStars from "../stars/FiveStars";
import FourStars from "../stars/FourStars";
import ThreeStars from "../stars/ThreeStars";
import TwoStars from "../stars/TwoStars";
import OneStars from "../stars/OneStars";

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
                                        {/* {
                                            console.log(e.rex)
                                        } */}

                                        <MDBCardBody className="text-white text-center">
                                            <MDBRow>
                                                <div className="col-6">
                                                    <div className="py-3">
                                                        <MDBCardText className="font-weight-bold">
                                                            Breed
                                                        </MDBCardText>
                                                        <MDBCardText className="font-weight-light py-3 mb-0">{e.name}</MDBCardText>
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="py-3">
                                                        <MDBCardText className="font-weight-bold">
                                                            Origin
                                                        </MDBCardText>
                                                        <MDBCardText className="font-weight-light py-3 mb-0">{e.origin}</MDBCardText>
                                                    </div>
                                                </div>
                                            </MDBRow>
                                            <MDBRow>
                                                <div className="col-6">
                                                    <div className="py-3 block-example border-top border-gray">
                                                        <MDBCardText className="py-3 font-weight-bold">
                                                            Temperament
                                                        </MDBCardText>
                                                        <MDBCardText className="py-3 font-weight-light mb-0">{e.temperament}</MDBCardText>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="py-3 block-example border-top border-gray">
                                                        <MDBCardText className="py-3 font-weight-bold">
                                                            Life Span
                                                        </MDBCardText>
                                                        <MDBCardText className="py-3 font-weight-light mb-0">{e.life_span}</MDBCardText>
                                                    </div>
                                                </div>
                                            </MDBRow>


                                            <div className="py-3 text-center block-example border-top border-bottom border-gray">
                                                <MDBCardText className="py-3 font-weight-bold">
                                                    Description
                                                </MDBCardText>
                                                <MDBCardText className="py-3 font-weight-light mb-0">{e.description}</MDBCardText>
                                            </div>

                                            <MDBRow>
                                                <MDBCol className="col-md-4 col-6 py-3">
                                                    <MDBCardText className="py-3 font-weight-bold">
                                                        Adaptability
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light">
                                                        {e.adaptability === 5 ? <FiveStars />
                                                            : e.adaptability === 4 ? <FourStars />
                                                                : e.adaptability === 3 ? <ThreeStars />
                                                                    : e.adaptability === 2 ? <TwoStars />
                                                                        : <OneStars />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 font-weight-bold">
                                                        Affection Level
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light">
                                                        {e.affection_level === 5 ? <FiveStars />
                                                            : e.affection_level === 4 ? <FourStars />
                                                                : e.affection_level === 3 ? <ThreeStars />
                                                                    : e.affection_level === 2 ? <TwoStars />
                                                                        : <OneStars />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 font-weight-bold">
                                                        Energy Level
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light">
                                                        {e.energy_level === 5 ? <FiveStars />
                                                            : e.energy_level === 4 ? <FourStars />
                                                                : e.energy_level === 3 ? <ThreeStars />
                                                                    : e.energy_level === 2 ? <TwoStars />
                                                                        : <OneStars />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>


                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Child Friendly
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light">
                                                        {e.child_friendly === 5 ? <FiveStars />
                                                            : e.child_friendly === 4 ? <FourStars />
                                                                : e.child_friendly === 3 ? <ThreeStars />
                                                                    : e.child_friendly === 2 ? <TwoStars />
                                                                        : <OneStars />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Dog Friendly
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light">
                                                        {e.dog_friendly === 5 ? <FiveStars />
                                                            : e.dog_friendly === 4 ? <FourStars />
                                                                : e.dog_friendly === 3 ? <ThreeStars />
                                                                    : e.dog_friendly === 2 ? <TwoStars />
                                                                        : <OneStars />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Grooming
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light">
                                                        {e.grooming === 5 ? <FiveStars />
                                                            : e.grooming === 4 ? <FourStars />
                                                                : e.grooming === 3 ? <ThreeStars />
                                                                    : e.grooming === 2 ? <TwoStars />
                                                                        : <OneStars />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>


                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Health Issues
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light">
                                                        {e.health_issues === 5 ? <FiveStars />
                                                            : e.health_issues === 4 ? <FourStars />
                                                                : e.health_issues === 3 ? <ThreeStars />
                                                                    : e.health_issues === 2 ? <TwoStars />
                                                                        : <OneStars />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Intelligence
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light">
                                                        {e.intelligence === 5 ? <FiveStars />
                                                            : e.intelligence === 4 ? <FourStars />
                                                                : e.intelligence === 3 ? <ThreeStars />
                                                                    : e.intelligence === 2 ? <TwoStars />
                                                                        : <OneStars />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>

                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Shedding Level
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light">
                                                        {e.intelligence === 5 ? <FiveStars />
                                                            : e.intelligence === 4 ? <FourStars />
                                                                : e.intelligence === 3 ? <ThreeStars />
                                                                    : e.intelligence === 2 ? <TwoStars />
                                                                        : <OneStars />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Social Needs
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light">
                                                        {e.social_needs === 5 ? <FiveStars />
                                                            : e.social_needs === 4 ? <FourStars />
                                                                : e.social_needs === 3 ? <ThreeStars />
                                                                    : e.social_needs === 2 ? <TwoStars />
                                                                        : <OneStars />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Stranger Friendly
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light">
                                                        {e.stranger_friendly === 5 ? <FiveStars />
                                                            : e.stranger_friendly === 4 ? <FourStars />
                                                                : e.stranger_friendly === 3 ? <ThreeStars />
                                                                    : e.stranger_friendly === 2 ? <TwoStars />
                                                                        : <OneStars />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Vocalisation
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light">
                                                        {e.vocalisation === 5 ? <FiveStars />
                                                            : e.vocalisation === 4 ? <FourStars />
                                                                : e.vocalisation === 3 ? <ThreeStars />
                                                                    : e.vocalisation === 2 ? <TwoStars />
                                                                        : <OneStars />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>

                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Hairless
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light bg-light col-md-1 col-4 m-auto rounded-circle">
                                                        {e.hairless
                                                            ?
                                                            <MDBIcon icon="check" className="text-success" />
                                                            :
                                                            <MDBIcon icon="times" className="text-danger" />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>

                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Rex
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light bg-light col-md-1 col-4 m-auto rounded-circle">
                                                        {e.rex
                                                            ?
                                                            <MDBIcon icon="check" className="text-success py-1" />
                                                            :
                                                            <MDBIcon icon="times" className="text-danger py-1" />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>

                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Indoor
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light bg-light col-md-1 col-4 m-auto rounded-circle">
                                                        {e.indoor
                                                            ?
                                                            <MDBIcon icon="check" className="text-success py-1" />
                                                            :
                                                            <MDBIcon icon="times" className="text-danger py-1" />}
                                                    </MDBCardText>
                                                </MDBCol>

                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Hypoallergenic
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light bg-light col-md-1 col-4 m-auto rounded-circle">
                                                        {e.hypoallergenic
                                                            ?
                                                            <MDBIcon icon="check" className="text-success py-1" />
                                                            :
                                                            <MDBIcon icon="times" className="text-danger py-1" />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Experimental
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light bg-light col-md-1 col-4 m-auto rounded-circle">
                                                        {e.experimental
                                                            ?
                                                            <MDBIcon icon="check" className="text-success py-1" />
                                                            :
                                                            <MDBIcon icon="times" className="text-danger py-1" />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Natural
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light bg-light col-md-1 col-4 m-auto rounded-circle">
                                                        {e.natural
                                                            ?
                                                            <MDBIcon icon="check" className="text-success py-1" />
                                                            :
                                                            <MDBIcon icon="times" className="text-danger py-1" />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>

                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Rare
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light bg-light col-md-1 col-4 m-auto rounded-circle">
                                                        {e.rare
                                                            ?
                                                            <MDBIcon icon="check" className="text-success py-1" />
                                                            :
                                                            <MDBIcon icon="times" className="text-danger py-1" />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Short Legs
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light bg-light col-md-1 col-4 m-auto rounded-circle">
                                                        {e.short_legs
                                                            ?
                                                            <MDBIcon icon="check" className="text-success py-1" />
                                                            :
                                                            <MDBIcon icon="times" className="text-danger py-1" />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="4" className="py-3">
                                                    <MDBCardText className="py-3 block-example border-top border-gray font-weight-bold">
                                                        Suppressed Tail
                                                    </MDBCardText>
                                                    <MDBCardText className="font-weight-light bg-light col-md-1 col-4 m-auto rounded-circle">
                                                        {e.suppressed_tail
                                                            ?
                                                            <MDBIcon icon="check" className="text-success py-1" />
                                                            :
                                                            <MDBIcon icon="times" className="text-danger py-1" />
                                                        }
                                                    </MDBCardText>
                                                </MDBCol>
                                            </MDBRow>


                                            <MDBRow className="justify-content-center mt-4 mb-3">
                                                <MDBCol size="2">
                                                    <MDBBtn outline target="_blank" color="light" href={e.wikipedia_url}>Read More</MDBBtn>
                                                </MDBCol>
                                            </MDBRow>

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