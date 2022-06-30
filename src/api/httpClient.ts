import axios from 'axios'

const instance = axios.create({
    headers: {
        username: localStorage.getItem('username'),
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
    }
});

export default instance;
