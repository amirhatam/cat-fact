const axios = require('axios')

export const ListOfBreeds = async (props) => {
    try {
        //Home page 

        const resCatApi = await axios.get("https://api.thecatapi.com/v1/breeds?limit=10&page=0")
        const dataCatApi = resCatApi.data
        // console.log(dataCatApi);

        let newCatList = []
        if (resCatApi.status === 200) {
            await dataCatApi.map(e => {
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

            // console.log(newCatList);

        }
        props.setCatsList(newCatList)
        // props.setCatsList(dataCatApi)

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