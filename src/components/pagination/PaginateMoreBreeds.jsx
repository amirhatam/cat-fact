import React from 'react'
import ReactPaginate from 'react-paginate';
import axios from 'axios'

export default function PaginateMoreBreeds(props) {

    const pagination = async (currentPage) => {
        try {
            let catsData = []
            const response = await axios.get(`https://catfact.ninja/breeds?page=${currentPage}`)
            if (response.status === 200) {
                // console.log("=>", response.data);
                props.setMoreCatsList(response.data.data)
            }
        } catch (err) {
            console.error(err);
        }
    }


    const handlePageClick = async (data) => {
        // console.log("data", data.selected);

        let currentPage = data.selected + 1;

        const commentsFormServer = await pagination(currentPage)
    }

    const totalPage = Math.ceil(props.totalPage)

    return (
        <div className='col-12'>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={totalPage}
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
