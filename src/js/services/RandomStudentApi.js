import api from '../config/api.config';

const RandomUserApi = {
    generateUsers: async () => {
        try {
            const response = await fetch(`${api.url}`);
            const data = await response.json();
            return data;
        } catch (error) {
            return error;
        }
    },
}

export default RandomUserApi;
