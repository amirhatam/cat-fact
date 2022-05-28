import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Card from '../components/Card';
import Paginate from '../components/Paginate';
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
            <Paginate totalPage={totalPage} setCatsList={setCatsList} />
            <Card data={data} catsList={catsList} setFact={setFact} fact={fact} boxColor={boxColor} setBoxColor={setBoxColor} />

        </div>
    )
}
