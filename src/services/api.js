import axios from "axios";
import { projects } from "../data";

export const getProjectData = async () => {
  console.log("projects: ", projects);
  return await axios
    .post("https://reqres.in/api/workintech", projects)
    .then((res) => res.data)
    .catch((err) => console.log(err.message));
};
