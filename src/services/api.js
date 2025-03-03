import axios from 'axios'
import { langData } from '../data'

export const getMainData = async () => {
  console.log('main: ', langData)
  return await axios
    .post('https://reqres.in/api/workintech', langData)
    .then((res) => res.data)
    .catch((err) => console.log(err.message))
}
