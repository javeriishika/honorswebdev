//API_NOTIFICATION_MESSAGES = 
    export const API_NOTIFICATION_MESSAGES ={
        loading:{
            title:"...loading",
            message:"data is being laoded,please wait"
        },
success:{
    title:"success",
    message:"Data successfully loaded"
},
responseFailure:{
    title:"Error",
    message:"An error occured  while fetching response from the server.please try again,"

},
requestFailure:{
    title:"Error",
    message:"An error occured whileparsing request data"
},
networkError:{
    title:"error",
    message:"unable to connect with the server . Please check internet connection and try again later"
}
    }
    //API SERVICE CALL
    //SAMPLE REQUEST
    //NEED SERVICE CALL:{URL:'/', METHOD:'POST/GET/PUT/DELETE,'PARAMS:true/false,query:true/false}

    export const SERVICE_URLS ={
        userSignup:{
            url:'/signup',method:"POST"
        }
    }
