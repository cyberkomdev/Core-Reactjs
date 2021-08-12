import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'

import {persistReducer} from "redux-persist";
import Auth from "./Auth";
import myteam from "./myteam";
import organization from "./organization";

const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['module']
}

const rootReducers = combineReducers({
    Auth,
    myteam,
    organization
})


export default persistReducer(persistConfig, rootReducers)
