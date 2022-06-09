import React, { useState } from 'react';
import {
    MDBCardBody,
    MDBCardText,
    MDBCol,
    MDBIcon,
    MDBRow,
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

    // console.log(cat);

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
                            {
                                Object.entries(cat).map((e, i) => {
                                    if (
                                        e[0] === 'adaptability' ||
                                        e[0] === 'affection_level' ||
                                        e[0] === 'child_friendly' ||
                                        e[0] === 'dog_friendly' ||
                                        e[0] === 'energy_level' ||
                                        e[0] === 'grooming' ||
                                        e[0] === 'health_issues' ||
                                        e[0] === 'intelligence' ||
                                        e[0] === 'shedding_level' ||
                                        e[0] === 'social_needs' ||
                                        e[0] === 'stranger_friendly' ||
                                        e[0] === 'vocalisation'
                                    ) {
                                        return (
                                            <MDBCol key={i} className="col-md-4 col-6 block-example border border-gray py-md-4 py-3">
                                                <MDBCardText className="py-0 mb-md-3 mb-0 font-weight-bold text-capitalize">
                                                    {e[0]}
                                                </MDBCardText>
                                                <MDBCardText className="font-weight-light">
                                                    {e[1] === 5 ? <FiveStars />
                                                        : e[1] === 4 ? <FourStars />
                                                            : e[1] === 3 ? <ThreeStars />
                                                                : e[1] === 2 ? <TwoStars />
                                                                    : <OneStars />
                                                    }
                                                </MDBCardText>
                                            </MDBCol>
                                        )
                                    }
                                })
                            }
                        </MDBRow>
                    </MDBTabsPane>

                    <MDBTabsPane show={basicActive === 'tab4'}>
                        <MDBRow className="justify-content-center">
                            {
                                Object.entries(cat).map((e, i) => {
                                    if (
                                        e[0] === 'hairless' ||
                                        e[0] === 'rex' ||
                                        e[0] === 'indoor' ||
                                        e[0] === 'hypoallergenic' ||
                                        e[0] === 'experimental' ||
                                        e[0] === 'natural' ||
                                        e[0] === 'rare' ||
                                        e[0] === 'short_legs' ||
                                        e[0] === 'suppressed_tail'
                                    ) {
                                        return (
                                            <MDBCol key={i} className="col-md-4 col-6 block-example border border-gray py-md-4 py-3">
                                                <MDBCardText className="font-weight-bold text-capitalize mb-md-3 mb-2">
                                                    {e[0]}
                                                </MDBCardText>
                                                <MDBCardText className="font-weight-light bg-light col-md-2 col-3 m-auto rounded-circle">
                                                    {e[1]
                                                        ?
                                                        <MDBIcon icon="check" className="text-success" />
                                                        :
                                                        <MDBIcon icon="times" className="text-danger" />
                                                    }
                                                </MDBCardText>
                                            </MDBCol>
                                        )
                                    }
                                })
                            }

                        </MDBRow>
                    </MDBTabsPane>

                </MDBTabsContent>

            </MDBCardBody>
        </>
    );
}