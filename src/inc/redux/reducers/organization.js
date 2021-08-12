const initilState = {
    loading:true,
    data: [],
    single: {
        loading:true,
        data:{}
    }
}


export default function (state = initilState, action){
    let {type, payload} = action
    switch (type){
        case "":
            return{
                ...state,

            }
        default :
            return state;
    }
}
