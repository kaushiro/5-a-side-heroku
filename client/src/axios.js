import axios from "axios";

export default axios.create({
    baseURL: "https://five-a-side-generator.herokuapp.com/",
    headers: {
        Accept: "application/json",
    },
});