import axios from "axios";

export async function fetchUserDetails(){ 
  const API_BASE_URL =process.env.NEXT_PUBLIC_MODE === "production"? "https://coding-task-eight.vercel.app": "http://localhost:3000";
    return axios.get(`${API_BASE_URL}/api/getUserDetails`)
}