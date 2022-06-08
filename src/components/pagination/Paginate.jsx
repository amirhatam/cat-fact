import React from 'react'
import ReactPaginate from 'react-paginate';
import axios from 'axios'
import { ListOfBreeds } from '../../utils/ListOfBreeds';

export default function Paginate(props) {

    const pagination = async (currentPage) => {
        try {
            let catsData = []
            // const response = await axios.get(`https://catfact.ninja/breeds?page=${currentPage}`)
            const response = await axios.get(`https://api.thecatapi.com/v1/breeds?limit=10&page=${currentPage}`)
            const dataCatApi = response.data

            let newCatList = []
            if (response.status === 200) {

                // props.setCatsList(response.data)
                dataCatApi.map(e => {
                    newCatList.push({
                        adaptability: e.adaptability,
                        affection_level: e.affection_level,
                        child_friendly: e.child_friendly,
                        description: e.description,
                        dog_friendly: e.dog_friendly,
                        energy_level: e.energy_level,
                        experimental: e.experimental,
                        grooming: e.grooming,
                        hairless: e.hairless,
                        health_issues: e.health_issues,
                        hypoallergenic: e.hypoallergenic,
                        image: e.image.url,
                        indoor: e.indoor,
                        intelligence: e.intelligence,
                        lap: e.lap,
                        life_span: e.life_span,
                        name: e.name,
                        natural: e.natural,
                        origin: e.origin,
                        rare: e.rare,
                        rex: e.rex,
                        shedding_level: e.shedding_level,
                        short_legs: e.short_legs,
                        social_needs: e.social_needs,
                        stranger_friendly: e.stranger_friendly,
                        suppressed_tail: e.suppressed_tail,
                        temperament: e.temperament,
                        vocalisation: e.vocalisation,
                        temperament: e.temperament,
                        wikipedia_url: e.wikipedia_url,
                    })
                })
            }

            props.setCatsList(newCatList)
        } catch (err) {
            console.error(err);
        }
    }


    const handlePageClick = async (data) => {
        // console.log("data", data.selected);

        let currentPage = data.selected

        const commentsFormServer = await pagination(currentPage)
    }

    return (
        <div className='col-12'>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={6}
                marginPagesDisplayed={1}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                //Styles
                containerClassName={"pagination justify-content-center mt-5"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item "}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item "}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    )
}
