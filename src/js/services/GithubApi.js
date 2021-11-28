import Api from "../config/api.config";

class GithubApi {
    constructor(props) {
        this._username = props;
    }

    getData = async () => {
        try {
            const response = await fetch(`${Api.url}/${this._username}`);
            const data = await response.json();
            return data;
        } catch (error) {
            return error;
        }
    };
}

export default GithubApi;
