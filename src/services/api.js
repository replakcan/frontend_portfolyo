import axios from "axios";
import { projects } from "../data";

export const getProjectData = async () => {
  console.log("projects: ", projects);
  try {
    const res = await axios.post("https://reqres.in/api/workintech", projects);
    return res.data; // This returns the data after the promise is resolved
  } catch (error) {
    console.error("Error fetching project data: ", error);
    return undefined; // Return undefined or handle the error as needed
  }
};
