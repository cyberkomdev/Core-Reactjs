const initialState = {
    user:null,
    token:null,
    isAuthenticated: false,
    loading: false
}

export default function(state = initialState, action){
    const {type, payload} = action;

    switch (type){
        case "IS_LOGIN":
            return{
                ...state,
                user: payload.user,
                token:payload.token,
                isAuthenticated: true,
                loading: false,
            }
        case "IS_LOGIN_ERROR":
            return{
                ...state,
                user: null,
                token:null,
                isAuthenticated: false,
                loading: false,
            }
        default:
            return state;
    }
}
