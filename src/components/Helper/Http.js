// api.js
import Axios from "axios";

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null
let urls = {
    test: `http://localhost:5000/`,
    development: 'https://fakestoreapi.com'
}
const Http = Axios.create({
    baseURL: urls.development,
    headers: {
        'Authorization': `Bearer ${userToken}`
    }
});

export default Http;