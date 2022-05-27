const axios = require('axios')

export const ListOfBreeds = async (props) => {
    try {
        const response = await axios.get("https://catfact.ninja/breeds?page=1")
        const data = response.data

        if (response.status === 200) {

            props.setData(data)
            props.setCatsList(data.data)
            props.setTotalPage(data.last_page);
        }

    } catch (error) {
        console.error(error)
        return false
    }
}