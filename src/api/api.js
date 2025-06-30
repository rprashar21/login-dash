import axios from "axios";

const API_BASE_URL = "http://localhost:8085/api";

export const checkUserExists = (email) => {
  return axios.get(`${API_BASE_URL}/users?email=${encodeURIComponent(email)}`);
}; 