import axios from 'axios'

async function getInfo(params){
    const response = await axios('http://localhost:3000/0')
    return response.data
}

export default getInfo