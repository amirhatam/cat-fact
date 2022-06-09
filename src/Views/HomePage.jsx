import React from 'react'
import Header from '../components/Header';
import Card from '../components/cards/Card';
import Paginate from '../components/pagination/Paginate';


export default function HomePage(props) {

    return (
        <div>
            <Header />
            <Paginate setCatsList={props.setCatsList} />
            <Card
                catsList={props.catsList}
                fact={props.fact}
                setFact={props.setFact}
                boxColor={props.boxColor}
                basicActive={props.basicActive}
                setBasicActive={props.setBasicActive}
            />

        </div>
    )
}
