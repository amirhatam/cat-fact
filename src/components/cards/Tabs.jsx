import React, { useState } from 'react';
import {
    MDBBtn, MDBCardBody, MDBCardText, MDBCol, MDBIcon, MDBRow,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';
import FiveStars from "../stars/FiveStars";
import FourStars from "../stars/FourStars";
import ThreeStars from "../stars/ThreeStars";
import TwoStars from "../stars/TwoStars";
import OneStars from "../stars/OneStars";
import '../../assets/styles/Tabs.css'


export default function Tabs(props) {
    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    const cat = props.data
    // setBasicActive('')

    return (
        <>
            <MDBTabs className='row justify-content-between px-md-5 px-3 pt-3 text-center'>
                <MDBTabsItem className='col-md-2 col-3 px-0'>
                    <MDBTabsLink
                        onClick={() => handleBasicClick('tab1')}
                        active={basicActive === 'tab1'}
                        className="rounded-pill px-0"
                    >
                        General
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem className='col-md-2 col-3 px-0'>
                    <MDBTabsLink
                        onClick={() => handleBasicClick('tab2')}
                        active={basicActive === 'tab2'}
                        className="rounded-pill px-0"
                    >
                        Description
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem className='col-md-2 col-3 px-0'>
                    <MDBTabsLink
                        onClick={() => handleBasicClick('tab3')}
                        active={basicActive === 'tab3'}
                        className="rounded-pill px-0"
                    >
                        Mood
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem className='col-md-2 col-3 px-0'>
                    <MDBTabsLink
                        onClick={() => handleBasicClick('tab4')}
                        active={basicActive === 'tab4'}
                        className="rounded-pill px-0"
                    >
                        Fact
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBCardBody className="text-white text-center">
                <MDBTabsContent>
                    <MDBTabsPane show={basicActive === 'tab1'}>

                        <MDBRow>
                            <div className="col-4 mb-3">
                                <MDBCardText className="font-weight-bold mb-md-3 mb-2">
                                    Breed
                                </MDBCardText>
                                <MDBCardText className="font-weight-light">{cat.name}</MDBCardText>
                            </div>

                            <div className="col-4 mb-3">
                                <MDBCardText className="font-weight-bold mb-md-3 mb-2">
                                    Origin
                                </MDBCardText>
                                <MDBCardText className="font-weight-light">{cat.origin}</MDBCardText>
                            </div>
                            <div className="col-4 mb-3">
                                <MDBCardText className="font-weight-bold mb-md-3 mb-2">
                                    Life Span
                                </MDBCardText>
                                <MDBCardText className="font-weight-light">{cat.life_span}</MDBCardText>
                            </div>
                        </MDBRow>
                        <MDBRow>
                            <div className="col-12 py-3 block-example border-top border-gray">
                                <MDBCardText className="font-weight-bold">
                                    Temperament
                                </MDBCardText>
                                <MDBCardText className="font-weight-light">{cat.temperament}</MDBCardText>
                            </div>
                        </MDBRow>
                    </MDBTabsPane>

                    <MDBTabsPane show={basicActive === 'tab2'}>
                        <MDBRow>
                            <div className="col-12 py-3 text-center">
                                <MDBCardText className="font-weight-bold">
                                    Description
                                </MDBCardText>
                                <MDBCardText className="font-weight-light">{cat.description}</MDBCardText>
                            </div>
                        </MDBRow>
                    </MDBTabsPane>

                    <MDBTabsPane show={basicActive === 'tab3'}>
                        <MDBRow className="justify-content-center">
                            <MDBCol className="col-md-4 col-6 block-example border-bottom border-gray py-md-4 py-3">
                                <MDBCardText className="py-0 mb-md-3 mb-0 font-weight-bold">
                                    Adaptability
                                </MDBCardText>
                                <MDBCardText className="font-weight-light">
                                    {cat.adaptability === 5 ? <FiveStars />
                                        : cat.adaptability === 4 ? <FourStars />
                                            : cat.adaptability === 3 ? <ThreeStars />
                                                : cat.adaptability === 2 ? <TwoStars />
                                                    : <OneStars />
                                    }
                                </MDBCardText>
                            </MDBCol>
                            <MDBCol className="col-md-4 col-6 block-example border-bottom border-gray py-md-4 py-3">
                                <MDBCardText className="py-0 mb-md-3 mb-0 font-weight-bold">
                                    Affection Level
                                </MDBCardText>
                                <MDBCardText className="font-weight-light">
                                    {cat.affection_level === 5 ? <FiveStars />
                                        : cat.affection_level === 4 ? <FourStars />
                                            : cat.affection_level === 3 ? <ThreeStars />
                                                : cat.affection_level === 2 ? <TwoStars />
                                                    : <OneStars />
                                    }
                                </MDBCardText>
                            </MDBCol>
                            <MDBCol className="col-md-4 col-6 block-example border-bottom border-gray py-md-4 py-3">
                                <MDBCardText className="py-0 mb-md-3 mb-0 font-weight-bold">
                                    Energy Level
                                </MDBCardText>
                                <MDBCardText className="font-weight-light">
                                    {cat.energy_level === 5 ? <FiveStars />
                                        : cat.energy_level === 4 ? <FourStars />
                                            : cat.energy_level === 3 ? <ThreeStars />
                                                : cat.energy_level === 2 ? <TwoStars />
                                                    : <OneStars />
                                    }
                                </MDBCardText>
                            </MDBCol>


                            <MDBCol className="col-md-4 col-6 block-example border-bottom border-gray py-md-4 py-3">
                                <MDBCardText className="py-0 mb-md-3 mb-0 font-weight-bold">
                                    Child Friendly
                                </MDBCardText>
                                <MDBCardText className="font-weight-light">
                                    {cat.child_friendly === 5 ? <FiveStars />
                                        : cat.child_friendly === 4 ? <FourStars />
                                            : cat.child_friendly === 3 ? <ThreeStars />
                                                : cat.child_friendly === 2 ? <TwoStars />
                                                    : <OneStars />
                                    }
                                </MDBCardText>
                            </MDBCol>
                            <MDBCol className="col-md-4 col-6 block-example border-bottom border-gray py-md-4 py-3">
                                <MDBCardText className="py-0 mb-md-3 mb-0 font-weight-bold">
                                    Dog Friendly
                                </MDBCardText>
                                <MDBCardText className="font-weight-light">
                                    {cat.dog_friendly === 5 ? <FiveStars />
                                        : cat.dog_friendly === 4 ? <FourStars />
                                            : cat.dog_friendly === 3 ? <ThreeStars />
                                                : cat.dog_friendly === 2 ? <TwoStars />
                                                    : <OneStars />
                                    }
                                </MDBCardText>
                            </MDBCol>
                            <MDBCol className="col-md-4 col-6 block-example border-bottom border-gray py-md-4 py-3">
                                <MDBCardText className="py-0 mb-md-3 mb-0 font-weight-bold">
                                    Grooming
                                </MDBCardText>
                                <MDBCardText className="font-weight-light">
                                    {cat.grooming === 5 ? <FiveStars />
                                        : cat.grooming === 4 ? <FourStars />
                                            : cat.grooming === 3 ? <ThreeStars />
                                                : cat.grooming === 2 ? <TwoStars />
                                                    : <OneStars />
                                    }
                                </MDBCardText>
                            </MDBCol>


                            <MDBCol className="col-md-4 col-6 block-example border-bottom border-gray py-md-4 py-3">
                                <MDBCardText className="py-0 mb-md-3 mb-0 font-weight-bold">
                                    Health Issues
                                </MDBCardText>
                                <MDBCardText className="font-weight-light">
                                    {cat.health_issues === 5 ? <FiveStars />
                                        : cat.health_issues === 4 ? <FourStars />
                                            : cat.health_issues === 3 ? <ThreeStars />
                                                : cat.health_issues === 2 ? <TwoStars />
                                                    : <OneStars />
                                    }
                                </MDBCardText>
                            </MDBCol>
                            <MDBCol className="col-md-4 col-6 block-example border-bottom border-gray py-md-4 py-3">
                                <MDBCardText className="py-0 mb-md-3 mb-0 font-weight-bold">
                                    Intelligence
                                </MDBCardText>
                                <MDBCardText className="font-weight-light">
                                    {cat.intelligence === 5 ? <FiveStars />
                                        : cat.intelligence === 4 ? <FourStars />
                                            : cat.intelligence === 3 ? <ThreeStars />
                                                : cat.intelligence === 2 ? <TwoStars />
                                                    : <OneStars />
                                    }
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol className="col-md-4 col-6 block-example border-bottom border-gray py-md-4 py-3">
                                <MDBCardText className="py-0 mb-md-3 mb-0 font-weight-bold">
                                    Shedding Level
                                </MDBCardText>
                                <MDBCardText className="font-weight-light">
                                    {cat.intelligence === 5 ? <FiveStars />
                                        : cat.intelligence === 4 ? <FourStars />
                                            : cat.intelligence === 3 ? <ThreeStars />
                                                : cat.intelligence === 2 ? <TwoStars />
                                                    : <OneStars />
                                    }
                                </MDBCardText>
                            </MDBCol>
                            <MDBCol className="col-md-4 col-6 py-md-4 py-3">
                                <MDBCardText className="py-0 mb-md-3 mb-0 font-weight-bold">
                                    Social Needs
                                </MDBCardText>
                                <MDBCardText className="font-weight-light">
                                    {cat.social_needs === 5 ? <FiveStars />
                                        : cat.social_needs === 4 ? <FourStars />
                                            : cat.social_needs === 3 ? <ThreeStars />
                                                : cat.social_needs === 2 ? <TwoStars />
                                                    : <OneStars />
                                    }
                                </MDBCardText>
                            </MDBCol>
                            <MDBCol className="col-md-4 col-6 py-md-4 py-3">
                                <MDBCardText className="py-0 mb-md-3 mb-0 font-weight-bold">
                                    Stranger Friendly
                                </MDBCardText>
                                <MDBCardText className="font-weight-light">
                                    {cat.stranger_friendly === 5 ? <FiveStars />
                                        : cat.stranger_friendly === 4 ? <FourStars />
                                            : cat.stranger_friendly === 3 ? <ThreeStars />
                                                : cat.stranger_friendly === 2 ? <TwoStars />
                                                    : <OneStars />
                                    }
                                </MDBCardText>
                            </MDBCol>
                            <MDBCol className="col-md-4 col-6 py-md-4 py-3">
                                <MDBCardText className="py-0 mb-md-3 mb-0 font-weight-bold">
                                    Vocalisation
                                </MDBCardText>
                                <MDBCardText className="font-weight-light">
                                    {cat.vocalisation === 5 ? <FiveStars />
                                        : cat.vocalisation === 4 ? <FourStars />
                                            : cat.vocalisation === 3 ? <ThreeStars />
                                                : cat.vocalisation === 2 ? <TwoStars />
                                                    : <OneStars />
                                    }
                                </MDBCardText>
                            </MDBCol>
                        </MDBRow>
                    </MDBTabsPane>

                    <MDBTabsPane show={basicActive === 'tab4'}>
                        <MDBRow className="justify-content-center">
                            <MDBCol className="col-md-4 col-6 block-example border-bottom border-gray py-md-4 py-3">
                                <MDBCardText className="font-weight-bold mb-md-3 mb-2">
                                    Hairless
                                </MDBCardText>
                                <MDBCardText className="font-weight-light bg-light col-md-2 col-3 m-auto rounded-circle">
                                    {cat.hairless
                                        ?
                                        <MDBIcon icon="check" className="text-success" />
                                        :
                                        <MDBIcon icon="times" className="text-danger" />
                                    }
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol className="col-md-4 col-6 block-example border-bottom border-gray py-md-4 py-3">
                                <MDBCardText className="font-weight-bold mb-md-3 mb-2">
                                    Rex
                                </MDBCardText>
                                <MDBCardText className="font-weight-light bg-light col-md-2 col-3 m-auto rounded-circle">
                                    {cat.rex
                                        ?
                                        <MDBIcon icon="check" className="text-success py-1" />
                                        :
                                        <MDBIcon icon="times" className="text-danger py-1" />
                                    }
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol className="col-md-4 col-6 block-example border-bottom border-gray py-md-4 py-3">
                                <MDBCardText className="font-weight-bold mb-md-3 mb-2">
                                    Indoor
                                </MDBCardText>
                                <MDBCardText className="font-weight-light bg-light col-md-2 col-3 m-auto rounded-circle">
                                    {cat.indoor
                                        ?
                                        <MDBIcon icon="check" className="text-success py-1" />
                                        :
                                        <MDBIcon icon="times" className="text-danger py-1" />}
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol className="col-md-4 col-6 block-example border-bottom border-gray py-md-4 py-3">
                                <MDBCardText className="font-weight-bold mb-md-3 mb-2">
                                    Hypoallergenic
                                </MDBCardText>
                                <MDBCardText className="font-weight-light bg-light col-md-2 col-3 m-auto rounded-circle">
                                    {cat.hypoallergenic
                                        ?
                                        <MDBIcon icon="check" className="text-success py-1" />
                                        :
                                        <MDBIcon icon="times" className="text-danger py-1" />
                                    }
                                </MDBCardText>
                            </MDBCol>
                            <MDBCol className="col-md-4 col-6 block-example border-bottom border-gray py-md-4 py-3">
                                <MDBCardText className="font-weight-bold mb-md-3 mb-2">
                                    Experimental
                                </MDBCardText>
                                <MDBCardText className="font-weight-light bg-light col-md-2 col-3 m-auto rounded-circle">
                                    {cat.experimental
                                        ?
                                        <MDBIcon icon="check" className="text-success py-1" />
                                        :
                                        <MDBIcon icon="times" className="text-danger py-1" />
                                    }
                                </MDBCardText>
                            </MDBCol>
                            <MDBCol className="col-md-4 col-6 block-example border-bottom border-gray py-md-4 py-3">
                                <MDBCardText className="font-weight-bold mb-md-3 mb-2">
                                    Natural
                                </MDBCardText>
                                <MDBCardText className="font-weight-light bg-light col-md-2 col-3 m-auto rounded-circle">
                                    {cat.natural
                                        ?
                                        <MDBIcon icon="check" className="text-success py-1" />
                                        :
                                        <MDBIcon icon="times" className="text-danger py-1" />
                                    }
                                </MDBCardText>
                            </MDBCol>

                            <MDBCol className="col-md-4 col-6 py-md-4 py-3">
                                <MDBCardText className="font-weight-bold mb-md-3 mb-2">
                                    Rare
                                </MDBCardText>
                                <MDBCardText className="font-weight-light bg-light col-md-2 col-3 m-auto rounded-circle">
                                    {cat.rare
                                        ?
                                        <MDBIcon icon="check" className="text-success py-1" />
                                        :
                                        <MDBIcon icon="times" className="text-danger py-1" />
                                    }
                                </MDBCardText>
                            </MDBCol>
                            <MDBCol className="col-md-4 col-6 py-md-4 py-3">
                                <MDBCardText className="font-weight-bold mb-md-3 mb-2">
                                    Short Legs
                                </MDBCardText>
                                <MDBCardText className="font-weight-light bg-light col-md-2 col-3 m-auto rounded-circle">
                                    {cat.short_legs
                                        ?
                                        <MDBIcon icon="check" className="text-success py-1" />
                                        :
                                        <MDBIcon icon="times" className="text-danger py-1" />
                                    }
                                </MDBCardText>
                            </MDBCol>
                            <MDBCol className="col-md-4 col-6 py-md-4 py-3">
                                <MDBCardText className="font-weight-bold mb-md-3 mb-2">
                                    Suppressed Tail
                                </MDBCardText>
                                <MDBCardText className="font-weight-light bg-light col-md-2 col-3 m-auto rounded-circle">
                                    {cat.suppressed_tail
                                        ?
                                        <MDBIcon icon="check" className="text-success py-1" />
                                        :
                                        <MDBIcon icon="times" className="text-danger py-1" />
                                    }
                                </MDBCardText>
                            </MDBCol>
                        </MDBRow>
                    </MDBTabsPane>

                </MDBTabsContent>


                <MDBRow className="justify-content-center mt-4 mb-3">
                    <MDBCol className="col-md-3 col-5">
                        <MDBBtn outline target="_blank" color="light" href={cat.wikipedia_url}>Read More</MDBBtn>
                    </MDBCol>
                </MDBRow>

            </MDBCardBody>
        </>
    );
}