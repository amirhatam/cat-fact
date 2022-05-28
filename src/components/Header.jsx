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
                height='850px'
                controls={false}
                muted
                playing
                loop
            />
            <div className='mask' >
                <div className='d-flex justify-content-center align-items-center h-50'>
                    <div className='text-white'>
                        <MDBCardTitle className='text-center my-md-5 my-4 display-3'>THE CATS</MDBCardTitle>
                        <h5>List of Cat Breeds</h5>
                        <br />
                    </div>
                </div>
            </div>
        </div>




    )
}
