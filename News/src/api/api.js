import axios from 'axios';


export default axios.create({
    baseURL:'https://newsapi.org/v2/everything?q=Apple&from=2021-06-10&sortBy=popularity',
    headers:{
        Authorization: 'Bearer 131a33af38ae445f81972e0be00cb5e2'

    }
})

//https://newsapi.org/v2/everything?q=Apple&from=2021-06-10&sortBy=popularity&apiKey=API_KEY