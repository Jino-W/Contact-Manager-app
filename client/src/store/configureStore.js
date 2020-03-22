import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import contactsReducer from '../reducers/contacts'
import contactReducer from "../reducers/contact"
import filterContactsReducer from "../reducers/filterContacts"
import userReducer from "../reducers/user"

const configureStore = () =>{
    const store = createStore(combineReducers({
        contacts: contactsReducer,
        contact: contactReducer,
        user: userReducer,
        filterContacts: filterContactsReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore