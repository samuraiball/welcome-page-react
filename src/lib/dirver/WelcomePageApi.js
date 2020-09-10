import axios from "axios";

class WelcomePageApi {
    async fetchBlogs() {
        return axios(
            "http://localhost:8081/hatena/entries",
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET",
                }
            });
    }
}

export default WelcomePageApi