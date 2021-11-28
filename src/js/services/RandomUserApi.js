import api from '../config/api.config';

const RandomUserApi = {
    generateUsers: async (size = 1) => {
        try {
            const response = await fetch(`${api.url}/users/random_user?size=${size}`);
            const data = await response.json();
            return data;
        } catch (error) {
            return error;
        }
    },
}

export default RandomUserApi;
