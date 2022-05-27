const axios = require('axios')

export const CatFact = async (props) => {
    try {
        const response = await axios.get("https://catfact.ninja/fact?max_length=140")
        const randomFact = response.data.fact
        if (response.status === 200) {
            props.setFact(randomFact)
        }

    } catch (error) {
        console.error(error)
        return false
    }
}