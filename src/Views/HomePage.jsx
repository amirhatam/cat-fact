import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Card from '../components/Card';
import Paginate from '../components/Paginate';
import { MDBCardTitle } from 'mdb-react-ui-kit';
import { ListOfBreeds } from '../utils/ListOfBreeds';
import { randomColor } from '../utils/BoxColor';


export default function HomePage() {
    const [data, setData] = useState([])
    const [catsList, setCatsList] = useState([])
    const [fact, setFact] = useState([])
    const [boxColor, setBoxColor] = useState([])

    const [totalPage, setTotalPage] = useState([])

    useEffect(() => {
        (async () => {
            try {

                const getData = ListOfBreeds({ setData, setCatsList, setTotalPage })

                const getColor = randomColor({ setBoxColor, catsList })

            } catch (error) {
                console.log(error)
            }
        })();
    }, [])



    return (
        <div>
            <Header />
            <MDBCardTitle className='text-center my-md-5 my-4 display-5'>The Cats</MDBCardTitle>
            <Paginate totalPage={totalPage} setCatsList={setCatsList} />
            <Card data={data} catsList={catsList} setFact={setFact} fact={fact} boxColor={boxColor} setBoxColor={setBoxColor} />

        </div>
    )
}
