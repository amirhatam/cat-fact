import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Main() {
    const [cats, setCats] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("https://catfact.ninja/breeds?page=1")
                const data = response.data.data
                // console.log(data);
                if (response.status === 200) {
                    setCats(data)
                }
            } catch (error) {
                console.log(error)
            }
        })();
    }, [])

    console.log(cats);

    return (
        <div>

        </div>
    )
}
