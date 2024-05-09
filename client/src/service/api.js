import axios from"axios";


import { API_NOTIFICATION_MESSAGES,SERVICE_URLS } from "../constants/config";
const API_URL= 'https://localhost:8000';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timout: 10000,
    headers:{
     "content-type":"application/json"   
    }
})
axiosInstance.interceptiors.request.use(
    function(config){
        return congif;
    },
    function(error){
        return Promise.reject(error);
    }
)
axiosInstance.interceptiors.response.use(
    function(response){
        // stop global loader here
         returnprocessResponse(response);
    },
    function(error){
        //stop global loader here
        return Promise.reject(processError(response));
    }
)


///////////
//if usccess -> return {issuccess:true,data:object}
// if fail -> return {isfailure:true,data:string,msg:string,code:int}
////////
const processResponse =(response) =>{
if(response?.status === 200){
    return{isSuccess: true,data:response.data}
}else{
    return{
        isFailure:true,
        status:response?.status,
        msg:response?.msg,
        code:response?.code
        }
     }
}

const processError = (error) =>{
    if(error.response){
        //represent the code and server responded with a staus other than falls out of the range of2.x.x.
        console.log("ERROR IN RESPONSE:",error.toJSON());
        return{
isError:true,
msg:API_NOTIFICATION_MESSAGES.responseFailure,
code:error.respnose.status
        }

    }else if(error.request){
//request made but no response was received
console.log("ERROR IN REQUEST:",error.toJSON());
return{
isError:true,
msg:API_NOTIFICATION_MESSAGES.requestFailure,
code:""
   } } else {
// Something happened in setting up request that triggers an error
   
console.log("ERROR IN NETWORK:",error.toJSON());
return{
isError:true,
msg:API_NOTIFICATION_MESSAGES.networkError,
code:""
}

} }
const API ={};


for(const[key, value]of Object.entries(SERVICE_URLS)) {
    API[key] = (body, showUploadProgress, showDownloadProgress)=>
        axiosInstance({
            method: value.method,
            url:value.url,
            data:body,
            responseType:value.responseType,
            onUploadProgress:function (progressEvent){
                if(showUploadProgress){
                 let percentageCompleted = Math.round((progressEvent.loaded * 100)/progressEvent.total)
                 showUploadProgress(percentageCompleted) ;  
                }
            },
            onDownloadProgress:function (progressEvent){
                if(showDownloadProgress){
                 let percentageCompleted = Math.round((progressEvent.loaded * 100)/progressEvent.total)
                 showDownloadProgress(percentageCompleted) ;

        }
    }
})
    }
export{ API };
