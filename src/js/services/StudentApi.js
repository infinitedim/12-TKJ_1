import api from "../config/api.config";

const StudentApi = {
    getStudents: async () => {
        try {
            const response = await fetch(`${api.url("v1")}/students`);
            const data = await response.json();
            return data.data;
        } catch (error) {
            return error;
        }
    },
};

export default StudentApi;
