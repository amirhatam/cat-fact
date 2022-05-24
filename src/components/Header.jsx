import React from 'react'

export default function Header() {
    return (
        <div
            className='p-5 text-center bg-image'
            style={{ backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/img%20(51).webp')", height: 600 }}
        >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white'>
                        <h2>This Navbar isn't fixed</h2>
                        <h5>When you scroll down it will disappear</h5>
                        <br />
                        <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
