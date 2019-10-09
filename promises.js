import axios from 'axios'

export const getDataFromApi = url => (
    axios.get(url)
        .then(({ data }) => data)
        .catch(e => console.error(e))
)