import React, { useState } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBContainer,
    MDBRow,
    MDBTooltip,
} from 'mdb-react-ui-kit'
import { CatFact } from "../../utils/CatFact";
import '../../assets/styles/CardStyles.css'
import SpinnerPage from "../SpinerPage";

import NotFound from '../../assets/images/not-found.jpg'
import Tabs from "./Tabs";

const Card = (props) => {
    const [tab, setTab] = useState([1]);


    const handleMouseEnter = () => {
        const getFact = CatFact({ setFact: props.setFact })
    }

    const handleMouseLeave = () => {
        props.setFact([])
    }


    return (
        <MDBContainer className="py-lg-5">
            <MDBRow className="justify-content-center">
                {
                    props.catsList != 0
                        ?
                        props.catsList.map((e, i) => {
                            return (
                                // <MDBCardGroup key={i} className='col-md-6 col-11 my-5'>

                                <div key={i} className='col-md-6 col-11 my-5'>

                                    <MDBCard background={props.boxColor[i]}>
                                        <MDBRow style={{ cursor: "pointer" }}>

                                            <div className='col-12 bg-image hover-overlay'>
                                                {
                                                    e.image && e.image.url !== undefined
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
                                                                <div
                                                                    style={{ backgroundImage: `url(${e.image.url})`, backgroundPosition: 'top', height: '80vmin' }}
                                                                    className='p-5 text-center bg-image'
                                                                ></div>
                                                                {/* <MDBCardImage src={e.image.url} fluid alt='...' style={{ height: '60vmin' }} /> */}
                                                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                            </MDBTooltip>
                                                        </div>
                                                        :
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
                                                                <div
                                                                    style={{ backgroundImage: `url(${NotFound})`, height: '80vmin' }}
                                                                    className='p-5 text-center bg-image'
                                                                ></div>
                                                                {/* <MDBCardImage src={NotFound} style={{ height: '60vmin' }} fluid alt='...' /> */}
                                                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                            </MDBTooltip>
                                                        </div>
                                                }
                                            </div>
                                        </MDBRow>

                                        {
                                            tab.map((elem, index) => {
                                                return <Tabs
                                                    data={e}
                                                    key={index}
                                                />
                                            })
                                        }

                                        {
                                            e.wikipedia_url
                                                ?
                                                <div className="text-center my-md-4 mb-3">
                                                    <MDBBtn outline target="_blank" color="light" href={e.wikipedia_url}>Read More</MDBBtn>
                                                </div>
                                                :
                                                <div className="text-center my-md-4 mb-3">
                                                    <MDBBtn outline target="_blank" color="light" href={e.wikipedia_url}>Not Found !</MDBBtn>
                                                </div>
                                        }

                                    </MDBCard>
                                </div>
                            )
                        })
                        :
                        <SpinnerPage />
                }

            </MDBRow >
        </MDBContainer >

    );
}

export default Card;