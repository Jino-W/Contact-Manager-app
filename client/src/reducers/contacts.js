const contactsInitialState = []

const contactsReducer=(state= contactsInitialState, action)=>{
    switch (action.type) {
        case "GET_CONTACTS": {
            return [...action.payload]
        }
        case "DELETE_CONTACT":{
            return [...state].filter(contact=> contact._id !== action.payload.contact_id)
        }
        case "EDIT_CONTACT":{
            return [...state].map(contact=> {
                if(action.payload.contact_id === contact._id){
                    return Object.assign(contact, action.payload.formData)
                }
                return contact
            })
        }
        case "CREATE_CONTACT":{
            return [action.payload.formData, ...state]
        }
        default:{
            return [...state]
        }
    }
}

export default contactsReducer