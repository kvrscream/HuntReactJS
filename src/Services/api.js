import Axios from 'axios';


const api = Axios.create({
  //baseURL: "http://rocketseat-node.herokuapp.com/api"
  baseURL:"http://localhost:3001/api"
});


export default api;