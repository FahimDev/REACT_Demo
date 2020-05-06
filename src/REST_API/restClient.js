import axios from 'axios';
class restClient{


    static GetRequest(getURL){
       return axios.get(getURL).then(response=>{
            return response.data
        }).catch(error=>{
            return error;
        });

    }
}
export default restClient;