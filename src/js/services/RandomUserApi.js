import Api from "../config/api.config";

class RandomUserApi {
    generateUsers = async (size = 1) => {
        try {
            const response = await fetch(`${Api.url}/users/random_user?size=${size}`);
            const data = await response.json();
            return data;
        } catch (error) {
            return error;
        }
    };
}

export default RandomUserApi;
