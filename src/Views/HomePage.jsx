import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header';
import Card from '../components/Card';
import Paginate from '../components/Paginate';
import { MDBCardTitle } from 'mdb-react-ui-kit';


export default function HomePage() {
    const [data, setData] = useState([])
    const [catsList, setCatsList] = useState([])

    const [totalPage, setTotalPage] = useState([])


    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("https://catfact.ninja/breeds?page=1")
                const data = response.data
                // console.log(response.data);
                if (response.status === 200) {
                    setData(data)
                    setCatsList(data.data)
                    setTotalPage(data.last_page);
                }
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
            <Card data={data} catsList={catsList} />

        </div>
    )
}
