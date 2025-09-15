import axios from "axios";

const BASE_URL = "http://localhost:8080/api/jobs/admin/";



export const createNewJobPost = async (jobData) => {
  try {
    const response = await axios.post(`${BASE_URL}create`, jobData);
    return response.data;
    } catch (error) {
    throw new error;
  }
};


export const fetchAllJobPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}getAllPosts`);
    return response.data;
  } catch (error) {
    throw new error;
  }
};

export const fetchFilteredJobPosts = async (filters) => {
  try {
    const response = await axios.post(`${BASE_URL}getPostsByFilters`, filters);
   
    return response.data;
  } catch (error) {
    throw new error;
  }
}