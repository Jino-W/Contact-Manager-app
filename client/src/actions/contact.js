import axios from "../config/axios"


export const showContact=(contact)=>{
    return {
        type:"SHOW_CONTACT",
        payload: contact
    }
}


export const startShowContact=(id)=>{
    return (dispatch)=>{
        axios.get(`/contacts/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const contact=response.data
            dispatch(showContact(contact))
        })
        .catch(err=>{
            alert(err)
        })
    }
}


