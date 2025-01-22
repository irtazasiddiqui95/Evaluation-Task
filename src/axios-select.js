import axios from 'axios';



const instance = axios.create({
    baseURL: 'https://evaluation-task-b6cc5-default-rtdb.firebaseio.com/'
});

export default instance;