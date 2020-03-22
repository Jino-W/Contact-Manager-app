import axios from '../config/axios'

export const getContacts =(contacts)=>{
    return {
        type: "GET_CONTACTS",
        payload: contacts
    }
}


export const deleteContact =(id)=>{
    return {
        type: "DELETE_CONTACT",
        payload: {
            contact_id : id
        }
    }
}


export const editContact =(id, formData)=>{
    return {
        type: "EDIT_CONTACT",
        payload: {
            contact_id : id,
            formData
        }
    }
}


export const createContact =(formData)=>{
    return {
        type: "CREATE_CONTACT",
        payload: {
            formData
        }
    }
}



export const startGetContacts =()=>{
    return (dispatch)=>{
        axios.get(`/contacts`, {
            headers:{
                "x-auth" : localStorage.getItem("authToken")
            }
        })
        .then(response=>{
            const contacts = response.data
            dispatch(getContacts(contacts))
        })
        .catch(err=>{
            alert(err)
        })
    }
}


export const startDeleteContact =(id, props)=>{
    return (dispatch)=>{
        axios.delete(`/contacts/${id}`,{
                headers:{
                    "x-auth" : localStorage.getItem('authToken')
                }
            })
            .then(response=>{
                dispatch(deleteContact(id))
                // props.history.push('/contacts')
                // window.location.reload()
            })
            .catch(err=>{
                alert(err)
            })
    }
}


export const startEditContact = (id, formData) => {
    return (dispatch)=>{
        axios.put(`/contacts/${id}`, formData, {
            headers:{
                "x-auth" : localStorage.getItem("authToken")
            }
        })
        .then(response=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }else{
                dispatch(editContact(id, response.data))
                // props.history.push(`/contacts/${props.match.params.id}`)
            }
        })
        .catch(err=>{
            alert(err)
        })
    }
}


export const startCreateContact = (formData)=>{
    return (dispatch)=>{
        axios.post(`/contacts`, formData, {
            headers:{
                "x-auth" : localStorage.getItem("authToken")
            }
        })
            .then(response=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }else{
                    console.log("f", response.data)
                    dispatch(createContact(response.data))
                    // window.location.reload()
                }
            })
            .catch(err=>{
                alert(err)
            })
    }
}
