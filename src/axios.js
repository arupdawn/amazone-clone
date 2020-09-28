import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-e-clone-b6b75.cloudfunctions.net/api", // THE API (cloud function) URL
    
  // http://localhost:5001/e-clone-b6b75/us-central1/api
});

export default instance;
