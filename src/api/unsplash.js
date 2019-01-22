import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID cdced5bbee482c900a6a8427f1ebc8dd520038d76fc3ad52afbc0f6819afb13a"
  }
});
