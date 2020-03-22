const filterContactsInitialState = []

const filterContactsReducer=(state= filterContactsInitialState, action)=>{
    switch (action.type) {
        case "FILTER_CONTACTS": {
            return [...action.payload.contacts].filter(item=>{
                return item.name.toLowerCase().includes(action.payload.search.toLowerCase()) || item.email.toLowerCase().includes(action.payload.search.toLowerCase()) || item.mobile.includes(action.payload.search)
            })
        }
        default:{
            return [...state]
        }
    }
}

export default filterContactsReducer