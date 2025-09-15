import axios from "axios";

const BASE_URL = "http://localhost:8080/api/jobs/admin/";



export const createNewJobPost = async (jobData) => {
  console.log("Creating job post with data:", jobData);
  try {
    const response = await axios.post(`${BASE_URL}create`, jobData);
    console.log("Job post created successfully:", response.data);
    return response.data;
    } catch (error) {
    console.error("Error creating job post:", error);
    throw error;
  }
};


export const fetchAllJobPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}getAllPosts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching job posts:", error);
    throw error;
  }
};

export const fetchFilteredJobPosts = async (filters) => {
  try {
    const response = await axios.post(`${BASE_URL}getPostsByFilters`, filters);
    console.log(response);
    console.log("Filtered job posts:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching filtered job posts:", error);
    throw error;
  }
}