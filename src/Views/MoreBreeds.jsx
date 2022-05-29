import React from 'react'
import CardMoreBreeds from '../components/cards/CardMoreBreeds'
import PaginateMoreBreeds from '../components/pagination/PaginateMoreBreeds'

export default function MoreBreeds(props) {


    return (
        <div>
            <h1 className='text-center my-md-5 my-4 display-3'>More Breeds</h1>
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
