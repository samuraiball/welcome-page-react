import axios from "axios";
import Config from "../Config";

class WelcomePageApi {
    async fetchBlogs() {
        return axios(
            Config().welcomePageEndpoint + "/hatena/entries",
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET",
                }
            }
        );
    }
}

export default WelcomePageApi