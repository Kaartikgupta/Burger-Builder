import axios from 'axios';

const instance=axios.create({
    baseURL:'https://burger-builder-rapp-default-rtdb.firebaseio.com/'
});
export default instance;