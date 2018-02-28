import axios from 'axios';

export default {
    getHeroes: function () {
        return axios.get('https://jdtorregrosasapi.herokuapp.com/heroes');
    }
};
