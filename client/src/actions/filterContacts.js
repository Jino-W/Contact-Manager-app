
export const filterContacts =(contacts, search)=>{
    return {
        type: "FILTER_CONTACTS",
        payload: {
            contacts,
            search
        }
    }
}



