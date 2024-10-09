import axios from "axios";
import { langData } from "../data";

export const getProjectData = async () => {
  return await axios.post("https://reqres.in/api/workintech", langData).data;
};
