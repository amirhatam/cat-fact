import { MDBCardTitle } from 'mdb-react-ui-kit'
import React from 'react'
import CardMoreBreeds from '../components/cards/CardMoreBreeds'
import PaginateMoreBreeds from '../components/pagination/PaginateMoreBreeds'

export default function MoreBreeds(props) {


    return (
        <div>

            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://browsecat.net/sites/default/files/wildcat-wallpapers-45343-22768-1435901.png')", height: '40vmax' }}
            >

                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <MDBCardTitle className='titleH text-center my-md-5 my-4 display-5'>More Breeds</MDBCardTitle>
                        </div>
                    </div>
                </div>
            </div>


            <PaginateMoreBreeds
                setMoreCatsList={props.setMoreCatsList}
                totalPage={props.totalPage}

            />
            <CardMoreBreeds
                fact={props.fact}
                setFact={props.setFact}
                moreCatsList={props.moreCatsList}
                boxColor={props.boxColor}
            />
        </div>
    )
}
