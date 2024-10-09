import axios from "axios";
import { langData } from "../data";

export const getLangData = async () => {
  return await axios.post("https://reqres.in/api/workintech", langData).data;
};
