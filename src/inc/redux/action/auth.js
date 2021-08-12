import axiosInstance from "../../utils/AxiosInstance";

export const SignIn = ()=> async dispatch => {
    try{
        await axiosInstance.post('',{},{
            headers:{
                "Content-Type": "application/json"
            }
        })
            .then((res)=> {
                dispatch({
                    type:"",
                    payload:res.data
                })
            })
            .catch((err)=> {
                dispatch({
                    type:""
                })
            })
    }catch(err){
        throw err;
    }
}

export const UserLoaded = ()=> async dispatch => {
    try{

    }catch(err){
        throw err;
    }
}
