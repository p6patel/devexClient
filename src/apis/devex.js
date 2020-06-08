import axios from 'axios';

// add the id and key here to call the devex endpoint

const KEY = 'KEY';
const ID = 'ID'

export default axios.create({
    baseURL: 'base url',
    params: {
        id: ID,
        key: KEY
    }
});
