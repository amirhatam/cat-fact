const axios = require('axios')

export const ListOfBreeds = async (props) => {
    try {
        //Home page 
        const resCatApi = await axios.get("https://api.thecatapi.com/v1/breeds?limit=10&page=0")
        const dataCatApi = resCatApi.data

        if (resCatApi.status === 200) {
            props.setCatsList(dataCatApi)

        }

        //More Breeds page
        const resCatFact = await axios.get("https://catfact.ninja/breeds?page=1")
        const dataCatFact = resCatFact.data

        if (resCatFact.status === 200) {
            props.setData(dataCatFact)
            props.setMoreCatsList(dataCatFact.data)
            props.setTotalPage(dataCatFact.last_page);
        }


    } catch (error) {
        console.error(error)
        return false
    }
}