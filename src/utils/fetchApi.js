import axios from "axios"
const BASE_URL="https://www.googleapis.com/youtube/v3"
const API_KEY = 'AIzaSyDwk7oPzmMPyjlNze4oj3kT1wCy1mxHjTs';

export const fetchApiForYoutubeData = async(enpoints,params ={}) =>{
    try {
       const response = await axios.get(`${BASE_URL}/${enpoints}`,{
           params:{
               ...params,
               key: API_KEY,
           }
       })
       return response.data;
    } catch (error) {
       console.error(error,'error fetching youtube data')
    }
}