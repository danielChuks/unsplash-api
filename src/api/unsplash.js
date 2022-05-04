import axios from "axios";



export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: "Client-ID 3pSdKgPbWo8pqNoN3nbwo1dBEG5kRR1jlkm6fw8rz4o"
      }
})