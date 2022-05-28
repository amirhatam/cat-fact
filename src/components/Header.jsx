import { MDBCardTitle } from 'mdb-react-ui-kit'
import React from 'react'

export default function Header() {
    return (
        <div
            className='p-5 text-center bg-image'
            style={{ backgroundImage: "url('https://browsecat.net/sites/default/files/wildcat-wallpapers-45343-22768-1435901.png')", height: 600 }}
        >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className='d-flex justify-content-center align-items-center h-75'>
                    <div className='text-white'>
                        <MDBCardTitle className='text-center my-md-5 my-4 display-5'>List of Cat Breeds</MDBCardTitle>
                        {/* <h5>When you scroll down it will disappear</h5>
                        <br />
                        <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
