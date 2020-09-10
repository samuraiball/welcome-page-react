import axios from "axios";

class WelcomePageApi {
    async fetchBlogs() {
        return axios(
            "https://welcome-page-api.herokuapp.com/hatena/entries",
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET",
                }
            });
    }
}

export default WelcomePageApi