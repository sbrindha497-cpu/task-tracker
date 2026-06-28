import axios from "axios";

const API_URL = "http://localhost:8080/api/projects";

class ProjectService {

    getAllProjects() {
        return axios.get(API_URL);
    }

    addProject(project) {
        return axios.post(API_URL, project);
    }
}

export default new ProjectService();