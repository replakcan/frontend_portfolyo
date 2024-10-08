import axios from "axios"

export const createApiInstance = () => {


  return axios.create({
    baseURL: "https://reqres.in/api/workintech",
  })


}

export let API = createApiInstance();