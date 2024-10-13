import axios from "axios";
import { langData /* projects */ } from "../data";

/* export const getProjectData = async () => {
  console.log("projects: ", projects);
  
  return await axios
    .post("https://reqres.in/api/workintech", projects)
    .then((res) => res.data)
    .catch((err) => console.log(err.message));
}; */

export const getMainData = async () => {
  console.log("main: ", langData);
  return await axios
    .post("https://reqres.in/api/workintech", langData)
    .then((res) => res.data)
    .catch((err) => console.log(err.message));
};
