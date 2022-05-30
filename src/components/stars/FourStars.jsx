import { MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'

export default function FourStars() {
    return (
        <a className="bg-light px-2 rounded-pill">
            <MDBIcon icon="star" color='warning' />
            <MDBIcon icon="star" color='warning' />
            <MDBIcon icon="star" color='warning' />
            <MDBIcon icon="star" color='warning' />
            <MDBIcon icon="star" far color='warning' />
        </a>
    )
}
