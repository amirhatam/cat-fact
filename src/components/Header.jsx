import { MDBCardTitle } from 'mdb-react-ui-kit'
import React from 'react'
import ReactPlayer from 'react-player'
import '../assets/styles/HeaderStyles.css'
import catVid from '../assets/cat.mp4'

export default function Header() {
    return (
        <div
            className='text-center bg-image bg-dark'
        >
            <ReactPlayer
                url={catVid}
                width='100%'
                // height={`${window.innerHeight}px`}
                height="auto"
                controls={false}
                muted
                playing
                loop
            />
            <div className='mask' >
                <div className='d-flex justify-content-center align-items-center h-75'>
                    <div className='text-white'>
                        <MDBCardTitle className='titleH text-center my-md-5 my-4 display-1'>The Cats</MDBCardTitle>
                        <h3 className='titleH display-7'>List of Cat Breeds</h3>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}
