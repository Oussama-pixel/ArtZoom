import {applyMiddleware,combineReducers,compose,createStore} from 'redux'
import thunk from 'redux-thunk'
import { adminReducer, uploadFileReducer } from './state/reducers/AdminReducer';
import { fileReducer } from './state/reducers/FilesReducer';

const initialState = {
    files:{},
    upload_files:{},
    admin:JSON.parse(sessionStorage.getItem("admin"))?{data:JSON.parse(sessionStorage.getItem("admin"))}:{admin:{}},

}

const reducer = combineReducers({
    files: fileReducer,
    upload_files:uploadFileReducer,
    admin:adminReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))

export default store;