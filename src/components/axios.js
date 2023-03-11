import axios from 'axios';
const instance =axios.create({
    baseURL:'http://127.0.0.1:5001/clone-83593/us-central1/api'// the API (cloud function) URL http://127.0.0.1:5001/clone-83593/us-central1/api
});

export default instance;